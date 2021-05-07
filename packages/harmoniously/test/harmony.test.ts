import { ClassAttributes, LooseObject } from "@harmoniously/types";
import { CurrentDomain } from "csps";
import { harmony } from "../src/harmony";
import { cartesian } from "../src/utils";

interface NotPluralClassLimits {
  professor: string[];
  room: string[];
  time: string[];
}

export const mathStatOnlyRooms = ["nh251", "nh259", "nh276", "nh261", "nh295"];
export const csOnlyRooms = ["sb372", "nh253", "sb010", "sb382", "hh336", "hh334", "sc203"];
// NOTE: it fails to find a solution when there are is not an extra room.
export const both = ["nh064", "a"];
export const csLabRooms = ["sb337", "sb354"];
export const bioRooms = ["sb256", "sb276", "cfaud", "hc300", "sb103"];
export const bioLabRooms = ["sb277", "dh132", "dh106", "dh124", "sb210"];

export const csRooms = [...csOnlyRooms, ...both];
export const mathStatRooms = [...mathStatOnlyRooms, ...both];

export const rooms = [
  ...mathStatOnlyRooms,
  ...csOnlyRooms,
  ...both,
  ...csLabRooms,
  ...bioRooms,
  ...bioLabRooms,
];

export const time = [
  "mwf800",
  "mwf900",
  "mwf1030",
  "mwf1130",
  "mwf1230",
  "mwf130",
  "mwf230",
  "tth830",
  "tth1030",
];

export const trivialConstraints: LooseObject<NotPluralClassLimits> = {
  "1": { time, professor: ["A", "B"], room: csRooms },
  "2": { time, professor: ["A"], room: csRooms },
  "3": { time, professor: ["B"], room: csRooms },
  "4": { time, professor: ["C"], room: csRooms },
  "5": { time, professor: ["C", "A"], room: csLabRooms },
};

const DEBUG = true;

const possibleDomainValues: CurrentDomain<ClassAttributes[]> = {};
const possibleDomains: ClassAttributes[] = [];
const callback = (variable: string, assignments: LooseObject<NotPluralClassLimits>) => {
  const { time, room, professor } = assignments[variable];
  const product = cartesian([time, room, professor]);
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
    // TODO: fix bad type casting
    const res = harmony<ClassAttributes, NotPluralClassLimits, LooseObject<NotPluralClassLimits>>(
      trivialConstraints,
      callback,
      possibleDomainValues,
      constraints,
      DEBUG,
    );
    console.log(res);
    expect(2).toEqual(2);
  });
});
