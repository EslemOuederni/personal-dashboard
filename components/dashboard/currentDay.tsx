"use client"

import React from "react";

const CurrentDay = () => {
    let date = new Date()
    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    const dateFormatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const day = dayFormatter.format(date);
    const formattedDate = dateFormatter.format(date);
    const time = timeFormatter.format(date);

    const [month, dayOfMonth, year] = formattedDate.split('/');

    return (
        <div>
            <div className=' font-bold'>Today</div>
            <div> {`${day} ${dayOfMonth}, ${year} | ${time}`} </div>
        </div>
    )
};

export default CurrentDay;
