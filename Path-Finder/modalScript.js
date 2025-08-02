window.onclick = function(event) {
 var geniusSearchModel = document.getElementById("geniusSearchModel");
if (event.target == geniusSearchModel) {
    geniusSearchModel.style.display = "none";
}
}
function dismissSearchWindow(){
    var geniusSearchModel = document.getElementById("geniusSearchModel");
    geniusSearchModel.style.display = "none";
}

$(document).on(
    'keydown', function(event) {
      if (event.key == "Escape") {
        geniusSearchModel.style.display = "none";
      }
  });

  $(document).on(
    'keydown', function(event) {
      if (event.ctrlKey && event.which == "76") {
        const searchBox = document.getElementById("geniusSearch");
        geniusSearchModel.style.display = "block";
        searchBox.focus();
      }
  });