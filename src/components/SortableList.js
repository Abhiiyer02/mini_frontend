import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const SortableList = ({ items, onSort }) => {
  const [localItems, setLocalItems] = useState(items)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const newItems = Array.from(localItems)

    const [reorderedItem] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, reorderedItem)

    setLocalItems(newItems)
    onSort(newItems)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="ITEMS">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {localItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  {item.text}
                </div>
              )}
            </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default SortableList;