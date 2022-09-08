import React from 'react';

// images
import user from '../images/user.png';

function GeneralInformation() {
    return(
	    <div className="flex flex-row font-sans text-[#252a2b]">
		    <div className="flex flex-1 justify-start py-2 pl-10 text-sm">
            <span className="text-inherit pr-5 border-r cursor-pointer">
                Hệ thống Showroom
            </span>
		    <a className="flex flex-row pl-5 text-{13px}" href="tel:0931733469">
			    <span className="pr-2">Mua hàng :</span>
			    <span className="text-[red] font-bold text-{13px}">0931733469</span>
		    </a>
		    </div>
		    <div className="flex flex-1 flex-row justify-end py-2 pr-10 text-sm">
			    <div className="flex flex-row pr-5 border-r cursor-pointer">
				    <img src={user} className="w-4 h-4 mr-2" alt="icon user" />
				    <span className="text-inherit">Tài khoản</span>
			    </div>
			    <div className="flex flex-row pl-8">
				    <p className="pr-1">Giỏ hàng</p>
				    <span className="text-red-600">(0)</span>
			    </div>
		    </div>
	    </div>
    );
}

GeneralInformation.propTypes = {};

GeneralInformation.defaultProps = {};

export default GeneralInformation;
