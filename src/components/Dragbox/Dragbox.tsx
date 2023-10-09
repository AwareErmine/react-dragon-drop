import React from "react";

export const Dragbox: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div 
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
                const currentTarget = event.currentTarget as HTMLElement; // currentTarget is the box
                const target = event.target as HTMLElement; // currentTarget is exactly what we dropped over

                // note: all *real* item ordering is controlled in Draggable

                if (dragged && currentTarget.firstChild == target) {
                    currentTarget.firstChild?.appendChild(dragged);
                } 
            }}
            id={Math.random().toString()}
        >
            {children}
        </div>
    )
}