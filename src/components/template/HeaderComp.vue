<template>
  <header class="desktop">
    <router-link to="/" class="logo"
      ><img src="@/assets/images/logo-rimba.png" alt="" />
    </router-link>
    <ul>
      <li>
        <router-link to="/" data-hover="Home" class="nav-item"
          ><span class="">My RIMBA</span></router-link
        >
      </li>
      <li>
        <router-link to="/about" data-hover="About Us" class="nav-item"
          ><span>Cave</span></router-link
        >
      </li>
      <li>
        <router-link to="/service" data-hover="Service" class="nav-item"
          ><span>Ecosystem</span></router-link
        >
      </li>
      <li>
        <router-link to="/portfolio" data-hover="Portfolio" class="nav-item"
          ><span>Cultivation</span></router-link
        >
      </li>
      <li>
        <router-link to="/events" data-hover="Events" class="nav-item"
          ><span>Survival</span></router-link
        >
      </li>
      <li>
        <router-link to="/career" data-hover="Career" class="nav-item"
          ><span>Hunt</span>
        </router-link>
      </li>

      <li>
        <router-link to="/blog" data-hover="Blog" class="nav-item"
          ><span>Hut</span>
        </router-link>
      </li>
    </ul>
  </header>

  <header class="mobile">
    <nav class="nav-mobile">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo-rimba.png" alt="" />
      </router-link>
      <input type="checkbox" id="active-menu" />
      <label for="active-menu" class="menu-btn-nav">
        <i class="bx bx-menu"></i>
      </label>
      <div class="wrapper-menu">
        <ul>
          <li>
            <router-link to="/" data-hover="Home" class="nav-item"
              ><span class="">My RIMBA</span></router-link
            >
          </li>
          <li>
            <router-link to="/about" data-hover="About Us" class="nav-item"
              ><span>Cave</span></router-link
            >
          </li>
          <li>
            <router-link to="/service" data-hover="Service" class="nav-item"
              ><span>Ecosystem</span></router-link
            >
          </li>
          <li>
            <router-link to="/portfolio" data-hover="Portfolio" class="nav-item"
              ><span>Cultivation</span></router-link
            >
          </li>
          <li>
            <router-link to="/events" data-hover="Events" class="nav-item"
              ><span>Survival</span></router-link
            >
          </li>
          <li>
            <router-link to="/career" data-hover="Career" class="nav-item"
              ><span>Hunt</span>
            </router-link>
          </li>

          <li>
            <router-link to="/blog" data-hover="Blog" class="nav-item"
              ><span>Hut</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
};
</script>

<style>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11000;
}
header img {
  width: 120px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style-type: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  padding: 6px 5px;
  font-size: 14px;
}
header ul li:nth-child(7) {
  margin-left: 40px;
}
header.mobile {
  display: none;
}
ul li a.router-link-active span {
  color: #ffa800;
}

.nav-item {
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  font-size: 16px;
  width: 100px;
  font-family: "Skranji", cursive;
}

.nav-item span {
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
}

.nav-item:before,
.nav-item:after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  -webkit-transition: 0s, opacity 0.3s;
  -moz-transition: 0s, opacity 0.3s;
  -o-transition: 0s, opacity 0.3s;
  transition: 0s, opacity 0.3s;
}
.nav-item:before {
  content: attr(data-hover);
  color: #9fbf5b;
}
.nav-item:after {
  content: attr(data-active);
}
.nav-item:hover span,
.nav-item:active span {
  opacity: 0;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  -ms-transform: scale(0.3);
  -o-transform: scale(0.3);
  transform: scale(0.3);
}
.nav-item:hover:before,
.nav-item:active:after {
  opacity: 1;
}
header ul li:nth-child(2) {
  margin-left: 5px;
}
header ul li:nth-child(3) {
  margin-left: 5px;
}
header ul li:nth-child(5) {
  margin-left: 15px;
}
header ul li:nth-child(6) {
  margin-left: 0px;
}
header ul li:nth-child(7) {
  margin-left: 10px;
}

