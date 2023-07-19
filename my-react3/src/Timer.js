import React, { useState, useEffect } from "react";


const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <h1>Timer: {formatTime(minutes)}:{formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;
