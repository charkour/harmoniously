import { ClassLimits, LooseObject } from "./interfaces";

// TODO: move this to tests once logic is mostly done.
export const math_stat_only_rooms = ["nh251", "nh259", "nh276", "nh261", "nh295"];
export const cs_only_rooms = ["sb372", "nh253", "sb010", "sb382", "hh336", "hh334", "sc203"];
export const both = ["nh064"];
export const cs_lab_rooms = ["sb337", "sb354"];
export const bio_rooms = ["sb256", "sb276", "cfaud", "hc300", "sb103"];
export const bio_lab_rooms = ["sb277", "dh132", "dh106", "dh124", "sb210"];

export const cs_rooms = [...cs_only_rooms, ...both];
export const math_stat_rooms = [...math_stat_only_rooms, ...both];

export const rooms = [
  ...math_stat_only_rooms,
  ...cs_only_rooms,
  ...both,
  ...cs_lab_rooms,
  ...bio_rooms,
  ...bio_lab_rooms,
];

export const times = [
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

export const user_constraints: LooseObject<ClassLimits> = {
  cs100a: { professor: "meyer", rooms: cs_rooms },
  cs104a: { professor: "schuurman", rooms: cs_rooms },
  cs104b: { professor: "schuurman", rooms: cs_rooms },
  cs104c: { professor: "schuurman", rooms: cs_rooms },
  lcs104a: { professor: "sykes", rooms: cs_lab_rooms },
  lcs104b: { professor: "schuurman", rooms: cs_lab_rooms },
  lcs104c: { professor: "sykes", rooms: cs_lab_rooms },
  lcs104d: { professor: "schuurman", rooms: cs_lab_rooms },
  lcs104e: { professor: "sykes", rooms: cs_lab_rooms },
  cs106a: { professor: "norman", rooms: cs_rooms },
  lcs106a: { professor: "norman", rooms: cs_lab_rooms },
  cs108a: { professor: "vanderlinden", rooms: cs_rooms },
  cs108b: { professor: "arnold", rooms: cs_rooms },
  lcs108a: { professor: "wieringa", rooms: cs_lab_rooms },
  lcs108b: { professor: "arnold", rooms: cs_lab_rooms },
  cs112a: { professor: "adams", rooms: cs_rooms },
  cs112b: { professor: "adams", rooms: cs_rooms },
  lcs112a: { professor: "norman", rooms: cs_lab_rooms },
  lcs112b: { professor: "wieringa", rooms: cs_lab_rooms },
  cs195a: { professor: "norman", rooms: cs_rooms },
  cs212a: { professor: "plantinga", rooms: cs_rooms },
  cs212b: { professor: "plantinga", rooms: cs_rooms },
  cs214a: { professor: "adams", rooms: cs_rooms },
  cs214b: { professor: "adams", rooms: cs_rooms },
  lcs214a: { professor: "meyer", rooms: cs_lab_rooms },
  lcs214b: { professor: "meyer", rooms: cs_lab_rooms },
  cs232a: { professor: "norman", rooms: cs_rooms },
  cs232b: { professor: "norman", rooms: cs_rooms },
  cs262a: { professor: "vanderlinden", rooms: cs_rooms },
  cs262b: { professor: "vanderlinden", rooms: cs_rooms },
  lcs262a: { professor: "vanderlinden", rooms: cs_lab_rooms },
  lcs262b: { professor: "vanderlinden", rooms: cs_lab_rooms },
  cs295a: { professor: "norman", rooms: cs_rooms },
  cs300a: { professor: "schuurman", rooms: cs_rooms },
  lcs300a: { professor: "schuurman", rooms: cs_lab_rooms },
  cs332a: { professor: "norman", rooms: cs_rooms },
  cs336a: { professor: "norman", rooms: cs_rooms },
  cs342a: { professor: "bailey", rooms: cs_rooms },
  cs344a: { professor: "vanderlinden", rooms: cs_rooms },
  cs364a: { professor: "vedra", rooms: cs_rooms },
  cs374a: { professor: "adams", rooms: cs_rooms },
  cs383a: { professor: "bailey", rooms: cs_rooms },
  cs384a: { professor: "schuurman", rooms: cs_rooms },
  cs384b: { professor: "schuurman", rooms: cs_rooms },
  // // # NOTE: skip cs390
  cs394: { professor: "bailey", rooms: cs_rooms },
  // // # NOTE: skip cs 396/8 and CS-W60
  data101a: { professor: "bailey", rooms: cs_rooms },
  data101b: { professor: "bailey", rooms: cs_rooms },
  data175a: { professor: "brendavanderlinden", rooms: cs_rooms },
  data175b: { professor: "brendavanderlinden", rooms: cs_rooms },
  data175c: { professor: "momeyer", rooms: cs_rooms },
  data202a: { professor: "arnold", rooms: cs_rooms },
  data303: { professor: "arnold", rooms: cs_rooms },
  data383: { professor: "bailey", rooms: cs_rooms },
  idis110a: { professor: "bobeldyk", rooms: cs_rooms },
  // math100a: "turner",
  // math132a: "bolt",
  // math169a: "ferdinands",
  // math170a: "ferdinands",
  // math171a: "bolt",
  // math171b: "bolt",
  // math171c: "moseley",
  // math171d: "moseley",
  // math172a: "sunukjian",
  // math172b: "scofield",
  // math172c: "kapitula",
  // math190a: "scofield",
  // math221a: "klanderman",
  // math222a: "talsma",
  // math231a: "scofield",
  // math231b: "kapitula",
  // math231c: "scofield",
  // math251a: "scofield",
  // math251b: "scofield",
  // math252a: "pruim",
  // math252b: "pruim",
  // math255a: "moseley",
  // math270a: "ferdinands",
  // math271a: "ferdinands",
  // math270b: "bolt",
  // math271b: "bolt",
  // math270c: "kapitula",
  // math271c: "kapitula",
  // math301a: "turner",
  // math305a: "moseley",
  // math323a: "genzink",
  // math327a: "klanderman",
  // math331a: "kapitula",
  // math351a: "ferdinands",
  // math355a: "kapitula",
  // math359a: "klanderman",
  // math361a: "ferdinands",
  // math390a: "moseley",
  // math391a: "moseley",
  // math395a: "klanderman",
  // mathw81a: "moseley",
  // mathw82a: "pruim",
  // stat143a: "pamplantinga",
  // stat143b: "pamplantinga",
  // stat143c: "barbaraadams",
  // stat143d: "barbaraadams",
  // stat143e: "talsma",
  // stat145a: "scofield",
  // stat241a: "jager",
  // stat241b: "jager",
  // stat241c: "jager",
  // stat243a: "deruiter",
  // stat245a: "deruiter",
  // stat343a: "pruim",
  // stat344a: "deruiter",
  // stat390a: "pruim",
  // // # TODO: add engineering classes and cognates
  // bio115a: "miller",
  // bio123a: "miller",
  // bio141a: "shen",
  // bio141b: "shen",
  // lbio141a: "shen",
  // lbio141b: "grasman",
  // lbio141c: "grasman",
  // lbio141d: "shen",
  // bio160a: "grasman",
  // bio160n: "wertz",
  // lbio160a: "grasman",
  // lbio160b: "dejong",
  // lbio160c: "dejong",
  // lbio160n: "wertz",
  // bio161a: "koetje",
  // lbio161a: "miller",
  // lbio161b: "miller",
  // bio205a: "bebej",
  // lbio205a: "bebej",
  // lbio205b: "bebej",
  // lbio205c: "bebej",
  // lbio205d: "bebej",
  // lbio205e: "barrett",
  // bio206a: "dubois",
  // bio206b: "barret",
  // lbio206a: "dubois",
  // lbio206b: "barret",
  // lbio206c: "dubois",
  // lbio206d: "boldenow",
  // bio207a: "wertz",
  // bio207b: "wertz",
  // lbio207a: "wertz",
  // lbio207b: "wertz",
  // lbio207c: "wertz",
  // lbio207d: "shen",
  // lbio207e: "shen",
  // lbio207f: "shen",
  // lbio207g: "keen",
  // lbio207h: "keen",
  // lbio207i: "keen",
  // bio230a: "dornbos",
  // lbio230a: "koetje",
  // lbio230b: "barrett",
  // lbio230c: "koetje",
  // bio250a: "miller",
  // bio250b: "dejong",
  // bio295a: "koetje",
  // bio321a: "wilstermann",
  // lbio321a: "wiltermann",
  // lbio321b: "wiltermann",
  // bio331a: "boldenow",
  // lbio331a: "boldenow",
  // lbio331b: "boldenow",
  // bio332a: "dornbos",
  // lbio332a: "dornbos",
  // bio333a: "shen",
  // lbio333a: "shen",
  // bio335a: "barrett",
  // lbio335a: "boldenow",
  // bio336a: "wertz",
  // lbio336a: "wertz",
  // bio338a: "miller",
  // lbio338a: "miller",
  // bio345a: "grasman",
  // lbio345a: "grasman",
  // bio346a: "warners",
  // lbio346a: "warners",
  // bio354a: "dornbos",
  // bio364a: "koetje",
  // bio395a: "bebej",
  // bio396a: "dubois",
};
