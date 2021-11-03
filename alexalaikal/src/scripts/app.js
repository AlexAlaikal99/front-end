function Function() {
  // Declare variables
  var input, filter, div, carddiv, name, i;
  input = document.getElementById("BankSearch");
  filter = input.value.toUpperCase();

  div = document.getElementById("Bank-Approval");
  carddiv = div.getElementsByClassName("card"); //** Select by class

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < carddiv.length; i++) {
    //** Select specific parent element. innerText will return text in child h1.
    name = carddiv[i].querySelector("[id='Name']").innerText;
      if (name.toUpperCase().indexOf(filter) > -1) {
        carddiv[i].style.display = "block";
      } else {
        carddiv[i].style.display = "none";
      }
    }
  };