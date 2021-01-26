import { ClassLimits, LooseObject } from "./interfaces";
import { bioLabRooms, bioRooms, csLabRooms, csRooms, mathStatRooms, userConstraints } from "./temp";
import { cartesian } from "./utils";

// type ArrOfArrOfString = string[][];
// type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
// type thing = ArrayElement<ArrOfArrOfString>;

export const getPossibleDomainValues = (attributeList: string[][]): string[][] => {
  // return cartesian<string[][]>(attributeList);
  return cartesian(attributeList);
};

//     """Based on the class, return its valid room assignments"""
//     # TODO: is there a better way to write this?
const checkRoom = (aClass: string) => {
  if (aClass.startsWith("l")) {
    if (aClass.startsWith("lcs")) {
      return csLabRooms;
    } else {
      return bioLabRooms;
    }
  } else if (aClass.startsWith("cs") || aClass.startsWith("data") || aClass.startsWith("idis")) {
    return csRooms;
  } else if (aClass.startsWith("stat") || aClass.startsWith("math")) {
    return mathStatRooms;
  } else {
    // aClass.startsWith("bio"):
    return bioRooms;
  }
};

//     """Limit the domain for a class to only consist of possible
//     (time, room, faculty) combinations where faculty is the same
//     on the assignment"""
const respectAssignments = (
  aClass: string,
  possibleValueTuples: string[][],
  userConstraints: LooseObject<ClassLimits>,
) => {
  const prof = userConstraints[aClass].professor;
  const validRooms = checkRoom(aClass);
  const limitedDomain = possibleValueTuples.filter((tuple: string[]) => {
    return tuple[2] === prof && validRooms.includes(tuple[1]);
  });
  //     # TODO: potentially optimize code based on heuristic of once a class slot is picked,
  //     # remove it from the possible domains for other classes. Would require a copy of the list
  //     # to modify and copy over if the CSP has to back track.
  return limitedDomain;
};

export const getDomains = <T extends Array<string>>(variables: T, possibleDomainValues: T[]) => {
  const domains: LooseObject<T[]> = {};
  variables.forEach((variable: string) => {
    domains[variable] = respectAssignments(variable, possibleDomainValues, userConstraints) as T[];
  });
  return domains;
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

type Assignments<T> = LooseObject<T>;

// """returns the keys, which are the variables in the CSP"""
export const getVariables = <T>(assignments: Assignments<T>): string[] => {
  return Object.keys(assignments);
};

// Returns a list of faculty derived from the assignments.
export const getFaculty = <T extends { professor: string }>(assignments: Assignments<T>) => {
  const professorSet = new Set<string>();
  Object.values(assignments).forEach(({ professor }) => {
    professorSet.add(professor);
  });
  return Array.from(professorSet);
};
