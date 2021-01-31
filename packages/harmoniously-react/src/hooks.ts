import { Assignments, harmony, LooseObject } from 'harmoniously';
import React from 'react';

export const useHarmony = (assignments: Assignments, autoRun: boolean) => {
  const [res, setRes] = React.useState<LooseObject<string[]> | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (autoRun) {
      findSchedule();
    }
  }, []);

  const findSchedule = React.useCallback(() => {
    setLoading(true);
    const result = harmony(assignments, undefined, undefined);
    setRes(result);
    setLoading(false);
  }, []);

  return { res, loading, findSchedule };
};
