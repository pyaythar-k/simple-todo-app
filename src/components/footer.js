'use client';

import { useItemsStore } from '@/stores/items-store';
import { useEffect, useState } from 'react';
function getTimeUntilEOD() {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const endOfDay = new Date(tomorrow.getTime() - 1); // Subtract 1 millisecond to get the end of the day

  const timeLeft = endOfDay - now;
  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  //   .toString()
  //   .padStart(2, '0');
  return `${hours}:${minutes}`;
}

export default function Footer() {
  const items = useItemsStore((state) => state.items);
  const completedItemsCount = items.filter((item) => item.completed).length;
  const totalItemsCount = items.length;
  const [timeUntilEOD, setTimeUntilEOD] = useState(getTimeUntilEOD());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilEOD(getTimeUntilEOD());
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-center border p-3">
      <p className="text-slate-50 text-sm">
        <span className="font-bold underline">{completedItemsCount}</span> /{' '}
        {totalItemsCount} left
      </p>
      <p className="text-slate-50 text-sm" suppressHydrationWarning>
        Time until EOD: {timeUntilEOD} Hrs
      </p>
    </div>
  );
}
