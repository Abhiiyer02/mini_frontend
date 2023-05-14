import { useDrag } from 'react-dnd';

const Draggable = ({ id, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM', 
    item: {id},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default Draggable
