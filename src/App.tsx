import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import { USAFlag } from './components/USAFlag';
import './styles/flag.css';

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center font-mono overflow-hidden">
      <USAFlag />
      <CountdownTimer />
    </div>
  );
}