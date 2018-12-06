(function () {
    document.addEventListener('keypress', function (e) {
        if (e.keyCode == '32') {
            jump();
        }
    }, false);

    function jump() {
        var dwarf = document.getElementById("dwarfid");   
        var pos = dwarf.offsetTop;
        var id = setInterval(frame, 100);
        function frame() {
          if (pos == 10) {
            clearInterval(id);
          } else {
            pos--; 
            dwarf.style.top = pos + 'px'; 
          }
        }
      }
      
}());