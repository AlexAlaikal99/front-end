class ImageFigure extends HTMLElement {
 
 
 connectedCallback() {
   this.src = this.getAttribute("src") || null;
   this.alt = this.getAttribute("alt") || null;
   this.caption = this.getAttribute("caption") || null;
   this.render();
 }
 
 
 render() {
   this.innerHTML = `
     <style>
       figure {
         border: 0px #c0c0c0 solid;
         display: flex;
         flex-flow: column;
         padding: 5px;
         max-width: 220px;
         margin: auto;
         margin-top: 2%;
       }
 
 
       figure > img {
         max-width: 250px;
       }
 
 
       figure > figcaption {
         background-color: #222;
         color: #00ff00;
         padding: 3px;
         text-align: center;
       }
     </style>
 
 
     <figure>
       <img src="${this.src}"
           alt="${this.alt}">
       <figcaption>${this.caption}</figcaption>
     </figure>
   `;
 }
 
 
 attributeChangedCallback(name, oldValue, newValue) {
   this[name] = newValue;
   this.render();
 }
 
 
 static get observedAttributes() {
   return ["caption"];
 }
}
 
 
customElements.define("image-figure", ImageFigure);