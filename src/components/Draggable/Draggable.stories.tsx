import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Draggable } from "../index";

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

export const ComplicatedLiItems: Story = (args) => (
    <div>
        <Draggable>
            <div>
                <div>
                    <h1>Thing 1</h1>
                    <p>It is the thing that is first</p>
                </div>
            </div>
        </Draggable>

        <Draggable>
            <div>
                <div>
                    <h1>Thing 2</h1>
                    <p>It is the thing that is second</p>
                </div>
            </div>
        </Draggable>
    </div>
);
ComplicatedLiItems.args = {
    children: <div>test</div>,
};

export const Grid: Story = (args) => (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 10rem)",
        gap: "1rem",
    }}>
        <Draggable>
            <div style={{backgroundColor: "lightblue"}}>
                <h1>Thing 1</h1>
            </div>
        </Draggable>

        <Draggable>
            <div style={{backgroundColor: "lightcoral"}}>
                <h1>Thing 2</h1>
            </div>
        </Draggable>

        <Draggable>
            <div style={{backgroundColor: "lavender"}}>
                <h1>Thing 3</h1>
            </div>
        </Draggable>

        <Draggable>
            <div style={{backgroundColor: "lightgreen"}}>
                <h1>Thing 4</h1>
            </div>
        </Draggable>
    </div>
);
Grid.args = {
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
