
function size_side_bar() {
    
    var side_bar_button = side_bar.getElementsByClassName('button');
    
    side_bar_button[0].style.left = document.documentElement.clientWidth - side_bar_button[0].offsetWidth + 'px';
    side_bar_button[1].style.left = document.documentElement.clientWidth - side_bar_button[0].offsetWidth + 'px';
    side_bar_button[2].style.left = document.documentElement.clientWidth - side_bar_button[0].offsetWidth + 'px';
}