import { Assignments, Result } from "@harmoniously/types";
import { CSP, CurrentDomain, min_conflicts as minConflicts, Variable } from "csps";
import { ClassAttributes } from "harmoniously";
import { constraints, getNeighbors, getPossibleDomainValues, getVariables } from "./helpers";

export const harmony = (
  assignments: Assignments,
  constraintFunction: (
    class1: string,
    c1Attributes: ClassAttributes,
    class2: string,
    c2Attributes: ClassAttributes,
  ) => boolean = constraints,
  debug: boolean = false,
) => {
  const variables: Variable[] = getVariables(assignments);
  const domains: CurrentDomain<ClassAttributes[]> = getPossibleDomainValues(assignments);
  const neighbors = getNeighbors(variables);

  const aCSP = new CSP<ClassAttributes>(variables, domains, neighbors, constraintFunction);
  const res: Result = minConflicts(aCSP);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
    console.log(res);
  }

  return res;
};
