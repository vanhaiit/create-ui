import React, { useEffect, useState } from 'react'

export default function Drawer() {
    const [active, setActive] = useState('');
    function toggleView(value) { setActive(value) }
    return (
        <div>
            <div id="overlay" className={active}>
                <div class="text">
                    <h1>Simple Drawer Menu</h1>
                    <p>This is just a simple drawer menu. Creating it with HTML CSS and JS. I users Event listeners to toggle
                        the class "active" in each part of the menu and used css to manipulate the style of the active class.
                        You can click the links for my Instagram and my Github! if the screen is less than 600px the menu button
                        will go to the bottom right for Ease of use on mobile.
                    </p>
                </div>
                <div id="burger" className={active} onClick={() => toggleView('active')}>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div id="nav" className={active}>
                    <ul>
                        <li onClick={() => toggleView()}>
                            <h1> dongs</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
