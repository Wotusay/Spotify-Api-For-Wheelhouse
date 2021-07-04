import React, { useEffect, useState } from 'react';

const TimeSpend = ({ lastNumbers }) => {
  const [date, setDate] = useState();

  const millisToMinutesAndSeconds = (millis) => {
    // The time that we get from spotify is in ms 
    // Here we convert it to a more readable state
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes} : ${seconds < 10 ? '0' : ''} ${seconds}`;
  };

  useEffect(() => {
    // When the page loads we increment all the time values
    let number = 0;
    if (Object.keys(lastNumbers).length > 0) {
      lastNumbers.items.map((item) => {
        number = number + item.track.duration_ms;
        return null;
      });
      setDate(number);
    } else {
      return;
    }
  }, [lastNumbers]);

  return (
    <div className="timespent">
      <p className="text-2xl text-gray-400 font-normal pb-2">
        Total time recently spent
      </p>
      <p className="text-5xl mt-2 font-semibold">
        {millisToMinutesAndSeconds(date)} minutes
      </p>
    </div>
  );
};

export default TimeSpend;
