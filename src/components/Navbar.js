/* 1.
import React, in the same way as in App.js,

2.
write a Navbar function, which returns a JSX block composed of the pair <nav></nav>,

3.
insert, in these tags: a link (for example to the Simpsons' Wikipedia page) or a title,

4.
export your component, in the same way as in App.js. */

import React from 'react';
import  './Navbar.css'

const Nav = () => {
  return (
    <div className="App Navbar">
      <nav> 
        <a href="https://en.wikipedia.org/wiki/The_Simpsons" target="_blank" rel="noopener noreferrer"><h1>The Simpsons</h1></a>
        </nav>
    </div>
  );
}
  
export default Nav;