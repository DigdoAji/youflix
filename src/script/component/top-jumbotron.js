class TopJumbotron extends HTMLElement {
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
            
            .top-header {
              background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
                url("assets/image/header-background.jpg");
              background-color: rgba(80, 80, 80, 0.8);
              background-size: cover;
              background-position: center;
              width: 100%;
              height: 550px;
              font-size: 30px;
              padding: 60px;
              text-align: center;
              color: white;
            }
            
            .top-header-text {
              padding: 55px 100px;
              cursor: default;
            }
            
            .top-header-text h1 {
              margin: 0 auto;
            }
            
            @media screen and (max-width: 1000px) {
              .top-header-text {
                padding: 53px 0;
                font-size: 25px;
              }
            }
            
            @media screen and (max-width: 770px) {
              .top-header-text {
                padding: 50px 0;
                font-size: 22px;
              }
            }
            
            @media screen and (max-width: 550px) {
              .top-header-text {
                padding: 22px 0;
                font-size: 18px;
              }
         </style>
        <div class="top-header">
          <div class="top-header-text">
            <h1>Watch Unlimited Movie, Anime Series, TV Series, and More.</h1>
            <p>Ready to Watch Anywhere and Anytime.</p>
          </div>
        </div>
         `;
  }
}
customElements.define("top-jumbotron", TopJumbotron);
