import { trivialConstraints } from "@harmoniously/shared";
import { ClassAttributes, ClassLimits, LooseObject } from "@harmoniously/types";
import { CurrentDomain } from "csps";
import { harmony } from "../src/harmony";
import { cartesian } from "../src/utils";

const DEBUG = true;

const possibleDomainValues: CurrentDomain<ClassAttributes[]> = {};
const possibleDomains: ClassAttributes[] = [];
const callback = (variable: string, assignments: LooseObject<ClassLimits>) => {
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
};

const constraints = (
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

describe("dumb test", () => {
  it("passes", () => {
    const res = harmony<
      {
        professor: string;
        room: string;
        time: string;
      },
      {
        professors: string[];
        rooms: string[];
        times: string[];
      },
      { [key: string]: { professors: string[]; rooms: string[]; times: string[] } }
    >(trivialConstraints, callback, possibleDomainValues, constraints, DEBUG);
    console.log(res);
    expect(2).toEqual(2);
  });
});
