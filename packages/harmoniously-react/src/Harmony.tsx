import { Assignments } from 'harmoniously';
import React, { HTMLAttributes, ReactNode } from 'react';
import { CustomButtonProps, CustomResultProps } from './types';
import { useHarmony } from './useHarmony';

// TODO: document!
export interface HarmonyProps extends HTMLAttributes<HTMLDivElement> {
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
  header?: ReactNode;
  footer?: ReactNode;
  showRunCount?: boolean;
  confetti?: boolean;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * Harmony component
 */
export const Harmony: React.VFC<HarmonyProps> = ({
  header,
  footer,
  assignments,
  autoRun = false,
  button,
  result,
  showRunCount = false,
  confetti = true,
}) => {
  const { findSchedule, loading, res, runCount } = useHarmony(
    assignments,
    autoRun,
    confetti
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
                            : JSON.stringify(res)}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              {showRunCount && <div>Run Count: {runCount}</div>}
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