/* End Mobile Header */
@media (max-width: 1600px) {
  .nav-item {
    font-size: 14px;
    width: 85px;
  }
  header {
    height: 100px;
  }
}
@media (max-width: 1200px) {
  header {
    padding: 0px 30px;
  }
}
@media (max-width: 1024px) {
  header {
    height: 80px;
  }
}

@media (max-width: 1024px) {
  header.desktop {
    display: none;
  }
  header.mobile {
    display: block;
    position: fixed;
  }
  .wrapper-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
    /* clip-path: circle(25px at calc(0% + 45px) 45px); */
    background: #fff;
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
  }
  #active-menu:checked ~ .wrapper-menu {
    clip-path: circle(75%);
  }
  .menu-btn-nav {
    position: absolute;
    z-index: 2;
    right: 20px;
    /* left: 20px; */
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    color: #000;
    cursor: pointer;
    /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    background: #fff;
    transition: all 0.3s ease-in-out;
  }
  #active-menu:checked ~ .menu-btn-nav {
    color: #fff;
  }
  #active-menu:checked ~ .menu-btn-nav i:before {
    content: "\ec8d";
    color: #2c3e50;
    font-weight: 700;
  }
  .menu-btn-nav i {
    font-size: 36px;
    display: inline-block;
    vertical-align: middle;
  }
  .wrapper-menu ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    display: block;
  }
  .wrapper-menu ul li {
    margin: 25px 0;
  }
  .wrapper-menu ul li a {
    color: none;
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 30px;
    color: #2c3e50;
    border-radius: 50px;
    background: #fff;
    position: relative;
    line-height: 50px;
    transition: all 0.3s ease;
    width: 100%;
  }
  .wrapper-menu ul li a:after {
    position: absolute;
    content: "";
    background: #fff;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    /*background: linear-gradient(375deg, #1cc7d0, #2ede98);*/
    width: 104%;
    height: 110%;
    left: -2%;
    top: -5%; /* if the font is 'Oswald'*/
    border-radius: 50px;
    transform: scaleY(0);
    z-index: -1;
    animation: rotate 1.5s linear infinite;
    transition: transform 0.3s ease;
  }
  .wrapper-menu ul li a:hover:after {
    transform: scaleY(1);
  }
  .wrapper-menu ul li a:hover {
    color: #fff;
  }
  input[type="checkbox"] {
    display: none;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title {
    font-size: 40px;
    font-weight: 700;
  }
  .content p {
    font-size: 35px;
    font-weight: 600;
  }
  header ul li:nth-child(2) {
    margin-left: 0px;
  }
  header ul li:nth-child(3) {
    margin-left: 0px;
  }
  header ul li:nth-child(5) {
    margin-left: 0px;
  }
  header ul li:nth-child(7) {
    margin-left: 0px;
  }
  header img {
    width: 120px;
    float: left;
    margin-top: 35px;
  }
  @keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
}
@media (max-width: 600px) {
  header {
    padding: 0px 15px;
  }
  header img {
    width: 85px;
    float: left;
    margin-top: 25px;
  }
  .menu-btn-nav i {
    font-size: 22px;
  }
  .menu-btn-nav {
    right: 10px;
    /* left: 20px; */
    top: 10px;
  }
  .wrapper-menu {
    -webkit-clip-path: circle(25px at calc(100% - 35px) 35px);
    clip-path: circle(25px at calc(100% - 35px) 35px);
    transition: all 0.3s ease-in-out;
  }
  .wrapper-menu ul li {
    margin: 10px 0;
  }
  .wrapper-menu ul li a {
    font-size: 24px;
  }
  header img {
    width: 110px;
  }
}
@media (max-width: 380px) {
  header img {
    width: 100px;
  }
}
@media (max-width: 285px) {
  .wrapper-menu ul {
    width: 100%;
  }
  .wrapper-menu ul li {
    margin: 0px 0;
  }
  .wrapper-menu ul li a {
    font-size: 20px;
  }
  .title-wrap h2 {
    font-size: 26px !important;
  }
}
</style>
