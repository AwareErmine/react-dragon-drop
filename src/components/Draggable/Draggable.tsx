import React, { useEffect } from "react";
import {ConditionalWrapperProps, DraggableProps, DragonProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent, dragon?: boolean) => {
    // event.target == event.currentTarget should be true here
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
    event.dataTransfer.setData("dragged-parent-id", (event.target as HTMLElement).parentElement?.parentElement?.id || "noparent");

    // if (dragon) {
    //     event.target.parentTarget
    // }
};

const onDropDefault = (event: React.DragEvent) => {
    event.preventDefault();
    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    const target = event.currentTarget as HTMLElement;

    const idx = Array.prototype.indexOf.call(target?.parentNode?.children, target);
    const parentLength = target?.parentNode?.children.length;

    if (dragged && parentLength && idx != parentLength - 1) {
        target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[idx]);
    } else if (dragged) {
        target.after(dragged);
    }
}

const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
}

const Dragon: React.FC<DragonProps> = ({ children }) => {
    const id = "dragon-" + Math.random().toString()
    return (
        <div style={{backgroundColor: "lightblue", borderRadius: "4px"}}>
            {children}
            <img 
                src={require("./dragon.gif")} 
                id={id}
                alt="dragon" style={{
                    width: "3rem", 
                    height: "3rem",
                    display: "none",
                }} 
            />
        </div>
    )
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ children, condition, Wrapper }) => 
    condition ? <Wrapper>{children}</Wrapper> : children;

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    return (
        <ConditionalWrapper
            condition={dragon}
            Wrapper={Dragon}
        >
            <div 
                draggable={true} 
                onDragStart={(event) => onDrag(event, dragon)}
                onDragEnd={onDrop}
                onDragOver={onDragOver}
                onDrop={(event) => {
                    onDropDefault(event);
                    if (onDrop) onDrop(event);
                }}
                id={Math.random().toString()}
            >
                {children}
            </div>
        </ConditionalWrapper>
    )
}