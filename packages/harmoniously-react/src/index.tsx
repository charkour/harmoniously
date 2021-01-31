import confetti from 'canvas-confetti';
import { Assignments, harmony, LooseObject } from 'harmoniously';
import React, { HTMLAttributes, ReactChildren } from 'react';

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
  // TODO: convert this too a hook.
  const [res, setRes] = React.useState<LooseObject<string[]> | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (autoRun) {
      findSchedule();
    }
  }, []);

  const findSchedule = React.useCallback(() => {
    setLoading(true);
    const result = harmony(assignments, undefined, undefined);
    setRes(result);
    setLoading(false);
  }, []);

  // TODO: Extract default components into own file.
  return (
    <>
      {header || <h1>🎶 Harmoniously</h1>}
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
