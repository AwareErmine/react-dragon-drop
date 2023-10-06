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
    <div>
        <Draggable>
            <div>Test0</div>
        </Draggable>
        {
        // <Draggable>
        //     <div>Test1</div>
        // </Draggable>
        }   
        <Draggable>
            <div>Test2</div>
        </Draggable>
    </div>
);
Primary.args = {
    children: <div>test</div>,
};

// export const Secondary: Story = (args) => (
//   <Button data-testId="InputField-id" {...args} />
// );
// Secondary.args = {
//   primary: false,
//   disabled: false,
//   text: "Secondary",
// };

// export const Disabled: Story = (args) => (
//   <Button data-testId="InputField-id" {...args} />
// );