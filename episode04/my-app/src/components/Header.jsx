import React from 'react'
import ReactDOM  from 'react-dom/client'
 import './Header.css'
const Header=()=>
{
    return(
        <div className='header'>

    <div className='logo_container'>
    <img className='logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAB7CAMAAADNA9uJAAAAb1BMVEX////nAAD+9/foAAbpMzToAw/+8/PwgYLoDBT2vL31sbLpJSnoAAr//PzoEBf85eXxkZL3wcL97u762drrTE7pFx3ucXLubG7xjI3zoqLympvpLS73xsf4y8v0qqvvdnfsWFntYWP50tLqQEHqOjsT9+WRAAADFUlEQVR4nO2awbKiOhBAaSSXCCEBoREBBdT//8YBB7w65BX3LZz0VPVZxZDFqUA6nY6exzAMwzAMwzAMwzAMwzAM84+SVeEG1d6x4glAyC0A6sSdoh8CYhNs0CBC9+VMMgRRZP7WKL/tFXR/w8fGWevjj2bI76TMPm3zH4QSDuve6LLu84U+ft7Hhh+ocN1bA5zXvanCzc/iI/iwW0+a0RhbdPYK3CydUTJadZ4Ac8vYvaAk2Yne9l5pSYbqZllMxCTPgIXFkpZkMoC+rV84LUnPqxDqVSc1yaSXw6qTmqRPW9L3Z5/L0n5CRdKkfWE876AxOHim6FPz8pCGpAnVmN2OqY557N3ZmAur8luThGTeKITiMiXg5ym/8C89aNFcl+cUJE2Msvsjhn+FGp/7OAXJaqcsC32vRLk0CUg20no8qLSaWxQkC2nbsP1eB3OTgmQkxLCyPJRKLFkxBckMYoTq+uLxlaeAMSwDKEhWAgGVKLo6u+b5Nau7Xu40oKa0cHpV5h2C0AoeKC1Blnko7oQkiynWmOx4j2McieP7cT9uN7Qkj2o+2Rzyc9ue89+LKDmKfh5AQfIEyqwHHOJdOjcpSF41nNYDIti1c5OCpDdgs4qTXwEWS1ZJQrIFvUrHS/0MkzQkvU5B+ZaMJyGI7yIVDUl/UPp2fRZ0k7zQov/2oiE5xhtAGCIzeZro8eNlZolIjnEo2GmNcdOMGbDeBW+HbzKSnqnxUecXADJ9j5suJVf1SROlYZhGq+qfu/rk3VbpteOs0ut11pq5DR9luT3qI/z89qHUzm4fvBBk0W4PO/cCXE3kY1dBMWaPD7B4W9DV0j8GJITO0Rc5kZwUSD0Dr5NqxrPDjOO7xYn985a2fp2tEvF5S2srEFIgV8LZbeIW2bKGex1bUnUSnNV8ZddKkW6MdYZp8D4FzmRAcLicN9iDnHbKFpTlyEOGQcPVSwq8/3C/dMIhxpsfPUr7hIlApAUGdL/IiXHNSJRUw/eCkeMbd7wLbnMCcP1vpW2SmnL4YRiGYRiGYRiGYRiGYRiG+V/8ArIoK7XDNegaAAAAAElFTkSuQmCC'>
    </img>
    </div>

    <div className='navitems'>
         <ul>
         <li>Home </li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
         </ul>
    </div>


    </div>
    )
}



export default Header;

    
