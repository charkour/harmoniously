import confetti from 'canvas-confetti';
import { Assignments, harmony } from 'harmoniously';
import React from 'react';
import { Result } from './types';

export const useHarmony = (
  assignments: Assignments,
  autoRun: boolean = false,
  showConfetti: boolean = true
) => {
  const [res, setRes] = React.useState<Result>(undefined);
  const [loading, setLoading] = React.useState(false);
  const [runCount, setRunCount] = React.useState(0);

  const findSchedule = React.useCallback(() => {
    setLoading(true);
    const result = harmony(assignments, undefined, undefined);
    setRunCount((prev: number) => prev + 1);
    setRes(result);
    if (result !== undefined && showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    setLoading(false);
  }, [assignments, showConfetti]);

  React.useEffect(() => {
    if (autoRun) {
      findSchedule();
    }
  }, [autoRun, findSchedule]);

  return { res, loading, findSchedule, runCount };
};
