import { useState, useRef, useEffect } from "react";

export type TimerState = "stopped" | "running" | "paused";

interface UseTimerProps {
    onTimerStop?: (duration: number, startTime: Date) => void;
}

const useTimer = ({ onTimerStop }: UseTimerProps) => {
    const [time, setTime] = useState(0);
    const [timerState, setTimerState] = useState<TimerState>("stopped");
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<Date | null>(null);

    const startTimer = () => {
        setTimerState("running");
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        startTimeRef.current = new Date();
    };

    const pauseTimer = () => {
        setTimerState("paused");
        stopTimer();
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        if (startTimeRef.current) {
            const endTime = new Date();
            const duration = Math.floor(
                (endTime.getTime() - startTimeRef.current.getTime()) / 1000
            );
            onTimerStop?.(duration, startTimeRef.current);
            startTimeRef.current = null;
        }
    };

    const resetTimer = () => {
        setTimerState("stopped");
        setTime(0);
        stopTimer();
    };

    useEffect(() => {
        if (timerState === "stopped") {
            stopTimer();
        }
        return () => stopTimer();
    }, [timerState]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    };

    return {
        time,
        timerState,
        startTimer,
        pauseTimer,
        stopTimer,
        resetTimer,
        formatTime,
    };
};

export default useTimer;
