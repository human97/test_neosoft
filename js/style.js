window.onload = function(){
    var menuStyle=getComputedStyle(menu);
    openMenu.onclick=function(){
        if(menuStyle.display=='none'){
          menu.classList.add('active');
          this.innerHTML='Close Menu';  
        } else{
            menu.classList.remove('active');
            this.innerHTML='Open Menu';  
          }
    }
}