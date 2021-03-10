import { Assignments } from "@harmoniously/types";
import { CSP, min_conflicts as minConflicts } from "csps";
import { constraints, getNeighbors, getPossibleDomainValues, getVariables } from "./helpers";

export const harmony = (
  assignments: Assignments,
  constraintFunction: (
    c1: string,
    c1Attr: string[],
    c2: string,
    c2Attr: string[],
  ) => boolean = constraints,
  debug: boolean = false,
) => {
  const variables = getVariables(assignments);
  const domains = getPossibleDomainValues(assignments);
  const neighbors = getNeighbors(variables);

  const aCSP = new CSP<string>(variables, domains, neighbors, constraintFunction);
  const res = minConflicts(aCSP);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
    console.log(res);
  }

  return res;
};
