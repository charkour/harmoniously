import { Meta, Story } from '@storybook/react';
import React from 'react';
// Provides nice styles for storybook demos.
import 'rsuite/dist/styles/rsuite-default.css';
import Button from 'rsuite/lib/Button';
import { userConstraints, userConstraintsSmall } from '../../shared/shared';
import { Harmony, Props } from '../src';

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

const ButtonThing = (onClick: () => void) => {
  return (
    <Button appearance="primary" onClick={onClick}>
      Find A Schedule
    </Button>
  );
};

Default.args = {
  assignments: userConstraintsSmall,
};

Custom.args = {
  assignments: userConstraintsSmall,
  autoRun: true,
  button: ButtonThing, // equivalent to <Harmony button={ButtonThing}>
  header: <h1>Schedulizer</h1>,
  footer: (
    <small>
      Powered by <code>csps</code>!
    </small>
  ),
};

NoData.args = {};

ManyData.args = {
  assignments: userConstraints,
};
