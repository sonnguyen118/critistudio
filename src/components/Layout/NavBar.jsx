import React, { useState } from 'react';
import LogoCriti from '../../media/logo-criti_vientrang.png';
import LogoCriti_copy from '../../media/logo-criti_copy.png';


const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbar(false);
    } else {
      setNavbar(true);
    };
    // console.log(window.scrollY);
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className="navbar navbar-expand-lg" id='mynav'>
      <div className={navbar ? 'container-fluid navbar-container': 'container-fluid navbar-active'} >
        <div class="collapse navbar-collapse navbar-container__header" id="navbarSupportedContent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0 navbar-container__header-text">
              <div class="nav-item navbar-container__header-text-li">
                <a class="navbar-brand navbar-container__header-text-li-logo" href="/">
                 <img className={navbar ? "navbar-container__header-text-li-logo-img" : "navbar-container__header-text-li-logo-img hide"} src={LogoCriti} />
                 <img className={navbar ? "navbar-container__header-text-li-logo-img hide" : "navbar-container__header-text-li-logo-img"} src={LogoCriti_copy} />
                </a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i" href="shop">Cửa Hàng</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i" href="shop">Game</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i " href="films" tabindex="-1" aria-disabled="true">Phim</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i" href="technology" tabindex="-1" aria-disabled="true">Công Nghệ</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i disabled" href="community" tabindex="-1" aria-disabled="true">Cộng Đồng</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i " href="help" tabindex="-1" aria-disabled="true">Trợ Giúp</a>
              </div>
              <div class="nav-item navbar-container__header-text-li">
                <a class="nav-link navbar-container__header-text-li-i" href="contact" tabindex="-1" aria-disabled="true">Liên Hệ</a>
              </div>
            </div>

        </div>


  </div>
</nav>
  )
}

export default Navbar