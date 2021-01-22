function totalan(){
    let harga = document.getElementById('harga').value;
    let beli = document.getElementById('beli').value;
    let total = parseInt(harga)*parseInt(beli);
        const divElement = document.querySelector('.alex');
          let alexalaikal = document.createElement("h2");
          alexalaikal.innerText = "PEMBELIAN OBAT TOTAL : "+total+"  RUPIAH";
          const shadowRoot = divElement.attachShadow({mode: "open"});
          shadowRoot.appendChild(alexalaikal);
        console.log(divElement);
    }
 