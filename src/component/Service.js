import React from "react";
import img1 from "./img/giaohang.png";
import img2 from "./img/thanhtoancod.png";
import img3 from "./img/khachhangVIP.png";
import img4 from "./img/hotrobaohanh.png";
const Service = () => {
    const listService = [
        {
            src: img1,
            alt: "Miễn phí giao hàng",
            title: "Miễn phí giao hàng",
            content : "Miễn phí ship với đơn hàng > 500K"
        },
        {
            src: img2,
            alt: "Thanh toán COD",
            title: "Thanh toán COD",
            content : "Kiểm tra, thanh toán khi nhận hàng COD"
        },
        {
            src: img3,
            alt: "Khách hàng VIP",
            title: "Khách hàng VIP",
            content : "Ưu đãi dành cho khách hàng thân thiết"
        },
        {
            src: img4,
            alt: "Hỗ trợ bảo hành",
            title: "Hỗ trợ bảo hành",
            content : "Đổi sản phẩm tại tất cả store TORANO"
        }
    ];
    return(
        <div className="h-[82px] w-full ">
            <div className="h-full mt-[20px] px-[40px]  flex justify-between">
                {listService.map((item,index) => (
                    <div className="w-full px-[15px] flex" key={index}>
                        <div className="h-full items-center">
                            <img 
                                src={item.src}
                                alt={item.alt}
                                className="max-h-full max-w-full"
                            />
                        </div>
                        <div className="pl-[10px] leading-1.4" >
                            <h3 className="text-[#c10209] text-[21px] mt-[5px] font-[inherit] text-left">{item.title}</h3>
                            <p className="mb-[10px] font-sans text-[14px] text-[#252a2b] leading-[21px] text-left">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service;