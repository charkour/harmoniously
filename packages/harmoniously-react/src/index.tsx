import confetti from 'canvas-confetti';
import { Assignments, harmony } from 'harmoniously';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  assignments?: Assignments;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Harmony: FC<Props> = ({ children, assignments }) => {
  const res = assignments && harmony(assignments, undefined, undefined);
  console.log(res);

  return (
    <>
      <div>{children}</div>
      <button
        onClick={() =>
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
        }
      >
        Woohoo
      </button>
    </>
  );
};
