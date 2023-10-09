import React from "react"

export interface DraggableProps {
    children?: React.ReactNode,
    dragon?: boolean,
    onDrop?: (event: React.DragEvent) => null
}

export interface ConditionalWrapperProps {
    children?: React.ReactNode,
    condition?: boolean,
    Wrapper: React.FC<DragonProps>
}

export interface DragonProps {
    children?: React.ReactNode,
}