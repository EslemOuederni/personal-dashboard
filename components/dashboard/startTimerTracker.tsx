"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from '../ui/button';
import { PauseIcon, PlayIcon, StopCircleIcon } from 'lucide-react';

type TimerState = "stopped" | "running" | "paused";

const StartTimerTracker = () => {
    const [time, setTime] = useState(0)
    const [timerState, setTimerState] = useState<TimerState>("stopped");

    const timerRef = useRef<NodeJS.Timeout | null>(null)


    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1) // increment time every second
        }, 1000)
    }

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null
        }
    }


    const handleStart = () => {
        setTimerState("running")
    }

    const handlePause = () => {
        setTimerState("paused")
    }

    const handleStop = () => {
        stopTimer()
        setTime(0)
        setTimerState("stopped")
    }

    useEffect(() => {
        if (timerState == "running") {
            startTimer()
        } else {
            stopTimer()
        }

        return () => stopTimer()
    }, [timerState])

    //format time for the ui
    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className='flex items-center gap-3'>
            {timerState == "stopped" ? <div>Start Time Tracker</div> : <p>{formatTime(time)}</p>}
            <div>
                {timerState === "running" ? (
                    <Button onClick={handlePause}>
                        <PauseIcon />
                    </Button>
                ) : (
                    <Button onClick={handleStart}>
                        <PlayIcon />
                    </Button>
                )}
                {timerState !== "stopped" && (
                    <Button onClick={handleStop}>
                        <StopCircleIcon />
                    </Button>
                )}
            </div>
        </div>
    )
};

export default StartTimerTracker;
