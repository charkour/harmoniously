import { ClassLimits, LooseObject } from "./interfaces";
import {
  bio_lab_rooms,
  bio_rooms,
  cs_lab_rooms,
  cs_rooms,
  math_stat_rooms,
  user_constraints,
} from "./temp";

// https://stackoverflow.com/a/39838385/9931154
const flatMap = (f: Function, xs: any[]) => xs.reduce((acc: any, x: any) => acc.concat(f(x)), []);

/// https://stackoverflow.com/a/60677733/9931154
const flat = (arr: any[]) => {
  return [].concat.apply([], arr);
};

// https://stackoverflow.com/a/43053803/9931154
const cartesian = <K, T extends Array<any>>(...a: T): K =>
  a.reduce((a, b) => flatMap((d: T) => b.map((e: T) => flat([d, e])), a));

export const get_possible_domain_values = (attribute_list: string[][]): string[][] => {
  return cartesian<string[][], string[][]>(...attribute_list);
};

//     """Based on the class, return its valid room assignments"""
//     # TODO: is there a better way to write this?
const check_room = (a_class: string) => {
  if (a_class.startsWith("l")) {
    if (a_class.startsWith("lcs")) {
      return cs_lab_rooms;
    } else {
      return bio_lab_rooms;
    }
  } else if (a_class.startsWith("cs") || a_class.startsWith("data") || a_class.startsWith("idis")) {
    return cs_rooms;
  } else if (a_class.startsWith("stat") || a_class.startsWith("math")) {
    return math_stat_rooms;
  } else {
    // a_class.startsWith("bio"):
    return bio_rooms;
  }
};

//     """Limit the domain for a class to only consist of possible
//     (time, room, faculty) combinations where faculty is the same
//     on the assignment"""
const respect_assignments = (
  a_class: string,
  possible_value_tuples: string[][],
  user_constraints: LooseObject<ClassLimits>,
) => {
  const prof = user_constraints[a_class].professor;
  const valid_rooms = check_room(a_class);
  const limited_domain = possible_value_tuples.filter((tuple: string[]) => {
    return tuple[2] === prof && valid_rooms.includes(tuple[1]);
  });
  //     # TODO: potentially optimize code based on heuristic of once a class slot is picked,
  //     # remove it from the possible domains for other classes. Would require a copy of the list
  //     # to modify and copy over if the CSP has to back track.
  return limited_domain;
};

export const get_domains = <T extends Array<string>>(variables: T, possible_domain_values: T[]) => {
  const domains: LooseObject<T[]> = {};
  variables.forEach((variable: string) => {
    domains[variable] = respect_assignments(
      variable,
      possible_domain_values,
      user_constraints,
    ) as T[];
  });
  return domains;
};

export const get_neighbors = <T extends Array<string>>(variables: T) => {
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
export const get_variables = <T>(assignments: Assignments<T>): string[] => {
  return Object.keys(assignments);
};

// Returns a list of faculty derived from the assignments.
export const get_faculty = <T extends { professor: string }>(assignments: Assignments<T>) => {
  const professorSet = new Set<string>();
  Object.values(assignments).forEach(({ professor }) => {
    professorSet.add(professor);
  });
  return Array.from(professorSet);
};
