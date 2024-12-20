import React from 'react';

interface TimeUnitProps {
  label: string;
  value: number;
  padLength?: number;
}

export function TimeUnit({ label, value, padLength = 2 }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 w-28 border border-white/20">
        <div className="text-4xl font-mono text-white text-center">
          {value.toString().padStart(padLength, '0')}
        </div>
      </div>
      <div className="text-white/80 mt-2 text-sm font-bold">{label}</div>
    </div>
  );
}