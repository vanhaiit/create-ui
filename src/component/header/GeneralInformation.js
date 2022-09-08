import React from 'react';
import PropTypes from 'prop-types';

// images
import user from '../images/user.png';

function GeneralInformation({ setIsOpen }) {
    return(
	    <div className="flex flex-row font-sans text-[#252a2b] text-sm font-light">
		    <div className="flex flex-1 justify-start py-2 pl-10">
				<span className="text-inherit pr-5 border-r border-slate-400 cursor-pointer">
					Hệ thống Showroom
				</span>
				<a className="flex flex-row pl-5" href="tel:0931733469">
					<span className="pr-2">Mua hàng :</span>
					<span className="text-[red] font-bold">0931733469</span>
				</a>
		    </div>
		    <div className="flex flex-1 flex-row justify-end py-2 pr-10">
			    <div className="flex flex-row pr-5 border-r border-slate-400 cursor-pointer">
				    <img src={user} className="w-4 h-4 mr-2" alt="icon user" />
				    <span className="text-inherit">Tài khoản</span>
			    </div>
			    <button className="flex flex-row pl-8"  onClick={() => setIsOpen(true)}>
				    <p className="pr-1">Giỏ hàng</p>
				    <span className="text-red-600">(0)</span>
			    </button>
		    </div>
	    </div>
    );
}

GeneralInformation.propTypes = {
	setIsOpen: PropTypes.func,
};

GeneralInformation.defaultProps = {
	setIsOpen: () => null,
};

export default GeneralInformation;
