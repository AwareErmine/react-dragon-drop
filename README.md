# React Dragon Drop
## It's like react-dnd but simpler and with a dragon

# Example usage:

## Draggable list of items
```jsx
<Dragbox>
    <ul>
        <Draggable>
            <li>Thing 1</li>
        </Draggable>

        <Draggable>
            <li>Thing 2</li>
        </Draggable>
    </ul>
</Dragbox>
```

## Drag between two lists
```jsx
<>
    <Dragbox>
        <ul style={{backgroundColor: "lightcoral", minHeight: "5rem", minWidth: "5rem"}}>
            <Draggable>
                <li>Box 1 thing 1</li>
            </Draggable>

            <Draggable>
                <li>Box 1 thing 2</li>
            </Draggable>
        </ul>   
    </Dragbox>

    <Dragbox>
        <ul style={{backgroundColor: "lightcyan", minHeight: "5rem", minWidth: "5rem"}}>
            <Draggable>
                <li>Box 2 thing 1</li>
            </Draggable>

            <Draggable>
                <li>Box 2 thing 2</li>
            </Draggable>
        </ul>
    </Dragbox>
</>
```


# Wishlist
## Draggable
- Dragimage customization
- Ability to drag onto anywhere on the screen
- Keep track of history and use ctrl-Z to undo the effects of a drag
- Drag over customizable effects

## Dragbox
- There's probably something to add I just can't think of it 