import React from "react";

const onDrag = (event) => event.dataTransfer.setData("dragged-id", event.target.id);
const onDrop = (event) => {
    event.preventDefault();
    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    if (dragged && event.currentTarget.offsetTop > dragged.offsetTop) {
        event.currentTarget.parentNode.insertBefore(dragged, event.currentTarget);
    } else {
        event.currentTarget.after(dragged);
    }
}

export const Draggable: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div 
            draggable="true" 
            onDragStart={onDrag}
            onDragEnd={onDrop}
            id={Date.now().toPrecision()}
        >
            {children}
        </div>
    )
}