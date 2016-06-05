

function expand() {
    
    function roller(current_button, current_margin, counter) {
      
        function starter() {
            
            roller(current_button, current_margin, counter);
        }
        
        
        if (counter >= current_margin) {
            
            if (current_button == document.getElementById('side_bar').getElementsByClassName('edit_mode')[0]) {
                return edit_mode_initialization();
            } else {
                return;
            }
        }
        
        switch (true) {
            case (counter < current_margin - 50):
                counter = counter + 10;
                break;
            case (counter >= current_margin - 50):
                counter = counter + 1;
                break;
        }
        
        current_button.style.top = counter + 'px';
        
        var roller_timer = setTimeout(starter, 4);
    }
    
    var buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
    
    for (var i = 0; i < buttons.length - 1; i++) {
      
        var top_margin = buttons[i].style.top.substring(0, buttons[i].style.top.length - 2);
        
        roller(buttons[i], top_margin, 38);
    }
}



function roll_up() {
  
    function roller(current_button, current_margin) {
      
        function starter() {
            
            roller(current_button, current_margin);
        }
        
        
        if (current_margin <= 38) {
            
            if (current_button == document.getElementById('side_bar').getElementsByClassName('edit_mode')[0]) {
                return view_mode_initialization();
            } else {
                return;
            }
        }
        
        switch (true) {
            case (current_margin > 50):
                current_margin = current_margin - 10;
                break;
            case (current_margin <= 50):
                current_margin = current_margin - 1;
                break;
        }
        
        current_button.style.top = current_margin + 'px';
        
        var roller_timer = setTimeout(starter, 4);
    }
    
    
    var buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
    
    for (var i = 0; i < buttons.length - 1; i++) {
      
        var top_margin = buttons[i].style.top.substring(0, buttons[i].style.top.length - 2);
        
        roller(buttons[i], top_margin);
    }
}



function scroll_top() {
  
    function slow_scroll() {
      
        if (current_y_scroll <= 0) {
            
            return roll_up();
        }
        
        switch (true) {
            case (current_y_scroll > 1000):
                current_y_scroll = current_y_scroll - 1000;
                break;
            case (current_y_scroll <= 1000):
                current_y_scroll = current_y_scroll - 10;
                break;;
        }
        
        window.scrollTo(current_x_scroll, current_y_scroll);
        
        var scroll_timer = setTimeout(slow_scroll, 7);
    }
    
    
    var current_y_scroll = window.pageYOffset;
    var current_x_scroll = window.pageXOffset;
    
    slow_scroll();
}



function size_side_bar() {
    
    function size_static() {
        
        var text_containers = document.getElementById('side_bar').getElementsByClassName('text_container');
        
        for (var i = 0; i < text_containers.length; i++) {
            text_containers[i].style.marginLeft = (140 - text_containers[i].offsetWidth) / 2 + 'px';
        }
        
        var button_wrappers = document.getElementById('side_bar').getElementsByClassName('button_wrapper');
        
        for (var i = 0; i < button_wrappers.length; i++) {
            button_wrappers[i].style.left = document.documentElement.clientWidth - button_wrappers[i].offsetWidth - 21 + correlation + 'px';
        }
    }
    
    
    function vertical_sizing() {
        
        var view_mode_buttons = document.getElementById('side_bar').getElementsByClassName('view_mode');
        var edit_mode_buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
        
        var default_top_space = 38;
        
        view_mode_buttons[0].style.top = default_top_space + 'px';
        
        var space_step = Math.round((document.documentElement.clientHeight - 370) / 6);
        
        if (space_step < 20) {
            
            space_step = 20;
        }
        
        var current_top_space = default_top_space + window.pageYOffset;
        
        for (var i = edit_mode_buttons.length - 1; i >= 0; i--) {
            
            edit_mode_buttons[i].style.top = current_top_space + 'px';
            
            current_top_space = current_top_space + 40 + space_step;
        }
        
        
    }
    
    scroll_block = true;
    
    size_static();
    
    vertical_sizing();
    
    scroll_block = false;
}



function display_side_bar() {
  
    var edit_mode_buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
    var view_mode_buttons = document.getElementById('side_bar').getElementsByClassName('view_mode');
    
    if (edit_mode == true) {
        
        for (var i = 0; i < edit_mode_buttons.length; i++) {
            edit_mode_buttons[i].style.display = 'block';
        }
        
        for (var i = 0; i < view_mode_buttons.length; i++) {
            view_mode_buttons[i].style.display = 'none';
        }
        
    } else {
        
        for (var i = 0; i < edit_mode_buttons.length; i++) {
            edit_mode_buttons[i].style.display = 'none';
        }
        
        for (var i = 0; i < view_mode_buttons.length; i++) {
            view_mode_buttons[i].style.display = 'block';
        }
        
    }
    
    size_side_bar();
}



function edit_mode_initialization() {
    
    scroll_block = false;
}



function enable_edit_mode(e) {
    
    if (e.which == 1) {
      
        edit_mode = true;
        
        display_side_bar();
        
        scroll_block = true;
        
        expand();
    }
}



function view_mode_initialization() {
    
    edit_mode = false;
    
    display_side_bar();
}



function enable_view_mode(e) {
    
    if (e.which == 1) {
        
        scroll_top();
        
        //scroll_top -> roll_up -> view_mode_initialization
    }
}



function add_side_bar_press_listeners() {
    
    edit.getElementsByClassName('button_container')[0].addEventListener('mousedown', enable_edit_mode);
    
    view.getElementsByClassName('button_container')[0].addEventListener('mousedown', enable_view_mode);
}



function scrolling(buttons, final_top_space, current_top_spaces, direction) {
  
    if (scroll_block == false) {
    
        if (scroll_session == 2) {
            
            var current_top_spaces = [];
            
            var space_step = Math.round((document.documentElement.clientHeight - 370) / 6);
        
            space_step = (space_step < 20) ? 20 : space_step;
            
            var final_top_space = 38 + window.pageYOffset;
            
            for (var i = buttons.length - 1; i >= 0; i--) {
                
                current_top_spaces[i] = +buttons[i].style.top.substring(0, buttons[i].style.top.length - 2);
            }
            
            var direction = (final_top_space > current_top_spaces[buttons.length - 1]) ? 1 : -1;
            
            scroll_session = 1;
        }
        
        if (final_top_space == current_top_spaces[buttons.length - 1]) {
            
            scroll_session = 0;
            
            return;
        }
        
        var distance = Math.abs(final_top_space - current_top_spaces[buttons.length - 1]);
        
        switch (true) {
          
            case (distance > document.documentElement.clientHeight * 2):
                distance = 1000 * direction;
                break;
            case (distance > 100):
                distance = 15 * direction;
                break;
            case (distance > 50):
                distance = 10 * direction;
                break;
            case (distance > 10):
                distance = 5 * direction;
                break;
            case (distance <= 10):
                distance = 1 * direction;
                break;
        }
        
        for (var i = 0; i < buttons.length; i++) {
            
            current_top_spaces[i] = current_top_spaces[i] + distance;
            
            buttons[i].style.top = current_top_spaces[i] + 'px';
        }
    }
    
    var scroll_timer = setTimeout(function() { scrolling(buttons, final_top_space, current_top_spaces, direction) }, 4);
    //scrolling(buttons, final_top_space, current_top_spaces, direction);
}



function scroll_side_bar() {
  
    if (scroll_session == 0) {
        
        var buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
        
        scroll_session = 2;
        
        scrolling(buttons);
    }
    
    if (scroll_session == 1) {
        
        scroll_session = 2;
    }
}


    


