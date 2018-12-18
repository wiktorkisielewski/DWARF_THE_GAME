 function proper_position() {
     dwarf = document.getElementById("dwarfid");   
     head = document.getElementById("headid");
     beard = document.getElementById("beardid");
     shirt = document.getElementById("shirtid");
     trousers = document.getElementById("trousersid");
     shoes = document.getElementById("shoesid");
     weapon = document.getElementById("weapon");
     fire = document.getElementById("fireid");
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
    fire.style.top = 'auto';
    fire.style.bottom = '215px';
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
    
    function reset_jump_shot() {
      var fire = document.getElementById("fireid");
        fire.classList.remove('jump_shot');
    }

    function interval(func, wait, times){
      var interv = function(w, t){
          return function(){
              if(typeof t === "undefined" || t-- > 0){
                  setTimeout(interv, w);
                  try{
                      func.call(null);
                  }
                  catch(e){
                      t = 0;
                      throw e.toString();
                  }
              }
          };
      }(wait, times);
    setTimeout(interv, wait);
  }; 

    document.onkeydown = function (e) {
      
      
      

      function move_left() {
          var left_pos_d = dwarf.offsetLeft;
          var left_pos_h = head.offsetLeft;
          var left_pos_b = beard.offsetLeft;
          var left_pos_shirt = shirt.offsetLeft;
          var left_pos_t = trousers.offsetLeft;
          var left_pos_shoes = shoes.offsetLeft;
          var left_pos_w = weapon.offsetLeft;
          var left_pos_shot = fire.offsetLeft;
            dwarf.style.left = (left_pos_d) - 1 + 'px';
            head.style.left = (left_pos_h) - 1 + 'px';
            beard.style.left = (left_pos_b) - 1 + 'px';
            shirt.style.left = (left_pos_shirt) - 1 + 'px';
            trousers.style.left = (left_pos_t) - 1 + 'px';
            shoes.style.left = (left_pos_shoes) - 1 + 'px';
            weapon.style.left = (left_pos_w) - 1 + 'px';
            fire.style.left = (left_pos_shot) - 1 + 'px';
      }

      function move_right() {
        var left_pos_d = dwarf.offsetLeft;
        var left_pos_h = head.offsetLeft;
        var left_pos_b = beard.offsetLeft;
        var left_pos_shirt = shirt.offsetLeft;
        var left_pos_t = trousers.offsetLeft;
        var left_pos_shoes = shoes.offsetLeft;
        var left_pos_w = weapon.offsetLeft;
        var left_pos_shot = fire.offsetLeft;
          dwarf.style.left = (left_pos_d) + 1 + 'px';
          head.style.left = (left_pos_h) + 1 + 'px';
          beard.style.left = (left_pos_b) + 1 + 'px';
          shirt.style.left = (left_pos_shirt) + 1 + 'px';
          trousers.style.left = (left_pos_t) + 1 + 'px';
          shoes.style.left = (left_pos_shoes) + 1 + 'px';
          weapon.style.left = (left_pos_w) + 1 + 'px';
          fire.style.left = (left_pos_shot) + 1 + 'px';
    }

      function move_left_inter(){
        interval(function() {
          move_left();          
        }, 10, 10);
      }
      function move_right_inter(){
        interval(function() {
          move_right();          
        }, 10, 10);
      }
       
      

      function blaster_shot() {
        var fire = document.getElementById("fireid");
        fire.classList.add('blaster_shot');
      }
      function flamethrower_shot() {
        var fire = document.getElementById("fireid");
        fire.classList.add('flamethrower_shot');
      }

      function check_weapon() {
        if (weapon.classList.contains('blaster')) {
          blaster_shot();
        }
        else if (weapon.classList.contains('flamethrower')) {
          var fire = document.getElementById("fireid");
          fire.style.bottom = '190px';
          flamethrower_shot();
        }
      }
      
        if (e.keyCode == '38') {
            dwarf.classList.add('jump_dwarf_shoes');
            shoes.classList.add('jump_dwarf_shoes');
            head.classList.add('jump_head');
            beard.classList.add('jump_beard');
            shirt.classList.add('jump_shirt');
            trousers.classList.add('jump_trousers');
            weapon.classList.add('jump_weapon');
            fire.classList.add('jump_shot');
            setTimeout(reset_jump_dwarf_shoes, 1005);
            setTimeout(reset_jump_head, 1005);
            setTimeout(reset_jump_beard, 1005);
            setTimeout(reset_jump_shirt, 1005);
            setTimeout(reset_jump_trousers, 1005);
            setTimeout(reset_jump_weapon, 1005);
            setTimeout(reset_jump_shot, 1005);
        } else if (e.keyCode == '37') {
          move_left_inter();
        } else if (e.keyCode == '39') {
          move_right_inter();
        } else if (e.keyCode == '32') {
            check_weapon();
        }
    };
   
    document.onkeyup = function(e) {
      if (e.keyCode == '32') {
        var fire = document.getElementById('fireid');
        fire.className = "";
        fire.classList.add("empty_fire");
      }
    }
    
    function ground_move(){
      var ground = document.getElementById('groundid');
      var ground_2 = document.getElementById('groundid_2');
      var screen_width = (window.screen.width * -1);
      setInterval(function() {
        var left_pos_g = ground.offsetLeft;
        var left_pos_g2 = ground_2.offsetLeft;
        ground.style.left = (left_pos_g) - 1 + 'px';
        ground_2.style.left = (left_pos_g2) - 1 + 'px';
        if (left_pos_g == screen_width) {
          ground.style.left = "100vw";
        } else if (left_pos_g2 == screen_width) {
          ground_2.style.left = "100vw";
        }
      }, 5);
    }

  /*    
    function spawn_trees() {
        for (i = 0; i <= 100;i++) {
        const tree = document.createElement('div');
        number = i;
          tree.classList.add('tree');
          tree.id = 'tree' + number;
          document.body.appendChild(tree);
        }
    }

    function pick_tree() {
      var random_number = Math.floor(Math.random() * (100 - 0 + 1));
      var random_tree = 'tree' + random_number;
      chosen_tree = document.getElementById(random_tree);
      console.log(chosen_tree);
    }

    function move_tree() {
      setInterval(function() {
        var position = chosen_tree.offsetLeft;
        chosen_tree.style.left = position - 1 + 'px';
      }, 5)
    }

    function generate_tree() {
      pick_tree();
      move_tree();
    }

    random_time = Math.floor(Math.random() * (1200 - 1100 + 1) + 1100);

    spawn_trees();
    setInterval(function() {
      generate_tree();
    }, random_time)
    
  */  

  /*
 const tree = document.createElement('div');
    tree.classList.add('tree');
    tree.id = 'tree' + 1;
  document.body.appendChild(tree);

  const tree_2 = document.createElement('div');
    tree_2.classList.add('tree');
    tree_2.id = 'tree' + 2;
  document.body.appendChild(tree_2);

  const tree_3 = document.createElement('div');
    tree_3.classList.add('tree');
    tree_3.id = 'tree' + 3;
  document.body.appendChild(tree_3);

  random_time = Math.floor(Math.random() * (7000 - 1500 + 1) + 1500);


  function move_tree() {
    setInterval(function() {
      var position = tree.offsetLeft;
      tree.style.left = position - 1 + 'px';
    }, 5)
}

function move_duck() {
  setInterval(function() {
    var position = duck.offsetLeft;
    duck.style.left = position - 1 + 'px';
  }, 5)
}

function move_legs() {
  setInterval(function() {
    var position = legs.offsetLeft;
    legs.style.left = position - 1 + 'px';
  }, 5)
}

function move_tree_2() {
  setInterval(function() {
    var position_2 = tree_2.offsetLeft;
    tree_2.style.left = position_2 - 1 + 'px';
  }, 5)
}

function move_tree_3() {
  setInterval(function() {
    var position_3 = tree_3.offsetLeft;
    tree_3.style.left = position_3 - 1 + 'px';
  }, 5)
}

const duck = document.createElement('div');
    duck.classList.add('duck');
    duck.id = 'duck' + 1;
  document.body.appendChild(duck);

  const duck_2 = document.createElement('div');
    duck_2.classList.add('duck');
    duck_2.id = 'duck' + 2;
  document.body.appendChild(duck_2);

  const duck_3 = document.createElement('div');
    duck_3.classList.add('duck');
    duck_3.id = 'duck' + 3;
  document.body.appendChild(duck_3);

  const legs = document.createElement('div');
    legs.classList.add('legs');
    legs.id = "legs";
  document.body.appendChild(legs);
  */

  
  function spawn_tree() {
      const obstacle = document.createElement('div');
      const tree = document.createElement('div');
      const bird = document.createElement('div');
      const legs = document.createElement('div');
        obstacle.id = "obs" + 1;
        obstacle.classList.add('obs');
        tree.classList.add('tree');
        bird.classList.add('duck');
        legs.classList.add('legs');
      document.body.appendChild(obstacle);
      obstacle.appendChild(bird);
      obstacle.appendChild(legs);
      obstacle.appendChild(tree);
      
      setInterval(function () {
        var obstacle_left = obstacle.offsetLeft;
        obstacle.style.left = obstacle_left - 1 + 'px';
      }, 5)
    }

    function spawn_tree_bad() {
      const obstacle = document.createElement('div');
      const tree = document.createElement('div');
      const bird = document.createElement('div');
      const legs = document.createElement('div');
        tree.id = 'treeid';
        obstacle.id = "obs" + 2;
        obstacle.classList.add('obs');
        tree.classList.add('tree');
        bird.classList.add('duck_blue');
        legs.classList.add('legs_blue');
      document.body.appendChild(obstacle);
      obstacle.appendChild(bird);
      obstacle.appendChild(legs);
      obstacle.appendChild(tree);
      
      setInterval(function () {
        var obstacle_left = obstacle.offsetLeft;
        obstacle.style.left = obstacle_left - 1 + 'px';
      }, 5)
    }

    function move_tree() {
      var tree = document.getElementById('treeid');
      var obs_left = obs.offsetLeft;
      var obs_bad_left = obs.offsetLeft;
      setInterval(function() {
        tree.style.left = tree_left - 1 + 'px';
      }, 5)
    }