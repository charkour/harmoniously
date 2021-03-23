import { Assignments, ClassAttributes, LooseObject } from "@harmoniously/types";
import { CurrentDomain } from "csps";
import { cartesian } from "./utils";

/**
 * Get the cartesian product of all possible attribute tuples.
 */
export const getPossibleDomainValues = (assignments: Assignments) => {
  const possibleDomainValues: CurrentDomain<ClassAttributes[]> = {};
  const possibleDomains: ClassAttributes[] = [];
  getVariables(assignments).forEach((variable: string) => {
    // TODO: make this more generic to allow people to override this.
    const { times, rooms, professors } = assignments[variable];
    const product = cartesian([times, rooms, professors]);
    product.forEach((item: string[]) => {
      possibleDomains.push({
        time: item[0],
        room: item[1],
        professor: item[2],
      });
    });
    possibleDomainValues[variable] = possibleDomains;
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

// TODO: might need to update this to support professor as an array
export const constraints = (
  class1: string,
  c1Attributes: ClassAttributes,
  class2: string,
  c2Attributes: ClassAttributes,
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
  if (
    c1Attributes.time === c2Attributes.time &&
    c1Attributes.professor === c2Attributes.professor
  ) {
    return false;
  }

  // Check to make sure class is not in the same room at the same time
  if (c1Attributes.time === c2Attributes.time && c1Attributes.room === c2Attributes.room) {
    return false;
  }
  return true;
};

// returns the keys, which are the variables in the CSP
export const getVariables = (assignments: Assignments): string[] => {
  return Object.keys(assignments);
};

// Returns a list of faculty derived from the assignments.
export const getFaculty = (assignments: Assignments) => {
  const professorSet = new Set<string>();
  Object.values(assignments).forEach(({ professors }) => {
    professors.forEach((professor: string) => {
      professorSet.add(professor);
    });
  });
  return Array.from(professorSet);
};
