import React, { useEffect, useId, useState } from "react";
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

    // console.log(target)
    // console.log(dragged)

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
};

const Dragon: React.FC<{
    mousePosition: {x: number, y: number},
    draggableId: string
}> = ({ mousePosition, draggableId }) => {
    useEffect(() => {
        const moveDragon = () => {
            const dragonGif = document.getElementById("dragon" + draggableId)

            const dragonPosition = {
                x: dragonGif?.offsetLeft,
                y: dragonGif?.offsetTop
            }

            if (dragonGif?.style && mousePosition.x && mousePosition.y) {
                dragonGif.style.top = mousePosition.y + "px";
                dragonGif.style.left = mousePosition.x + "px";

                if (dragonPosition.x && dragonPosition.x > mousePosition.x) {
                    dragonGif.style.transform = "scaleX(-1)"
                } else {
                    dragonGif.style.transform = "scaleX(1)"
                }
            }
        }
        const intervalId = setInterval(moveDragon, 50);
        return () => clearInterval(intervalId)
    }, [mousePosition, draggableId])

    return (
        <img 
            src={require("/assets/dragon.gif")} 
            id={"dragon" + draggableId}
            alt="dragon" 
            style={{
                width: "3rem", 
                height: "3rem",
                position: "absolute",
                zIndex: "100",
                transition: "top 400ms ease 0s, left 400ms ease 0s",
            }} 
        />
    )
}

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    const draggableId = useId();
    const [flying, setFlying] = useState(false);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    return (
        <>
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
                    event.preventDefault();

                    if (dragon) {
                        setMousePosition({
                            x: event.clientX,
                            y: event.clientY
                        })
                    }
                }}
                onDrop={(event) => {
                    onDropDefault(event);
                    if (onDrop) onDrop(event);
                }}
                id={"draggable" + draggableId}
            >
                {children}
                
            </div>
            {dragon && flying &&
                <Dragon draggableId={draggableId} mousePosition={mousePosition} />
            }
        </>
    )
}