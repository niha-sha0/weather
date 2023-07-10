import React from "react";
import "./date_time.css";

class DateTime  extends React.Component {
    render() {
      const options = {
        weekday: 'short', // Display short weekday (e.g., Wed)
        year: 'numeric', // Display full year (e.g., 2023)
        month: 'long', // Display short month (e.g., May)
        day: 'numeric', // Display day of the month (e.g., 17)
    };
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const dateString = now.toLocaleDateString('en-US', options);

    return ( 
        <>
            <div className="date_time_container">
                <p className="time">{timeString}</p>
                <p className="date">{dateString}</p>
            </div>
        </>
    );
    }
}
 
export default DateTime;