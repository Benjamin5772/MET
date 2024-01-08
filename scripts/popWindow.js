document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('guidance-modal');
    var btn = document.querySelector('.menu-button[href="#guidance"]');
    var span = document.getElementsByClassName("close-btn")[0];
    var modalContent = modal.querySelector('.modal-content');

// 显示弹出窗口
btn.onclick = function() {
modalContent.classList.add('show-modal');  
modalContent.classList.remove('hide-modal');

modal.classList.add('fade-in');  
modal.classList.remove('fade-out');

modal.style.display = "block";
}

 // 关闭弹出窗口
 span.onclick = function() {
 modalContent.classList.remove('show-modal');  
 modalContent.classList.add('hide-modal');

 modal.classList.remove('fade-in');  
 modal.classList.add('fade-out');

 setTimeout(function() {
   modal.style.display = "none";
}, 300); 
}


    // 如果用户点击模态窗口外部，则关闭它
    window.onclick = function(event) {
        if (event.target == modal) {
            modalContent.classList.remove('show-modal');  
            modalContent.classList.add('hide-modal');  
            
            modal.classList.remove('fade-in');  
            modal.classList.add('fade-out');
            setTimeout(function() {
                modal.style.display = "none";
            }, 300); 
        }
    }
});