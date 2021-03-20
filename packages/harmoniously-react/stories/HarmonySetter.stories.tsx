import { userConstraintsSmall } from "@harmoniously/shared";
import { Meta, Story } from "@storybook/react";
import { Result } from "harmoniously";
import React from "react";
// Provides nice styles for storybook demos.
import "rsuite/dist/styles/rsuite-default.css";
import { Harmony, HarmonyProps } from "../src";

const meta: Meta = {
  title: "Setter",
  component: Harmony,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HarmonyProps> = (args: HarmonyProps) => {
  const [res, setRes] = React.useState<Result>();

  return (
    <>
      <Harmony {...args} setResult={setRes} />
      <p>Parent result data: {JSON.stringify(res)}</p>
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  assignments: userConstraintsSmall,
};
