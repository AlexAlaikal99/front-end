function nama_fungsi()    
{
 const kodeoption=document.getElementById("pilihan").options[document.getElementById("pilihan").selectedIndex]
 if (kodeoption.value=="1"){
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</th> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>001</td> <td>KOMIX</td> <td>5000 K</td></tr></table>";
 }
 else if (kodeoption.value=="2"){
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</th> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>002</td> <td>BODREX</td> <td>3000 K</td></tr></table>";
 }
 else if (kodeoption.value=="3"){
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</th> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>003</td> <td>DIAPET</td> <td>5000 K</td></tr></table>";
 }
 else if (kodeoption.value=="4"){
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</th> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>004</td> <td>MIXAGRIP</td> <td>3000 K</td></tr></table>";
 }
else if (kodeoption.value=="5"){
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</th> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>005</td> <td>HANDSATY</td> <td>33000 K</td></tr></table>";
 }
 else {
     let hasil = document.getElementById("hasil-output");
     hasil.innerHTML="<table><tr><th>KODE</tH> <th>NAMA OBAT</th> <th>HARGA</th></tr> <tr><td>006</td> <td>TONYCUMBAYER</td> <td>20000 K</td></tr></table>";
 }
}