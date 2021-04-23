import { LooseObject } from "@harmoniously/types";
import { CurrentDomain } from "csps";

/**
 * Get the cartesian product of all possible attribute tuples.
 */
export const getPossibleDomainValues = <
  TAttributes extends { [key: string]: string },
  JLimits extends { [P in TAttributes as string | number | symbol]: string[] },
  KAssignments extends LooseObject<JLimits>
>(
  assignments: KAssignments,
  callback: (variable: string, assignments: KAssignments) => void,
  possibleDomainValues: CurrentDomain<TAttributes[]>,
) => {
  getVariables(assignments).forEach((variable: string) => {
    callback(variable, assignments);
  });
  // TODO: does this need to return? or can it still modify the value with pass-by-sharing?
  return possibleDomainValues;
};

export const getNeighbors = <T extends Array<string>>(variables: T) => {
  const neighbors: LooseObject<T> = {};
  variables.forEach((variable: string) => {
    neighbors[variable] = variables.filter((neighbor: string) => {
      return neighbor !== variable;
    }) as T;
  });
  return neighbors;
};

// returns the keys, which are the variables in the CSP
export const getVariables = <TAttributes, KAssignments extends LooseObject<TAttributes>>(
  assignments: KAssignments,
): string[] => {
  return Object.keys(assignments);
};

// Returns a list of faculty derived from the assignments.
// TODO: I don't think this is used
export const getFaculty = <
  TAttributes extends { professors: string[] },
  KAssignments extends LooseObject<TAttributes>
>(
  assignments: KAssignments,
) => {
  const professorSet = new Set<string>();
  Object.values(assignments).forEach(({ professors }) => {
    professors.forEach((professor: string) => {
      professorSet.add(professor);
    });
  });
  return Array.from(professorSet);
};
