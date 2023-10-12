import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Draggable, Dragbox, Dragcontext } from "..";

const meta: Meta<typeof Dragbox> = {
  component: Dragcontext,
  title: "React-Dragon-Drop/Dragcontext",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dragcontext>;

export const Primary: Story = (args) => (
    <>
        <Dragcontext>
            <div style={{backgroundColor: "grey", padding: "1rem"}}>
                <Dragbox>
                    <ul style={{backgroundColor: "lightcoral", minHeight: "5rem", minWidth: "5rem"}}>
                        <Draggable>
                            <li>Context 1 box 1 thing 1</li>
                        </Draggable>

                        <Draggable>
                            <li>Context 1 box 1 thing 2</li>
                        </Draggable>
                    </ul>   
                </Dragbox>

                <Dragbox>
                    <ul style={{backgroundColor: "lightcyan", minHeight: "5rem", minWidth: "5rem"}}>
                        <Draggable>
                            <li>Context 1 box 2 thing 1</li>
                        </Draggable>

                        <Draggable>
                            <li>Context 1 box 2 thing 2</li>
                        </Draggable>
                    </ul>
                </Dragbox>
            </div>
        </Dragcontext>
        
        <Dragcontext>
            <div style={{backgroundColor: "black", padding: "1rem"}}>
                <Dragbox>
                    <ul style={{backgroundColor: "lightcoral", minHeight: "5rem", minWidth: "5rem"}}>
                        <Draggable>
                            <li>Context 2 box 1 thing 1</li>
                        </Draggable>

                        <Draggable>
                            <li>Context 2 box 1 thing 2</li>
                        </Draggable>
                    </ul>   
                </Dragbox>

                <Dragbox>
                    <ul style={{backgroundColor: "lightcyan", minHeight: "5rem", minWidth: "5rem"}}>
                        <Draggable>
                            <li>Context 2 box 2 thing 1</li>
                        </Draggable>

                        <Draggable>
                            <li>Context 2 box 2 thing 2</li>
                        </Draggable>
                    </ul>
                </Dragbox>
            </div>
        </Dragcontext>
    </> 
);
Primary.args = {
    children: <div>test</div>,
};