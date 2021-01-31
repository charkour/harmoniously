import confetti from 'canvas-confetti';
import { Assignments } from 'harmoniously';
import React, { HTMLAttributes, ReactChildren } from 'react';
import { useHarmony } from './hooks';

// TODO: document!
export interface Props extends HTMLAttributes<HTMLDivElement> {
  assignments: Assignments;
  /**
   * Will aromatically find a schedule if true.
   *
   * @type {boolean}
   * @memberof Props
   */
  autoRun?: boolean;
  button?: (onClick: () => void) => JSX.Element;
  // results?: () => JSX.Element;
  header?: ReactChildren;
  footer?: ReactChildren;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Harmony: React.VFC<Props> = ({
  header,
  footer,
  assignments,
  autoRun = false,
  button,
}) => {
  const { findSchedule, loading, res } = useHarmony(assignments, autoRun);

  // TODO: Extract default components into own file.
  return (
    <>
      {header || <h1>🎶 Harmoniously</h1>}
      <div>
        {assignments === undefined ? (
          <>Error: No schedule assignment constraints provided</>
        ) : (
          <>
            {button ? (
              button(findSchedule)
            ) : (
              <button onClick={findSchedule}>Find Schedule</button>
            )}
            <div>
              <b>Results: </b>
              {loading ? (
                'loading...'
              ) : (
                <>
                  {res === undefined
                    ? 'no solution'
                    : confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                      }) && JSON.stringify(res)}
                </>
              )}
            </div>
          </>
        )}
      </div>
      {footer || (
        <small>
          powered by{' '}
          <a href="https://github.com/charkour/csps">
            <code>csps</code>
          </a>
        </small>
      )}
    </>
  );
};
