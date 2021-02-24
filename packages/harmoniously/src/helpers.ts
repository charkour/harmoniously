import { Assignments, LooseObject } from "./interfaces";
import { cartesian } from "./utils";

/**
 * TODO: update this.
 * Get the cartesian product of all possible attribute tuples.

 */
export const getPossibleDomainValues = (assignments: Assignments) => {
  const possibleDomainValues: LooseObject<string[][]> = {};
  getVariables(assignments).forEach((variable: string) => {
    const { times, rooms, professors } = assignments[variable];
    const product = cartesian([times, rooms, professors]);
    possibleDomainValues[variable] = product;
  });
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

// TODO: make the attributes type and object and not an array
// TODO: might need to update this to support professor as an array
export const constraints = (
  class1: string,
  c1Attributes: string[],
  class2: string,
  c2Attributes: string[],
): boolean => {
  /*
    Constraints for class scheduling
    c1 and c2 are tuples in the form (time, room, faculty)
    returns true if constraints are met.
    The constraint that there is only one section of class
    is implicit because classes are variables.
  */
  // Return true if same class.
  if (class1 === class2) {
    return true;
  }

  // Check to make sure faculty is not teaching at the same time
  if (c1Attributes[0] === c2Attributes[0] && c1Attributes[2] === c2Attributes[2]) {
    return false;
  }

  // Check to make sure class is not in the same room at the same time
  if (c1Attributes[0] === c2Attributes[0] && c1Attributes[1] === c2Attributes[1]) {
    return false;
  }
  return true;
};

// """returns the keys, which are the variables in the CSP"""
export const getVariables = (assignments: Assignments): string[] => {
  return Object.keys(assignments);
};

// Returns a list of faculty derived from the assignments.
export const getFaculty = (assignments: Assignments) => {
  const professorSet = new Set<string>();
  Object.values(assignments).forEach(({ professors }) => {
    professors.forEach((professor) => {
      professorSet.add(professor);
    });
  });
  return Array.from(professorSet);
};
