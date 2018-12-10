 function proper_position() {
    var dwarf = document.getElementById("dwarfid");   
    var head = document.getElementById("headid");
    var beard = document.getElementById("beardid");
    var shirt = document.getElementById("shirtid");
    var trousers = document.getElementById("trousersid");
    var shoes = document.getElementById("shoesid");
    var weapon = document.getElementById("weapon");
    var minigun = document.getElementById("minigun");
    dwarf.style.top = 'auto';
    dwarf.style.bottom = '100px';
    head.style.top = 'auto';
    head.style.bottom = '320px';
    beard.style.top = 'auto';
    beard.style.bottom = '260px';
    shirt.style.top = 'auto';
    shirt.style.bottom = '190px';
    trousers.style.top = 'auto';
    trousers.style.bottom = '130px';
    shoes.style.top = 'auto';
    shoes.style.bottom = '100px';
    weapon.style.top = 'auto';
    weapon.style.bottom = '190px';
    minigun.style.top = 'auto';
    minigun.style.bottom = '100px';
    }
  
    function reset_jump_dwarf_shoes() {
      var dwarf = document.getElementById("dwarfid");
      var shoes = document.getElementById("shoesid");
        dwarf.classList.remove('jump_dwarf_shoes');
        shoes.classList.remove('jump_dwarf_shoes');
  }

    function reset_jump_head() {
      var head = document.getElementById("headid");
        head.classList.remove('jump_head');
    }
    function reset_jump_beard() {
      var beard = document.getElementById("beardid");
        beard.classList.remove('jump_beard');
    }
    function reset_jump_shirt() {
      var shirt = document.getElementById("shirtid");
        shirt.classList.remove('jump_shirt');
    }
    function reset_jump_trousers() {
      var trousers = document.getElementById("trousersid");
        trousers.classList.remove('jump_trousers');
    }
    function reset_jump_weapon() {
      var weapon = document.getElementById("weapon");
        weapon.classList.remove('jump_weapon');
    }

    document.onkeydown = function (e) {
      var dwarf = document.getElementById("dwarfid");   
      var head = document.getElementById("headid");
      var beard = document.getElementById("beardid");
      var shirt = document.getElementById("shirtid");
      var trousers = document.getElementById("trousersid");
      var shoes = document.getElementById("shoesid");
      var weapon = document.getElementById("weapon");
      
      var left_pos_d = dwarf.offsetLeft;
      var left_pos_h = head.offsetLeft;
      var left_pos_b = beard.offsetLeft;
      var left_pos_shirt = shirt.offsetLeft;
      var left_pos_t = trousers.offsetLeft;
      var left_pos_shoes = shoes.offsetLeft;
      var left_pos_w = weapon.offsetLeft;
        if (e.keyCode == '38') {
            dwarf.classList.add('jump_dwarf_shoes');
            shoes.classList.add('jump_dwarf_shoes');
            head.classList.add('jump_head');
            beard.classList.add('jump_beard');
            shirt.classList.add('jump_shirt');
            trousers.classList.add('jump_trousers');
            weapon.classList.add('jump_weapon');
            setTimeout(reset_jump_dwarf_shoes, 1005);
            setTimeout(reset_jump_head, 1005);
            setTimeout(reset_jump_beard, 1005);
            setTimeout(reset_jump_shirt, 1005);
            setTimeout(reset_jump_trousers, 1005);
            setTimeout(reset_jump_weapon, 1005);
        } else if (e.keyCode == '37') {
          dwarf.style.left = (left_pos_d) - 10 + 'px';
          head.style.left = (left_pos_h) - 10 + 'px';
          beard.style.left = (left_pos_b) - 10 + 'px';
          shirt.style.left = (left_pos_shirt) - 10 + 'px';
          trousers.style.left = (left_pos_t) - 10 + 'px';
          shoes.style.left = (left_pos_shoes) - 10 + 'px';
          weapon.style.left = (left_pos_w) - 10 + 'px';
        } else if (e.keyCode == '39') {
          var left_pos_d = dwarf.offsetLeft;
          dwarf.style.left = (left_pos_d) + 10 + 'px';
          head.style.left = (left_pos_h) + 10 + 'px';
          beard.style.left = (left_pos_b) + 10 + 'px';
          shirt.style.left = (left_pos_shirt) + 10 + 'px';
          trousers.style.left = (left_pos_t) + 10 + 'px';
          shoes.style.left = (left_pos_shoes) + 10 + 'px';
          weapon.style.left = (left_pos_w) + 10 + 'px';
        }
    };
   
    