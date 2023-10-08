import React from "react";

const onDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
};

const onDropDefault = (event: React.DragEvent) => {
    event.preventDefault();
    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    const target = event.currentTarget as HTMLElement;
    if (dragged && target.offsetTop < dragged.offsetTop) {
        target.parentNode?.insertBefore(dragged, target);
    } else if (dragged) {
        target.after(dragged);
    }
}

const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
}

interface DraggableProps {
    children?: React.ReactNode,
    dragon?: boolean,
    onDrop?: (event: React.DragEvent) => null
}

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    return (
        <div 
            draggable={true} 
            onDragStart={onDrag}
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
    )
}