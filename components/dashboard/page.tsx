"use client";

import CurrentDay from './currentDay';
import StartTimerTracker from './startTimerTracker';

export const dynamic = "force-dynamic";

export default function Dashboard () {
  return (
    <div className="flex flex-col justify-start pt-3 ">
      <div className='flex flex-row justify-between items-center'>
        <CurrentDay />
        <StartTimerTracker />
      </div>
    </div>
  );
}
