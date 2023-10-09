import React, { useEffect, useState } from "react";
import {DraggableProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent) => {
    // event.target == event.currentTarget should be true here
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
    event.dataTransfer.setData("dragged-parent-id", (event.target as HTMLElement).parentElement?.parentElement?.id || "noparent");
};

const onDropDefault = (event: React.DragEvent) => {
    event.preventDefault();

    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    const draggedParentId = event.dataTransfer.getData("dragged-parent-id");

    const target = event.currentTarget as HTMLElement;
    const targetIdx = Array.prototype.indexOf.call(target?.parentNode?.children, target);
    const targetLength = target?.parentNode?.children.length;

    if (draggedParentId == target.parentElement?.parentElement?.id) {
        // I want to make the index of the dragged item the index of the target
        if (dragged && targetIdx + 1 != targetLength) {
            target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[targetIdx]);
        } else if (dragged) {
            target.after(dragged);
        }
    } else if (dragged) {
        // This works well enough for dragging between two lists
        // And for lists with min heights that are bigger than the elements 
        target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[targetIdx]);
    }
}

const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
}

// const useMousePosition = () => {
//     const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
//     useEffect(() => {
//       const uWpdateMousePosition = ev => {
//         setMousePosition({ x: ev.clientX, y: ev.clientY });
//       };
      
//       window.addEventListener('mousemove', updateMousePosition);
  
//       return () => {
//         window.removeEventListener('mousemove', updateMousePosition);
//       };
//     }, []);
  
//     return mousePosition;
//   };

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    const dragonId = "dragon-" + Math.random().toString();
    // console.log(dragonId)

    // const [flying, setFlying] = useState(false);

    // useEffect(() => {
    //     const dragon = document.getElementById(dragonId)

    //     if (dragon?.style) 
    //         dragon.style.display = flying ? "block" : "none";
    // }, [flying])

    return (
        <div 
            draggable={true} 
            onDragStart={(event) => {
                onDrag(event);
                // setFlying(true);
            }}
            onDragEnd={onDrop}
            onDragOver={onDragOver}
            onDrop={(event) => {
                onDropDefault(event);
                if (onDrop) onDrop(event);
                // setFlying(false);
            }}
            id={Math.random().toString()}
        >
            {children}
            {dragon && 
                <img 
                    src={require("./dragon.gif")} 
                    id={dragonId}
                    alt="dragon" 
                    style={{
                        width: "3rem", 
                        height: "3rem",
                        display: "none",
                    }} 
                />
            }
        </div>
    )
}