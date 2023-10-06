import React from "react";

const onDrag = (event: React.DragEvent) => event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    const target = event.currentTarget as HTMLElement;
    if (dragged && target.offsetTop > dragged.offsetTop) {
        target.parentNode?.insertBefore(dragged, target);
    } else if (dragged) {
        target.after(dragged);
    }
}

export const Draggable: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div 
            draggable={true} 
            onDragStart={onDrag}
            onDragEnd={onDrop}
            id={Date.now().toPrecision()}
        >
            {children}
        </div>
    )
}