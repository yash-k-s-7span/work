import { format } from 'date-fns';
import { differenceInDays } from 'date-fns';
import React from 'react'

const AddYears = () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() +7);
    const formattedDate = format(today, 'yyyy-MM-dd');
    const daysDifference = differenceInDays(nextWeek, today);
  return (
    <div>
        <h2>Today's Date:{formattedDate}</h2>
        <h2>Day  until Next Week:{daysDifference}</h2>
    </div>
  )
}

export default AddYears