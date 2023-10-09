import React, { useEffect, useId, useState } from "react";
import {DraggableProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent) => {
    // event.target == event.currentTarget should be true here
    console.log(event.target)

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

    console.log(target)
    console.log(dragged)

    // The parent element of a dragged element's parent is the body of the document for a single list  
    // of draggable items and the DragBox for elements in a DragBox
    // The parent element of a dragged element will always be a container of Draggable elements
    // If there are two lists of Draggable elements not in a DragBox, you can, therefore drag between
    // them, but if one of the lists becomes empty, you can't go back! 
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
        // where the items are in a Dragbox
        target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[targetIdx]);
    } 
}

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
    useEffect(() => {
      const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    const draggableId = useId();
    const [flying, setFlying] = useState(false);

    if (dragon) {
        const {x, y} = useMousePosition();
        // console.log(x,y)
        if (flying) {
            const dragonGif = document.getElementById("dragon" + draggableId);
            if (dragonGif?.style) {
                dragonGif.style.top = y || "0";
                dragonGif.style.left = x || "0";
            }
        }
    }
    

    return (
        <div 
            draggable={true} 
            onDragStart={(event) => {
                if (dragon) setFlying(true);
                onDrag(event);
            }}
            onDragEnd={(event) => {
                if (dragon) setFlying(false);
            }}
            onDragOver={(event) => {
                event.preventDefault()
            }}
            onDrop={(event) => {
                onDropDefault(event);
                if (onDrop) onDrop(event);
            }}
            id={"draggable"+draggableId}
        >
            {children}
            {dragon && flying &&
                <img 
                    src={require("./dragon.gif")} 
                    id={"dragon" + draggableId}
                    alt="dragon" 
                    style={{
                        width: "3rem", 
                        height: "3rem",
                        position: "absolute",
                        top: "0",
                        left: "0",
                    }} 
                />
            }
        </div>
    )
}