import { Meta, Story } from '@storybook/react';
import React from 'react';
// Provides nice styles for storybook demos.
import 'rsuite/dist/styles/rsuite-default.css';
import Button from 'rsuite/lib/Button';
import Loader from 'rsuite/lib/Loader';
import { userConstraints, userConstraintsSmall } from '../../../shared/shared';
import { CustomButtonProps, CustomResultProps, Harmony, Props } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Harmony,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args: Props) => <Harmony {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Custom = Template.bind({});
export const NoData = Template.bind({});
export const ManyData = Template.bind({});

const CustomButton = ({ onClick }: CustomButtonProps) => {
  return (
    <Button appearance="primary" onClick={onClick}>
      Find A Schedule
    </Button>
  );
};

const CustomResult = (props: CustomResultProps) => {
  const { loading, res } = props;
  return (
    <>
      {loading ? (
        <div>
          <Loader /> loading...
        </div>
      ) : (
        <div>
          {res === undefined
            ? 'no non-conflicting schedule found! oh no'
            : JSON.stringify(res, null, 2)}
        </div>
      )}
    </>
  );
};

Default.args = {
  assignments: userConstraintsSmall,
};

Custom.args = {
  assignments: userConstraintsSmall,
  autoRun: true,
  button: CustomButton, // equivalent to <Harmony button={CustomButton}>
  header: <h1>Schedulizer</h1>,
  footer: (
    <small>
      Powered by{' '}
      <a href="https://github.com/charkour/csps">
        <code>csps</code>
      </a>
      !!!
    </small>
  ),
  result: CustomResult,
};

NoData.args = {};

ManyData.args = {
  assignments: userConstraints,
  result: CustomResult,
  showRunCount: true,
  confetti: false,
};
