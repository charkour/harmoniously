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
  attribute_list: string[][],
  debug: boolean = false,
) => {
  const variables = getVariables(assignments);
  const faculty = getFaculty(assignments);

  const possible_domain_values = getPossibleDomainValues([...attribute_list, faculty]);
  const domains = getDomains(variables, possible_domain_values);
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
