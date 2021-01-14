export * from "./harmony";

// for testing
import { harmony } from "./harmony";
import { user_constraints } from "./temp";

const faculty = ["norman", "vanderlinden", "adams"];
const times = ["mwf800", "mwf900"];
const rooms = ["nh253", "sb382"];

harmony(user_constraints, undefined, [times, rooms, faculty]);
