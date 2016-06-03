
var edit_mode = false;



function size_side_bar() {
    
    function size_static() {
        
        var text_containers = document.getElementById('side_bar').getElementsByClassName('text_container');
        
        for (var i = 0; i < text_containers.length; i++) {
            text_containers[i].style.marginLeft = (140 - text_containers[i].offsetWidth) / 2 + 'px';
        }
        
        var button_wrappers = document.getElementById('side_bar').getElementsByClassName('button_wrapper');
        
        for (var i = 0; i < button_wrappers.length; i++) {
            button_wrappers[i].style.left = document.documentElement.clientWidth - button_wrappers[i].offsetWidth - 21 + 'px';
        }
    }
    
    
    function vertical_sizing() {
        
        var view_mode_buttons = document.getElementById('side_bar').getElementsByClassName('view_mode');
        var edit_mode_buttons = document.getElementById('side_bar').getElementsByClassName('edit_mode');
        
        default_top_space = 38;
        
        view_mode_buttons[0].style.top = default_top_space + 'px';
        
        space_step = Math.round((document.documentElement.clientHeight - 370) / 6);
        
        current_top_space = default_top_space;
        
        for (var i = edit_mode_buttons.length - 1; i >= 0; i--) {
            
            edit_mode_buttons[i].style.top = current_top_space + 'px';
            
            current_top_space = current_top_space + 40 + space_step;
        }
        
        
    }
    
    
    size_static();
    
    vertical_sizing();
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



function enable_edit_mode(e) {
    
    if (e.which == 1) {
        
        edit_mode = true;
        
        display_side_bar();
    }
}



function enable_view_mode(e) {
    
    if (e.which == 1) {
        
        edit_mode = false;
        
        display_side_bar();
    }
}



function add_side_bar_press_listeners() {
    
    edit.getElementsByClassName('button_container')[0].addEventListener('mousedown', enable_edit_mode);
    
    view.getElementsByClassName('button_container')[0].addEventListener('mousedown', enable_view_mode);
}