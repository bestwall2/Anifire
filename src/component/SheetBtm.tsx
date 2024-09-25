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
          Ea ad non tempor nulla id labore in nisi occaecat. Ut nisi consequat et amet magna. Fugiat tempor veniam sunt id sit in.
          {/* Your content goes here */}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default SheetBtm;