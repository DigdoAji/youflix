class WebFooter extends HTMLElement {
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

         :host {
            display: block;
         }

        p {
            padding: 30px;
            margin: 16px 0 0;
            color: white;
            background-color: #363636;
            border-top: 2px solid rgba(255, 255, 255, 0.4);
            text-align: right;
            font-weight: bold;
         }
         </style>
         <p>Copyright &copy;2022 YOUFLIX</p>
         `;
  }
}
customElements.define("web-footer", WebFooter);
