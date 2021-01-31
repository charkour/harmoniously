import { Meta, Story } from '@storybook/react';
import React from 'react';
import { userConstraints } from '../../shared/shared';
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

Default.args = {
  children: 'Children',
  assignments: userConstraints,
  autoRun: false,
};
