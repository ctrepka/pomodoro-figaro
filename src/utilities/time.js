export function secondsToHHMMSS(s) {
    const hr = Math.floor((s / 60 / 60) % 60);
    const mn = Math.floor((s / 60) % 60);
    const sc = Math.floor(s % 60);

    const leadingZero = (timeSegment, ruleFn) =>
      ruleFn ? `0${timeSegment}` : timeSegment;
    const isSingleDigit = (ts) => ts < 10;
    return `${leadingZero(hr, isSingleDigit(hr))}:${leadingZero(
      mn,
      isSingleDigit(mn)
    )}:${leadingZero(sc, isSingleDigit(sc))}`;
  }