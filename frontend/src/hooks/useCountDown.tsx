import { useState, useEffect } from 'react';

type CountdownTuple = [number, number, number, number];

export const useCountdown = (targetDate: string | number | Date): CountdownTuple => {
  const targetTime: number = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState<number>(targetTime - new Date().getTime());

  useEffect(() => {
    // Set up the interval to update the countdown every second
    const interval = setInterval(() => {
      setCountDown(targetTime - new Date().getTime());
    }, 1000);

    // Clean up the interval when the component unmounts or targetTime changes
    return () => clearInterval(interval);
  }, []);

  // Function to calculate and return the time components
  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): CountdownTuple => {
  if (countDown < 0) {
    return [0, 0, 0, 0];
  }
  
  
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export const formatTwoDigits = (num: number): string => String(num).padStart(2, '0');
