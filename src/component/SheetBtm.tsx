import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

function SheetBtm({ isOpen, setOpen }) {
    return (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
                <Sheet.Header className='rounded-t-md' />
                <Sheet.Content>
                    <div class='Cards'>
                        <ul class='CardsList'>
                            <li id="CardBtmList" class='Home flex'>
                            <FaHome style={{
                              height:25,
                              width: 25,
                            }}>
                            </FaHome>
                            <p>Home</p>
                            </li>
                            <li id="CardBtmList" class='About'>About</li>
                            <li id="CardBtmList" class='Contact'>Contact</li>
                        </ul>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
}

export default SheetBtm;
