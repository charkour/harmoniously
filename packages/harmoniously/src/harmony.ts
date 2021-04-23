import { LooseObject } from "@harmoniously/types";
import { CSP, CurrentDomain, min_conflicts as minConflicts, Variable } from "csps";
import { getNeighbors, getPossibleDomainValues, getVariables } from "./helpers";

export const harmony = <
  TAttributes extends { [key: string]: string },
  JLimits extends { [P in TAttributes as string | number | symbol]: string[] },
  KAssignments extends LooseObject<JLimits>
>(
  assignments: KAssignments,
  getPossibleDomainValuesCb: (variable: string, assignments: KAssignments) => void,
  possibleDomainValues: CurrentDomain<TAttributes[]>,
  constraintFunction: (
    class1: string,
    c1Attributes: TAttributes,
    class2: string,
    c2Attributes: TAttributes,
  ) => boolean,
  debug: boolean = false,
) => {
  const variables: Variable[] = getVariables(assignments);
  const domains: CurrentDomain<TAttributes[]> = getPossibleDomainValues(
    assignments,
    getPossibleDomainValuesCb,
    possibleDomainValues,
  );
  const neighbors = getNeighbors(variables);

  const aCSP = new CSP<TAttributes>(variables, domains, neighbors, constraintFunction);
  const res: LooseObject<TAttributes> | undefined = minConflicts(aCSP);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
    console.log(res);
  }

  return res;
};
