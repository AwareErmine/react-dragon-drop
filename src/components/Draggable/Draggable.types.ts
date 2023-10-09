import React from "react"

export interface DraggableProps {
    children?: React.ReactNode,
    dragon?: boolean,
    onDrop?: (event: React.DragEvent) => null
}