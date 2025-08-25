import React, { useState, useEffect } from "react";

const modes = {
  work: { label: "Work", time: 25 * 60 },
  short: { label: "Short Break", time: 5 * 60 },
  long: { label: "Long Break", time: 15 * 60 },
};

const PomodoroTimer = () => {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(modes[mode].time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(modes[mode].time);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="bg-[#0a192f] text-white p-6 text-center shadow-lg rounded-xl max-w-xs mx-auto my-10 border border-blue-500">
      <h1 className="text-2xl font-bold mb-4 tracking-wide">
        {modes[mode].label}
      </h1>

      <div className="text-4xl font-mono mb-6">{formatTime()}</div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-md font-semibold text-sm transition duration-300 ${
            isRunning ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => setTimeLeft(modes[mode].time)}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm rounded-md transition duration-300"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {Object.keys(modes).map((key) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition duration-300 ${
              mode === key
                ? "bg-blue-600 text-white"
                : "bg-blue-900 hover:bg-blue-700 text-gray-300"
            }`}
          >
            {modes[key].label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PomodoroTimer;
