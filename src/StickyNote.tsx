import React from 'react';
import { StickyNoteProps } from './types/stickyNote';

const StickyNote = ({
  id, screenX, screenY, onDrag,
}: StickyNoteProps) => (
  <div
    style={{
      background: '#f00', height: '100px', left: screenX, position: 'absolute', top: screenY, width: '100px',
    }}
    draggable
    onDragStart={(e) => onDrag(e, id)}
  />
);
export default StickyNote;
