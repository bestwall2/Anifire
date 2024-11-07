import { Sheet } from "react-modal-sheet";

import { FaHome } from "react-icons/fa";

function SheetBtm({ isOpen, setOpen }) {
    return (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
                <Sheet.Header className='rounded-t-md' />
                <Sheet.Content>
                    <div className='Cards'>
                        <ul className='CardsList'>
                            <li id="CardBtmList" className='Home flex'>
                            <FaHome style={{
                              height:25,
                              width: 25,
                            }}>
                            </FaHome>
                            <p>Home</p>
                            </li>
                            <li id="CardBtmList" className='About'>About</li>
                            <li id="CardBtmList" className='Contact'>Contact</li>
                        </ul>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
}

export default SheetBtm;
