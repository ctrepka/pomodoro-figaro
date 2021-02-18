import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { configAtom, sprintDerivedState, sprintState } from "../atoms";
import styles from "../styles/base/_colors.scss";
import { secondsToHHMMSS } from "../utilities/time";

export function SprintTimer() {
  const [config, setConfig] = useRecoilState(configAtom);
  const [state, setState] = useRecoilState(sprintState);
  const {
    clockTime,
    sprintsInCycleRemaining,
    totalSprintsRemaining,
    cyclesCompleted,
  } = useRecoilValue(sprintDerivedState);
  const playPauseRef = useRef();

  useEffect(() => {
    if (
      state.timeType === "work" &&
      state.elapsedTime >= config.sprintDuration
    ) {
      setState((state) => {
        return {
          ...state,
          timeType: "break",
          elapsedTime: 0,
          sprintCount: state.sprintCount + 1,
        };
      });
    }
    if (
      state.timeType === "break" &&
      state.elapsedTime >= config.sprintBreakDuration
    ) {
      setState((state) => {
        return { ...state, timeType: "work", elapsedTime: 0 };
      });
    }
  }, [state, config, setState]);

  useEffect(() => {
    if (!state.paused) {
      const timeout = setTimeout(() => {
        setState((state) => {
          return { ...state, elapsedTime: state.elapsedTime + 1 };
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [setState, state]);

  useEffect(() => {
    playPauseRef.current.dispatchEvent(
      new KeyboardEvent("keypress", { key: "Enter" })
    );
  }, []);

  return (
    <div className="timer-container">
      <h2
        className="font-xl"
        style={{
          color: state.timeType === "work" ? styles.success : styles.warning,
        }}
      >
        {state.timeType === "break"
          ? "Break Time! Take a rest, pal!"
          : "Get working, punk."}
      </h2>
      <h1 className={`font-jumbo`}>{secondsToHHMMSS(Number(clockTime))}</h1>
      <button
        ref={playPauseRef}
        onClick={() =>
          setState((state) => {
            return { ...state, paused: !state.paused };
          })
        }
      >
        {state.paused ? "start" : "pause"}
      </button>
      <p>{sprintsInCycleRemaining} sprints to next long break</p>
      <p>{totalSprintsRemaining} total sprints remaining</p>
      <p>{cyclesCompleted} / {config.cycles} cycles completed</p>
    </div>
  );
}
