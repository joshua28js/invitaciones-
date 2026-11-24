// bootstrap.js - version ligera para que no marque error
console.log("✅ bootstrap.js cargado correctamente");
(function(){
  if (typeof window.bootstrap === "undefined") {
    window.bootstrap = {
      Modal: function(){},
      Tooltip: function(){},
      Collapse: function(){},
      Dropdown: function(){},
      Carousel: function(){}
    };
  }
  document.addEventListener("click", function(e){
    document.querySelectorAll(".dropdown-menu.show").forEach(function(menu){
      if(!menu.parentElement.contains(e.target)){
        menu.classList.remove("show");
      }
    });
  });
  document.querySelectorAll("[data-bs-toggle='collapse']").forEach(function(btn){
    btn.addEventListener("click", function(){
      let target = document.querySelector(btn.getAttribute("data-bs-target"));
      if(target) target.classList.toggle("show");
    });
  });
})();