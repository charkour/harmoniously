import { CSP, CurrentDomain, min_conflicts as minConflicts, Variable } from "csps";
import { getNeighbors, getPossibleDomainValues, getVariables } from "./helpers";

// export type TAttributes = { [key: string]: string };
// type JLimits = { [key in keyof TAttributes]: string[] };
// export type KAssignments = { [key: string]: JLimits };
// type Result = { [key: string]: TAttributes } | undefined;

export const harmony = <
  T extends object,
  J extends { [key in keyof T]: string[] },
  K extends { [key: string]: J }
>(
  assignments: K,
  getPossibleDomainValuesCb: (variable: string, assignments: K) => void,
  possibleDomainValues: CurrentDomain<T[]>,
  constraintFunction: (class1: string, c1Attributes: T, class2: string, c2Attributes: T) => boolean,
  debug: boolean = false,
) => {
  const variables: Variable[] = getVariables(assignments);
  const domains: CurrentDomain<T[]> = getPossibleDomainValues(
    assignments,
    getPossibleDomainValuesCb,
    possibleDomainValues,
  );
  const neighbors = getNeighbors(variables);

  const aCSP = new CSP<T>(variables, domains, neighbors, constraintFunction);
  const res: { [key: string]: T } | undefined = minConflicts(aCSP);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
    console.log(res);
  }

  return res;
};
