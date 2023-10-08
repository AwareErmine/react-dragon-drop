import React from "react";

export const Dragbox: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div 
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
                const draggedParentId = event.dataTransfer.getData("dragged-parent-id");
                const target = event.currentTarget as HTMLElement;

                if (dragged && draggedParentId != target.id) {
                    target.firstChild?.appendChild(dragged);
                } 
            }}
            id={Math.random().toString()}
        >
            {children}
        </div>
    )
}