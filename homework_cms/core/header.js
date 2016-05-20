
function size_top_menu() {
      
    function size_static() {
        
        var top_menu_lines = document.getElementById('top_menu').getElementsByClassName('horizontal_line');
        for (var i = 0; i < top_menu_lines.length; i++) {
            top_menu_lines[i].style.width = document.documentElement.clientWidth - 245 + 'px';
        }
        
        tmbup.style.left = document.documentElement.clientWidth - 251 + 'px';
        tmbdown.style.left = document.documentElement.clientWidth - 242 + 'px';
    }
    
    
        function size_buttons() {
        
        var button_containers = document.getElementById('top_menu').getElementsByClassName('button_container');
        
        for (var i = 0; i < button_containers.length - 3; i++) {
            button_containers[i].style.width = button_containers[i].getElementsByClassName('button')[0].offsetWidth + 'px';
        }
    }
    
    
    function set_position() {
        
        var button_wrappers = document.getElementById('top_menu').getElementsByClassName('button_wrapper');
        
        var left_margin = 40;
        var top_margin = 40;
        var current_line = 1;
        
        function new_line() {
            
            left_margin = 40;
            current_line = current_line + 1;
        }
        
        
        for (var i = 0; i < button_wrappers.length - 2; i++) {
            
            var current_width = button_wrappers[i].getElementsByClassName('button_container')[0].offsetWidth;
          
            if (left_margin + current_width >= document.documentElement.clientWidth - 260) {
              
                new_line();
                
            } else if (i == button_wrappers.length - 4) {
              
                if (left_margin + current_width >= document.documentElement.clientWidth - 320) {
                  
                    new_line();
                }
            }
            
            button_wrappers[i].setAttribute('class', 'button_wrapper');
            button_wrappers[i].style.top = top_margin + 'px';
            button_wrappers[i].style.left = left_margin + 'px';
            button_wrappers[i].classList.add('line_' + current_line);
            left_margin = left_margin + current_width + 20;
            
        }
    }
    
    
    size_static();
    
    size_buttons();
    
    set_position();
}



function new_tab_id() {
  
    var tabs = document.getElementById('top_menu').getElementsByClassName('button_wrapper');
    var tabs_id = [];
    for (var i = 0; i < tabs.length - 3; i++) {
        tabs_id[i] = +tabs[i].id.substring(3);
    }
    var i = 1;
    while (true) {
        if (!in_array(i, tabs_id)) {
            return i;
        }
        i++;
    }
}



function create_new_tab() {
  
    var new_tab = document.createElement('div');
    new_tab.className = 'button_wrapper';
    new_tab.id = 'tmb' + new_tab_id();
    new_tab.innerHTML = '<div class="outshadow button_container" id="current_page"><div class="inshadow button"><div class="text_container">Task ' + new_tab.id.substring(3) + '</div></div></div>';
    
    top_menu.insertBefore(new_tab, tmbadd);
    
    tmbadd.getElementsByClassName('button_container')[0].removeAttribute('id');
    
    size_top_menu();
}



function pressed() {
  
    if (event.which == 1) {
        var buttons = document.getElementById('top_menu').getElementsByClassName('button_container');
        for (var i = 0; i < buttons.length - 2; i++) {
                buttons[i].removeAttribute('id');
        }
        this.id = 'current_page';
    }
}



function add_top_menu_press_listeners() {
        
    var top_menu_buttons = document.getElementsByClassName('button_container');
    for (var i = 0; i < top_menu_buttons.length - 2; i++) {
        top_menu_buttons[i].addEventListener('mousedown', pressed);
    }
}

