import React from "react";

const CardItem = () => {
    return(
        <div className="w-[25%] px-[15px] mt-[40px] ">
            <div>
                <a href="" title="Áo polo trơn bo kẻ in logo trước ngực DSTP609">
                    <img src="https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220825/web_tp609.png"/>
                </a>
                <div className="text-center leading-6 bg-[#c30001] text-[#fff] font-semibold p-[5px] mt-[10px] text-[14px]">
                    50%
                </div>
                <a>
                    <img src="https://torano.vn/tp/T0298/img/store/2071/iconsheart.png" />
                </a>
            </div>
            <h3 className="mt-[20px] mb-[10px] text-[16px] text-[#000] font-medium text-left">
                <a href="">Áo polo trơn bo kẻ in logo trước ngực DSTP609</a>
            </h3>
            <div className="text-left">
                <p className="text-[18px] text-[#ad0900] font-bold">199,999đ</p>
            </div>
            <div>
                <div className="w-[45px] h-[45px] mr-[10px] inline-block rounded-full boder-solid boder-2 border-red-600 box-border">
                    <a className="box-border">
                        {/* <img 
                            src="https://traffic-edge34.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/tp609.jpg"
                            className="inline-block rounded-full h"
                        /> */}
                    </a>

                </div>
            </div>
        </div>
    );
}
export default CardItem