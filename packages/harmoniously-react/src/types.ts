import { Result } from "harmoniously";

export interface CustomButtonProps {
  onClick: () => void;
}
export interface CustomResultProps {
  loading: boolean;
  res: Result;
}
