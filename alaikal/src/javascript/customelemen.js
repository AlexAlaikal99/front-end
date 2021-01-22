class ImageFigured extends HTMLElement {
 
 connectedCallback() {
 
   this.innerHTML = `
     <kotaan>
            <h2>OBAT-OBATAN YANG TERSEDIA</h2>
            <hr color="#ff7700">
     </kotaan>
    <style>
        kotaan{
            color:#ff7700;
            text-align: center;
        }
    </style>
   `;
 }
}
 
customElements.define("kotak-kotaan", ImageFigured);