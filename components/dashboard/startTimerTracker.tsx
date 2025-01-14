"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from '../ui/button';
import { PauseIcon, PlayIcon, StopCircleIcon } from 'lucide-react';
import UserProjects, { getProjects, updateProjectTime } from '@/app/dashboard/actions';

type TimerState = "stopped" | "running" | "paused";

const StartTimerTracker = () => {
    const [time, setTime] = useState(0)
    const [timerState, setTimerState] = useState<TimerState>("stopped");
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null); // For project selection

    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<Date | null>(null);

    // a list of projects to select from 
    const [projects, setProjects] = useState<{ _id: string; name: string }[]>([]);

    const fetchProjects = async () => {
        const data = await UserProjects()
        if (data) {
            setProjects(data.map(({ _id, name }) => ({ _id: _id.toString(), name })));
        } else {
            setProjects([]); // Default to an empty array
        }
    }

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1) // increment time every second
        }, 1000)
        startTimeRef.current = new Date()
    }

    const stopTimer = async () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null

            const endTime = new Date()
            const duration = Math.floor((endTime.getTime() - (startTimeRef.current?.getTime() || 0)) / 1000)

            if (selectedProjectId) {
                await updateProjectTime(selectedProjectId, startTimeRef.current!, duration)
            }

            startTimeRef.current = null
        }
    }

    const handleStart = () => {
        if (!selectedProjectId) {
            alert("please select a project")
        }
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
        fetchProjects()
    }, [])

    useEffect(() => {
        if (timerState === "running") {
            startTimer();
        } else {
            stopTimer();
        }
    }, [timerState]);

    //format time for the ui
    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="flex flex-col items-start gap-4">
            {/* Project Selection */}
            <div className="flex items-center gap-3">
                <label htmlFor="project-select">Select Project:</label>
                <select
                    id="project-select"
                    value={selectedProjectId || ""}
                    onChange={(e) => setSelectedProjectId(e.target.value)}
                >
                    <option value="" disabled>
                        Choose a project
                    </option>
                    {projects.map((project) => (
                        <option key={project._id} value={project._id}>
                            {project.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Timer Display */}
            <div className="flex items-center gap-3">
                {timerState === "stopped" ? <div>Start Time Tracker</div> : <p>{formatTime(time)}</p>}
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
        </div>
    )
};

export default StartTimerTracker;
