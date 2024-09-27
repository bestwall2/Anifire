import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';

function SheetBtm({ isOpen, setOpen }) {

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
    >
      <Sheet.Container>
        <Sheet.Header className="rounded-t-md" />
        <Sheet.Content>
        
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default SheetBtm;