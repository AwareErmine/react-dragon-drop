import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Draggable, Dragbox } from "..";

const meta: Meta<typeof Dragbox> = {
  component: Dragbox,
  title: "React-Dragon-Drop/Dragbox",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dragbox>;

export const Primary: Story = (args) => (
    <>
        <Dragbox>
            <ul style={{backgroundColor: "lightcoral", minHeight: "5rem", minWidth: "5rem"}}>
                <Draggable>
                    <li>Box 1 thing 1</li>
                </Draggable>

                <Draggable>
                    <li>Box 1 thing 2</li>
                </Draggable>
            </ul>   
        </Dragbox>

        <Dragbox>
            <ul style={{backgroundColor: "lightcyan", minHeight: "5rem", minWidth: "5rem"}}>
                <Draggable>
                    <li>Box 2 thing 1</li>
                </Draggable>

                <Draggable>
                    <li>Box 2 thing 2</li>
                </Draggable>
            </ul>
        </Dragbox>
    </> 
);
Primary.args = {
    children: <div>test</div>,
};