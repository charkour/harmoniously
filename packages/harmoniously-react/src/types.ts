import { LooseObject } from "harmoniously";

export type Result = LooseObject<string[]> | undefined;
export interface CustomButtonProps {
  onClick: () => void;
}
export interface CustomResultProps {
  loading: boolean;
  res: Result;
}
