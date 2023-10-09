import React, { useEffect, useState } from "react";
import {DraggableProps} from "./Draggable.types";

const onDrag = (event: React.DragEvent) => {
    // event.target == event.currentTarget should be true here
    event.dataTransfer.setData("dragged-id", (event.target as HTMLElement).id);
};

const onDropDefault = (event: React.DragEvent) => {
    event.preventDefault();
    const dragged = document.getElementById(event.dataTransfer.getData("dragged-id"));
    const target = event.currentTarget as HTMLElement;

    const idx = Array.prototype.indexOf.call(target?.parentNode?.children, target);
    const parentLength = target?.parentNode?.children.length;

    // Way to simplify this?
    if (dragged && parentLength && parentLength != 1 && idx != 0 && idx == parentLength - 1) {
        target.after(dragged);
    } else if (dragged) {
        target.parentNode?.insertBefore(dragged, target?.parentNode?.childNodes[idx]);
    }
}

const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
}

// const useMousePosition = () => {
//     const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
//     useEffect(() => {
//       const uWpdateMousePosition = ev => {
//         setMousePosition({ x: ev.clientX, y: ev.clientY });
//       };
      
//       window.addEventListener('mousemove', updateMousePosition);
  
//       return () => {
//         window.removeEventListener('mousemove', updateMousePosition);
//       };
//     }, []);
  
//     return mousePosition;
//   };

export const Draggable: React.FC<DraggableProps> = ({children, dragon, onDrop}) => {
    const dragonId = "dragon-" + Math.random().toString();
    console.log(dragonId)

    // const [flying, setFlying] = useState(false);

    // useEffect(() => {
    //     const dragon = document.getElementById(dragonId)

    //     if (dragon?.style) 
    //         dragon.style.display = flying ? "block" : "none";
    // }, [flying])

    return (
        <div 
            draggable={true} 
            onDragStart={(event) => {
                onDrag(event);
                // setFlying(true);
            }}
            onDragEnd={onDrop}
            onDragOver={onDragOver}
            onDrop={(event) => {
                onDropDefault(event);
                if (onDrop) onDrop(event);
                // setFlying(false);
            }}
            id={Math.random().toString()}
        >
            {children}
            {dragon && 
                <img 
                    src={require("./dragon.gif")} 
                    id={dragonId}
                    alt="dragon" 
                    style={{
                        width: "3rem", 
                        height: "3rem",
                        display: "none",
                    }} 
                />
            }
        </div>
    )
}