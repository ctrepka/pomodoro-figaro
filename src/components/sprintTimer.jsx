import { useEffect, useState } from "react";

export function SprintTimer({
  sprintDuration,
  sprintsPerCycle,
  sprintBreakDuration,
  longBreakDuration,
  cycles,
  player,
}) {
  const [isBreak, setIsBreak] = useState(false);
  const [play, setPlay] = useState(true);
  const [sprintsRemaining, setSprintsRemaining] = useState(
    sprintsPerCycle * cycles
  );
  const [time, setTime] = useState(sprintDuration);

  useEffect(() => {
    //if play is true and time remaining is > 0, remove 1 second
    if (play && time > 0) {
      const timer = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [setTime, play, time]);

  useEffect(() => {
    //if time is 0 && isBreak === false, set isBreak to true and setTime to sprintBreakDuration
    if (time === 0 && !isBreak) {
      setIsBreak(true);
      setTime(sprintBreakDuration);
      setSprintsRemaining((sprintsRemaining) => sprintsRemaining - 1);
      //beep();
    }

    //if time is 0 && isBreak === true && sprintsRemaining > 0, setTime to sprintDuration and set isBreak to False
    if (time === 0 && isBreak && sprintsRemaining > 0) {
      setIsBreak(false);
      setTime(sprintDuration);
      //beep();
    }
  }, [
    isBreak,
    setIsBreak,
    setTime,
    time,
    sprintBreakDuration,
    sprintsRemaining,
    setSprintsRemaining,
    sprintDuration,
  ]);


  return (
    <div>
      <h1 style={{ color: isBreak ? "green" : "orange" }}>
        {isBreak ? "Break Time! Take a rest, pal!" : "Get working, punk."}
      </h1>
      <h2>{time}</h2>
      <button onClick={() => setPlay((play) => !play)}>
        {play ? "pause" : "resume"}
      </button>
      <p>
        {Math.floor(
          (sprintsPerCycle * cycles - sprintsRemaining) / sprintsPerCycle
        )}
        /{cycles} cycles completed | sprints left this cycle:{" "}
        {sprintsRemaining % cycles} | total sprints remaining:{" "}
        {sprintsRemaining}
      </p>

    </div>
  );
}
