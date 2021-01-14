export * from "./harmony";

// for testing
import { harmony } from "./harmony";

const faculty = ["norman", "vanderlinden", "adams"];
const times = ["mwf800", "mwf900"];
const rooms = ["nh253", "sb382"];

harmony(["cs108", "cs112", "cs212", "cs214"], undefined, [times, rooms, faculty]);
