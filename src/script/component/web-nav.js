import $ from "jquery";

class WebNav extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
             
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 36px;
            background-color: #BE3144;
            position: sticky;
            top: 0;
            z-index: 2;
          }
          
          .nav li {
            display: inline;
            list-style-type: none;
          }
          
          .nav-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .nav-item {
            margin-left: 2rem;
            margin-right: 1rem;
          }
          
          .nav-item a {
            font-size: 20px;
            font-weight: 400;
            text-decoration: none;
            color: white;
          }
          
          .nav-item .active {
            font-weight: bolder;
          }
          
          .nav-title-pos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0;
          }
          
          .nav-title {
            font-size: 1.8rem;
            font-weight: bolder;
            color: white;
            padding-left: 10px;
            padding-top: 2px;
            cursor: default;
            margin: 10px 0;
          }

          .logo-img {
            width: 38px;
            align-items: center;
            padding-top: 3px;
            margin-left: 0.4rem;
          }
          
          .menuHamburger {
            display: none;
          }
          
          .menuHamburger .bar {
            display: block;
            width: 30px;
            height: 3px;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            background-color: white;
          }
          
          @media screen and (max-width: 1170px) {
            .nav-item {
              margin-left: 1.8rem;
              margin-right: 0.6rem;
            }
          
            .nav-item a {
              font-size: 18px;
            }
          
            .logo-img {
              width: 35px;
            }
          
            .nav-title {
              font-size: 1.5rem;
            }
          }
          
          @media screen and (max-width: 770px) {
            .nav-bar {
              width: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              right: -100%;
              top: 4.5rem;
              text-align: center;
              transition: 0.5s;
              box-shadow: 0 10px 27px rgba(0, 0, 0, 0.08);
              position: fixed;
              flex-direction: column;
            }
          
            .nav-bar.active {
              right: 0;
            }
          
            .nav-item {
              margin: 24px 0;
            }
          
            .menuHamburger {
              display: block;
              cursor: pointer;
            }
          
            .nav-item a:hover {
              color: white;
            }
          
            .menuHamburger.active .bar:nth-child(2) {
              opacity: 0;
            }
          
            .menuHamburger.active .bar:nth-child(1) {
              transform: translateY(8px) rotate(315deg);
            }
          
            .menuHamburger.active .bar:nth-child(3) {
              transform: translateY(-8px) rotate(-315deg);
            }

            .nav-title {
              font-size: 1.4rem;
              padding-top: 2px;
              padding-left: 0;
              margin: 10px 0;
            }
  
            .logo-img {
              width: 32px;
              align-items: center;
              padding-top: 3px;
              margin-left: 0.4rem;
            }
       </style>
       <div class="nav">
        <ul class="nav-title-pos">
          <li><h1 class="nav-title">YOUFLIX</h1></li>
          <li>
            <img
              src="assets/image/playlogo.png"
              alt="logo-YOUFLIX"
              class="logo-img"
            />
          </li>
        </ul>
        <ul class="nav-bar">
          <li class="nav-item">
            <a href="#">Home</a>
          </li>
          <li class="nav-item">
            <a href="#">Popular</a>
          </li>
          <li class="nav-item active">
            <a href="#" class="active">Search</a>
          </li>
          <li class="nav-item">
            <a href="#">About</a>
          </li>
        </ul>
        <div class="menuHamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
       `;

    const hamburgerIcon = this.shadowDOM.querySelector(".menuHamburger");
    const navItem = this.shadowDOM.querySelector(".nav-bar");

    $(hamburgerIcon).on("click", () => {
      $(hamburgerIcon).toggleClass("active");
      $(navItem).toggleClass("active");
    });
  }
}
customElements.define("web-nav", WebNav);
