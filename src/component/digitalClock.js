import React, { useEffect, useState } from 'react';

import './digitalClock.css';

function DigitalClock() {
  const [clockTime, setClockTime ] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => updateClock(), 1000);
  });

  function updateClock() {
    setClockTime(new Date());
  }

  return <div className="clockContainer">
    {clockTime.toLocaleTimeString()}
  </div>;
}

export default DigitalClock;