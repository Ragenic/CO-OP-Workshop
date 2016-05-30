
function top_menu_setting() {
  
    add_top_menu_press_listeners();
    
    tmbadd.addEventListener('mousedown', create_new_tab);
    
    set_current_tab_on_default();
}



function resize_handler() {
    
    size_top_menu();
    
    size_side_bar();
}



function load_handler() {
  
    top_menu_setting();
  
    resize_handler();
    
}



window.addEventListener('load', load_handler);
window.addEventListener('resize', resize_handler);
