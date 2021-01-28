/**
 * Creates an object with variable fields accessed by a
 *   string key.
 *
 * @export
 * @interface LooseObject
 * @template T
 * Ref: https://stackoverflow.com/a/44441178/9931154
 */
export interface LooseObject<T> {
  [key: string]: T;
}

/**
 * User defined constraints for a specific class.
 *
 * @export
 * @interface ClassLimits
 */
export interface ClassLimits {
  professor: string;
  rooms: string[];
  times: string[];
}

export interface ClassAttributes {
  professor: string;
  room: string;
  time: string;
}
// export interface ClassAttributes extends Array<string> {
//   professor: string;
//   room: string;
//   time: string;
// }
