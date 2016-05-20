
function top_menu_setting() {
  
    add_top_menu_press_listeners();
    
    tmbadd.addEventListener('mousedown', create_new_tab);
}



function resize_handler() {
    
    size_top_menu();
    
    top_menu_setting();
}



function load_handler() {
  
    resize_handler();
    
}



window.addEventListener('load', load_handler);
window.addEventListener('resize', resize_handler);
