import { CSP, min_conflicts } from "csps";
import { LooseObject } from "csps/dist/interfaces";
import {
  constraints,
  get_domains,
  get_neighbors,
  get_possible_domain_values,
  get_variables,
} from "./helpers";

export const harmony = (
  assignments: LooseObject<string>,
  constraintFunction: (
    c1: string,
    c1Attr: string[],
    c2: string,
    c2Attr: string[],
  ) => boolean = constraints,
  attribute_list: string[][],
) => {
  const variables = get_variables(assignments);
  const possible_domain_values = get_possible_domain_values(attribute_list);
  const domains = get_domains(variables, possible_domain_values);
  const neighbors = get_neighbors(variables);

  const aCSP = new CSP<string>(variables, domains, neighbors, constraintFunction);

  // run min_conflicts on problem
  const res = min_conflicts(aCSP);
  console.log(res);
};
