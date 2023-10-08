import React from "react";

export const Dragbox: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div 
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
                const target = event.currentTarget as HTMLElement;
                if (dragged) {
                    target.firstChild?.appendChild(dragged);
                } 
            }}
            id={Math.random().toString()}
        >
            {children}
        </div>
    )
}