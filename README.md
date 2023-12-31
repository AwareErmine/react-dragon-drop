# React Dragon Drag and Drop
## It's like react-dnd but simpler and with a dragon

Note: unlike React-DND, however, this is based on the [poorly-supported](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent#browser_compatibility) drag and drop API

Install with NPM

`npm i react-dragon-drag-and-drop`

## Draggable list of items
Note: because draggable items can insert themselves before or after each other, 
**you do not need Dragbox for just one list**

or this should be true, but testing reveals dragging works better in a Dragbox

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
    - Also dragon image customization
- Ability to drag onto anywhere on the screen
- Keep track of history and use ctrl-Z to undo the effects of a drag
- Drag over customizable effects
- Dragging is weird with grid 
    - But this might be a good time to use React-DND
- If someone knows how to use Storybook properly, please

## Dragbox
- There's probably something to add I just can't think of it 

## Dragcontext: coming soon
- Seconding the sentiment of Dragbox