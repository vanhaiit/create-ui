import React from 'react';

// component
import Menu from "../header/Menu";
import GeneralInformation from "./GeneralInformation";

function Header() {
    return(
       <React.Fragment>
	       <GeneralInformation />
	       <Menu />
       </React.Fragment>
    );
}

export default Header;
