export * from "./harmony";

// for testing
import { harmony } from "./harmony";
import { rooms, times, user_constraints } from "./temp";

harmony(user_constraints, undefined, [times, rooms], true);
