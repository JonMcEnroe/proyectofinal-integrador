function myFunction() {
  document.getElementById("menuColapsable").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.botonMenuChico')) {
      var dropdowns = document.getElementsByClassName("colapsableContenido");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }