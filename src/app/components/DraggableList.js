"use client";  
import { useState } from 'react';

const DraggableList = () => {
  const [items, setItems] = useState(['Scott Island', 'Bridge Climb', 'Clam Bar', 'Vivid Festival', 'The Charles Grand Brasserie ']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedIndex, 1)[0];
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <ul className="mt-4">
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="bg-gray-100 rounded-md p-8 my-2 cursor-move" 
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
