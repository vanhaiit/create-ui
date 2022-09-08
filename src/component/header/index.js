import React from 'react';

// component
import Menu from "./Menu";
import Drawer from "./Drawer";
import GeneralInformation from "./GeneralInformation";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    return(
       <React.Fragment>
	       <GeneralInformation setIsOpen={setIsOpen} />
	       <Menu />
           <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
       </React.Fragment>
    );
}

export default Header;
