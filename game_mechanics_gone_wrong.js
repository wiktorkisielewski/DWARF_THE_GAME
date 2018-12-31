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
            dwarf.style.left = (left_pos_d) - 2 + 'px';
            head.style.left = (left_pos_h) - 2 + 'px';
            beard.style.left = (left_pos_b) - 2 + 'px';
            shirt.style.left = (left_pos_shirt) - 2 + 'px';
            trousers.style.left = (left_pos_t) - 2 + 'px';
            shoes.style.left = (left_pos_shoes) - 2 + 'px';
            weapon.style.left = (left_pos_w) - 2 + 'px';
            fire.style.left = (left_pos_shot) - 2 + 'px';
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
          dwarf.style.left = (left_pos_d) + 2 + 'px';
          head.style.left = (left_pos_h) + 2 + 'px';
          beard.style.left = (left_pos_b) + 2 + 'px';
          shirt.style.left = (left_pos_shirt) + 2 + 'px';
          trousers.style.left = (left_pos_t) + 2 + 'px';
          shoes.style.left = (left_pos_shoes) + 2 + 'px';
          weapon.style.left = (left_pos_w) + 2 + 'px';
          fire.style.left = (left_pos_shot) + 2 + 'px';
    }

    function move_up() {
      var top_pos_d = dwarf.offsetTop;
      var top_pos_h = head.offsetTop;
      var top_pos_b = beard.offsetTop;
      var top_pos_shirt = shirt.offsetTop;
      var top_pos_t = trousers.offsetTop;
      var top_pos_shoes = shoes.offsetTop;
      var top_pos_w = weapon.offsetTop;
      var top_pos_shot = fire.offsetTop;
        dwarf.style.top = (top_pos_d) - 2 + 'px';
        head.style.top = (top_pos_h) - 2 + 'px';
        beard.style.top = (top_pos_b) - 2 + 'px';
        shirt.style.top = (top_pos_shirt) - 2 + 'px';
        trousers.style.top = (top_pos_t) - 2 + 'px';
        shoes.style.top = (top_pos_shoes) - 2 + 'px';
        weapon.style.top = (top_pos_w) - 2 + 'px';
        fire.style.top = (top_pos_shot) - 2 + 'px';
  }

  function move_down() {
    var top_pos_d = dwarf.offsetTop;
    var top_pos_h = head.offsetTop;
    var top_pos_b = beard.offsetTop;
    var top_pos_shirt = shirt.offsetTop;
    var top_pos_t = trousers.offsetTop;
    var top_pos_shoes = shoes.offsetTop;
    var top_pos_w = weapon.offsetTop;
    var top_pos_shot = fire.offsetTop;
      dwarf.style.top = (top_pos_d) + 2 + 'px';
      head.style.top = (top_pos_h) + 2 + 'px';
      beard.style.top = (top_pos_b) + 2 + 'px';
      shirt.style.top = (top_pos_shirt) + 2 + 'px';
      trousers.style.top = (top_pos_t) + 2 + 'px';
      shoes.style.top = (top_pos_shoes) + 2 + 'px';
      weapon.style.top = (top_pos_w) + 2 + 'px';
      fire.style.top = (top_pos_shot) + 2 + 'px';
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
      function move_up_inter(){
        interval(function() {
          move_up();          
        }, 0.5, 130);
      }

      function move_down_inter(){
        interval(function() {
          move_down();          
        }, 0.5, 130);
      }
      
      var jumper = 0;
      function jump() {
        if (jumper == 0) {
          jumper += 1;
          console.log(jumper);
          move_up_inter();
              setTimeout(function () {
                move_down_inter();
              }, 3000);
              setTimeout(function () {
                jumper -= 1;
                console.log(jumper);
              }, 5000);
        } else if (jumper != 0) {
          console.log('jumping');
        }

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
            jump();
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

 
  
  function spawn_tree() {
    for (i = 0; i >= 35; i++) {
      const obstacle = document.createElement('div');
      const tree = document.createElement('div');
      const bird = document.createElement('div');
      const legs = document.createElement('div');
        obstacle.id = "obs" + i;
        obstacle.classList.add('obs');
        tree.classList.add('tree');
        bird.classList.add('duck');
        legs.classList.add('legs');
      document.body.appendChild(obstacle);
      obstacle.appendChild(bird);
      obstacle.appendChild(legs);
      obstacle.appendChild(tree);
    }
    setInterval(function () {
      var obstacle_left = obstacle.offsetLeft;
      obstacle.style.left = obstacle_left - 1 + 'px';
    }, 5)

    setTimeout(function () {
      document.body.removeChild(obstacle);
    }, 8000)
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

      setTimeout(function () {
        document.body.removeChild(obstacle);
      }, 8000)
    }

    function move_tree() {
      var tree = document.getElementById('treeid');
      setInterval(function() {
        tree.style.left = tree_left - 1 + 'px';
      }, 5)
    }

    /* function hug_tree() {
      var tree = document.getElementById('obs1');
      var dwarf = document.getElementById('dwarfid');
      var tree_pos = tree.offsetLeft;
      var dwarf_pos = dwarf.offsetLeft;
      if (tree_pos <= dwarf_pos) {
          setInterval(function() {
            move_left();          
          }, 5);
        } else {
          console.log('no');
        }
    } 
    */


   function hug() {
    var obs1 = document.getElementById("obs" + 1);
    var dwarf = document.getElementById("dwarfid");
    var dwarf_pos = dwarf.offsetLeft;
    var obs_pos = obs1.offsetLeft;
    if (dwarf_pos == obs_pos) {
      move_left_inter();
    } else {
      console.log('no crash zone');
    }
  }

    

    