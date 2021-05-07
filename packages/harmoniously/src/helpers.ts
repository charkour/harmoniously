import { LooseObject } from "@harmoniously/types";
import { CurrentDomain } from "csps";

/**
 * Get the cartesian product of all possible attribute tuples.
 */
export const getPossibleDomainValues = <
  T extends object,
  J extends { [key in keyof T]: string[] },
  K extends { [key: string]: J }
>(
  assignments: K,
  callback: (variable: string, assignments: K) => void,
  possibleDomainValues: CurrentDomain<T[]>,
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
export const getVariables = <
  T extends object,
  J extends { [key in keyof T]: string[] },
  K extends { [key: string]: J }
>(
  assignments: K,
): string[] => {
  return Object.keys(assignments);
};
