import confetti from 'canvas-confetti';
import { Assignments } from 'harmoniously';
import React, { HTMLAttributes, ReactChildren } from 'react';
import { useHarmony } from './hooks';
import { CustomButtonProps, CustomResultProps } from './types';

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
  button?: (props: CustomButtonProps) => JSX.Element;
  result?: (props: CustomResultProps) => JSX.Element;
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
  result,
}) => {
  const { findSchedule, loading, res, runCount } = useHarmony(
    assignments,
    autoRun
  );

  return (
    <>
      {header || (
        <h1>
          <span role="img" aria-label="musical notes">
            🎶
          </span>{' '}
          Harmoniously
        </h1>
      )}
      <div>
        {assignments === undefined ? (
          <>Error: No schedule assignment constraints provided</>
        ) : (
          <>
            {button ? (
              button({ onClick: findSchedule })
            ) : (
              <button onClick={findSchedule}>Find Schedule</button>
            )}
            <div>
              {runCount > 0 && (
                <>
                  {result ? (
                    result({ loading, res })
                  ) : (
                    <>
                      <b>Results: </b>
                      {loading ? (
                        'loading...'
                      ) : (
                        <>
                          {res === undefined
                            ? 'no non-conflicting schedule found'
                            : confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: { y: 0.6 },
                              }) && JSON.stringify(res)}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              <div>Run Count: {runCount}</div>
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

export * from './hooks';
export * from './types';
