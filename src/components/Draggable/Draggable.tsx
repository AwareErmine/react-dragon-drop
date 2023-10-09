import React from "react";
import {ConditionalWrapperProps, DraggableProps, DragonProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
    event.dataTransfer.setData("dragged-parent-id", (event.target as HTMLElement).parentElement?.parentElement?.id || "noparent");
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

const Dragon: React.FC<DragonProps> = ({ children }) => {

    return (
        <div style={{backgroundColor: "lightblue", borderRadius: "4px"}}>
            {children}
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
        </ConditionalWrapper>
    )
}