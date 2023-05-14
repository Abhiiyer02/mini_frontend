import { useDrop } from 'react-dnd';

const Droppable = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: item => onDrop(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? '#f0f0f0' : 'transparent' }}>
      {children}
    </div>
  );
};

export default Droppable