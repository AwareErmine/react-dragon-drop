import React, { useId } from "react";

export const Dragcontext: React.FC<React.PropsWithChildren> = ({children}) => {
    const id = useId();

    return (
        <div 
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
                const draggedParent = document.getElementById(event.dataTransfer.getData("dragged-parent-id"));
                const currentTarget = event.currentTarget as HTMLElement; // currentTarget is the dragcontext
                const target = event.target as HTMLElement; // currentTarget is what we're trying to add to

                if (dragged && currentTarget == draggedParent?.parentElement?.parentElement) {
                    console.log(currentTarget)
                    console.log(draggedParent?.parentElement?.parentElement)
                    console.log("ok")
                } else {
                    console.log(currentTarget)
                    console.log(draggedParent?.parentElement?.parentElement)
                    console.log("we don't do that here")
                }
            }}
            id={"dragcontext"+id}
        >
            {children}
        </div>
    )
}