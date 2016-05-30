
function size_side_bar() {
    
    var side_bar_button = side_bar.getElementsByClassName('button')[0];
    
    side_bar_button.style.left = document.documentElement.clientWidth - side_bar_button.offsetWidth + 'px';
}