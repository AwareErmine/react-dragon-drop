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
                    target.appendChild(dragged);
                }
            }}
            id={Math.random().toString()}
            style={{backgroundColor: "black", width: "30px", height: "50px"}}
        >
            {children}
        </div>
    )
}