import { atom, selector } from "recoil";

export const configAtom = atom({
  key: "config",
  default: {
    sprintDuration: 25,
    sprintsPerCycle: 4,
    sprintBreakDuration: 5,
    longBreakDuration: 15,
    cycles: 4,
  },
});

export const sprintState = atom({
  key: "sprintState",
  default: {
    sprintCount: 0,
    elapsedTime: 0,
    paused: true,
    timeType: "work",
  },
});

export const sprintDerivedState = selector({
  key: "sprintDerivedState",
  get: ({ get }) => {
    const config = get(configAtom);
    const sprint = get(sprintState);

    const totalSprintsRemaining =
      config.sprintsPerCycle * config.cycles - sprint.sprintCount;

    const sprintsInCycleRemaining =
      sprint.sprintCount === 0
        ? config.sprintsPerCycle
        : (config.sprintsPerCycle * config.cycles - sprint.sprintCount) %
          config.sprintsPerCycle;

    const cyclesCompleted = Math.floor(
      sprint.sprintCount / config.sprintsPerCycle
    );
    const clockTime =
      (sprint.timeType === "work"
        ? config.sprintDuration
        : sprint.timeType === "break"
        ? config.sprintBreakDuration
        : config.longBreakDuration) - sprint.elapsedTime;

    return {
      clockTime,
      sprintsInCycleRemaining,
      totalSprintsRemaining,
      cyclesCompleted,
    };
  },
});
