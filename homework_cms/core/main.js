
function top_menu_setting() {
  
    add_top_menu_press_listeners();
    
    tmbadd.addEventListener('mousedown', create_new_tab);
    
    set_current_tab_on_default();
}



function side_bar_setting() {
    
    display_side_bar();
    
    add_side_bar_press_listeners();
}



function scroll_handler() {
  
    if (edit_mode == true) {
      scroll_side_bar();
    }
}



function resize_handler() {
  
    min_screen_width_determination();
    
    size_top_menu();
    
    size_side_bar();
}



function load_handler() {
  
    top_menu_setting();
    
    side_bar_setting();
  
    resize_handler();
    
}



window.addEventListener('load', load_handler);
window.addEventListener('resize', resize_handler);
window.addEventListener('scroll', scroll_handler);
