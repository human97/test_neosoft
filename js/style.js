window.onload = function(){
    let menuStyle=getComputedStyle(menu);
    openMenu=document.getElementById('openMenu');
    openMenu.onclick=function(){
        if(menuStyle.display=='none'){
          menu.classList.add('active');
          this.textContent='Close Menu';  
        } else{
            menu.classList.remove('active');
            this.textContent='Open Menu';  
          }
    }
}