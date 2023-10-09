import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Draggable } from "./Draggable";

const meta: Meta<typeof Draggable> = {
  component: Draggable,
  title: "React-Dragon-Drop/Draggable",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Draggable>;

export const Primary: Story = (args) => (
    <ul>
        <Draggable>
            <li>Thing 1</li>
        </Draggable>

        <Draggable>
            <li>Thing 2</li>
        </Draggable>
    </ul>
);
Primary.args = {
    children: <div>test</div>,
};

export const Dragon: Story = (args) => (
    <ul>
        <Draggable dragon={true}>
            <li>Thing 1</li>
        </Draggable>

        <Draggable dragon={true}>
            <li>Thing 2</li>
        </Draggable>
    </ul>
);
Dragon.args = {
    children: <div>test</div>,
    dragon: true
};

// export const Disabled: Story = (args) => (
//   <Button data-testId="InputField-id" {...args} />
// );