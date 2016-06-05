
function in_array(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) {
            return true;
        }
    }
    return false;
}



function set_correlation() {
  
    if (min_screen_width > document.documentElement.clientWidth) {
        
        correlation = min_screen_width - document.documentElement.clientWidth;
        
        wrapper.style.width = min_screen_width + 'px';
        
    } else {
        
        correlation = 0;
        
        wrapper.removeAttribute('style');
    }
}



function min_screen_width_determination() {
    
    function _header() {
        
        var max_element_width = 0;
        
        var buttons = document.getElementById('top_menu').getElementsByClassName('button');
        
        for (var i = 0; i < buttons.length - 2; i++) {
          
            if (buttons[i].offsetWidth > max_element_width) {
                max_element_width = buttons[i].offsetWidth;
            }
        }
        
        return max_element_width + 370;
    }
    
    min_screen_width = 800;
    
    set_correlation();
}









