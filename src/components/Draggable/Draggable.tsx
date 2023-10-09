import React, { useEffect } from "react";
import {DraggableProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent, dragon?: boolean) => {
    // event.target == event.currentTarget should be true here
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);

    // event.target.parentElement --> draggable div
    // event.target.parentElement.parentElement --> container for draggable + dragon
    // event.target.parentElement.parentElement.parentElement --> container for draggable items

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

    // Way to simplify this?
    if (dragged && parentLength && parentLength != 1 && idx != 0 && idx == parentLength - 1) {
        target.after(dragged);
    } else if (dragged) {
        target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[idx]);
    }
}

const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
}

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    const dragonId = "dragon-" + Math.random().toString()

    return (
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
            {dragon && 
                <img 
                    src={require("./dragon.gif")} 
                    id={dragonId}
                    alt="dragon" style={{
                        width: "3rem", 
                        height: "3rem"
                        // display: "none",
                    }} 
                />
            }
        </div>
    )
}