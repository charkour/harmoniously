// for testing
import { harmony } from "./harmony";
import { rooms, times, userConstraints } from "./temp";

harmony(userConstraints, undefined, [times, rooms], true);

// export
export * from "./harmony";
