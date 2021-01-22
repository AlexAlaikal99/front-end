class MyCustomComponent extends HTMLElement{
        constructor() {
          super(); 
          let fatoni = document.querySelector('#ElementCustom')
          let fatoniHTML = fatoni.content.cloneNode(true);
          let shadowdom = this.attachShadow({mode:'open'});
          shadowdom.appendChild(templateHTML)
        }
    }    
   customElements.define("alaikal",MyCustomComponent) 