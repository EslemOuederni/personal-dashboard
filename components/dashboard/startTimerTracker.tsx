import React from "react";
import { Button } from '../ui/button';
import { PlayIcon } from 'lucide-react';

const StartTimerTracker = () => {
    return (
        <div className='flex items-center gap-3'>
            <div>Start Time Tracker</div>
            <div>
                <Button>
                    <PlayIcon />
                </Button>
            </div>
        </div>
    )
};

export default StartTimerTracker;
