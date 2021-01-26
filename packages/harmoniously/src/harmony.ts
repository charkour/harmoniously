import { CSP, min_conflicts as minConflicts } from "csps";
import {
  constraints,
  getDomains,
  getFaculty,
  getNeighbors,
  getPossibleDomainValues,
  getVariables,
} from "./helpers";
import { ClassLimits, LooseObject } from "./interfaces";

export const harmony = <T extends ClassLimits>(
  assignments: LooseObject<T>,
  constraintFunction: (
    c1: string,
    c1Attr: string[],
    c2: string,
    c2Attr: string[],
  ) => boolean = constraints,
  attributeList: string[][],
  debug: boolean = false,
) => {
  const variables = getVariables(assignments);
  const faculty = getFaculty(assignments);

  const possibleDomainValues = getPossibleDomainValues([...attributeList, faculty]);
  const domains = getDomains(variables, possibleDomainValues);
  const neighbors = getNeighbors(variables);

  const aCSP = new CSP<string>(variables, domains, neighbors, constraintFunction);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
  }

  const res = minConflicts(aCSP);

  debug && console.log(res);
};
