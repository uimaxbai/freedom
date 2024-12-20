import { differenceInMilliseconds } from 'date-fns';

export const TARGET_DATE = new Date('2024-12-20T13:00:00Z');

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export function calculateTimeLeft(): TimeLeft {
  const totalMilliseconds = Math.max(0, differenceInMilliseconds(TARGET_DATE, new Date()));
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  
  return {
    days: Math.floor(totalSeconds / (24 * 60 * 60)),
    hours: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)),
    minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
    seconds: Math.floor(totalSeconds % 60),
    milliseconds: Math.floor(totalMilliseconds % 1000),
  };
}