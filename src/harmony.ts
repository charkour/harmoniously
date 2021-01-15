import { CSP, min_conflicts } from "csps";
import {
  constraints,
  get_domains,
  get_faculty,
  get_neighbors,
  get_possible_domain_values,
  get_variables,
} from "./helpers";
import { LooseObject } from "./interfaces";
import { ClassLimits } from "./temp";

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
  const variables = get_variables(assignments);
  const faculty = get_faculty(assignments);

  const possible_domain_values = get_possible_domain_values([...attribute_list, faculty]);
  const domains = get_domains(variables, possible_domain_values);
  const neighbors = get_neighbors(variables);

  const aCSP = new CSP<string>(variables, domains, neighbors, constraintFunction);

  if (debug) {
    console.log(variables);
    console.log(domains);
    console.log(neighbors);
  }

  // run min_conflicts on problem
  const res = min_conflicts(aCSP);
  console.log(res);
};
