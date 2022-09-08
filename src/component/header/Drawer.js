import React from 'react';
import PropTypes from 'prop-types';

// images
import iconClose from '../images/iconclose.png';
import rightArrow from '../images/rightArrow.png';

function Drawer({ isOpen, setIsOpen }) {

    const onCloseDrawer = () => {
        setIsOpen(false)
    }

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg py-16 px-4 flex flex-col items-start space-y-6 overflow-y-scroll h-full font-sans">
                    <div className="flex w-full flex-row justify-between">
                        <p className="text-sm font-normal font-bold">GIỎ HÀNG</p>
                        <button onClick={onCloseDrawer}>
                            <img src={iconClose} alt="icon close" className="w-5 h-5"/>
                        </button>
                    </div>
                    <div className="w-full border-dotted border-b-2 border-sky-800 text-left border-slate-700 pb-4 text-xs">
                        <span>Bạn đang có <span className="font-bold text-sm">0</span> sản phẩm trong giỏ hàng.</span>
                    </div>
                    <p className="w-full border-b-2 text-left border-current text-xs pb-8">Hiện chưa có sản phẩm</p>
                    <div className="flex w-full flex-row justify-between text-sm font-bold">
                        <span>TỔNG TIỀN TẠM TÍNH:</span>
                        <span>0₫</span>
                    </div>
                    <button className="w-full bg-black text-white p-2 text-sm font-bold">TIỀN HÀNG ĐẶT HÀNG</button>
                    <button className="w-full flex justify-center items-center p-2 text-xs">
                        <span>Xem chi tiết giỏ hàng</span>
                        <img src={rightArrow} alt="rightArrow" className="w-3 h-4 ml-1"/>
                    </button>
                </article>
            </section>
            <section className=" w-screen h-full cursor-pointer " onClick={onCloseDrawer} />
        </main>
    );
}

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
};

Drawer.defaultProps = {
    isOpen: false,
    setIsOpen: () => null,
};

export default Drawer;
