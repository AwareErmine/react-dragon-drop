import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dragbox } from "./Dragbox";
import { Draggable } from "../Draggable/Draggable";

const meta: Meta<typeof Dragbox> = {
  component: Dragbox,
  title: "React-Dragon-Drop/Dragbox",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dragbox>;

export const Primary: Story = (args) => (
    <>
        <Draggable>
            <div style={{color: "grey"}}>Test</div>
        </Draggable>

        <Dragbox>
            <div style={{backgroundColor: "black", width: "5rem", height: "5rem"}}/>
        </Dragbox>
    </>
    
);
Primary.args = {
    children: <div>test</div>,
};