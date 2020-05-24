"use strict";
let dialogToggler=document.querySelectorAll('.s-dialog-toggle');
dialogToggler.forEach(element=>{
    element.addEventListener('click', e=>{
       let  targetData=e.target.dataset;
       let targetId=targetData.target;
       const dialog=document.querySelector(targetId);
       dialog.classList.add('s-show');
      
    });
   
});

let dialog=document.querySelectorAll('.s-dialog');
dialog.forEach(dialog=>{
    dialog.addEventListener('click', e=>{
        if(dialog.classList.contains('persist')){
            let childElement=dialog.children[0]
            e.stopPropagation();
        }
        if(e.target.classList.contains('s-dialog-container') || e.target.classList.contains('s-dialog-action')){
            e.stopPropagation();
        }
        else if(e.target.classList.contains('s-dialog') || e.target.classList.contains('s-btn')){
            console.log('no',e)
            dialog.classList.remove('s-show');
        }
    });
});

let test=document.querySelector('#agree');
test.addEventListener('click', e=>{
    alert(12)
});


//drawer
let drawerToggler=document.querySelectorAll('.drawer');
let navigationDrawer =document.querySelector('.s-drawer')
let body = document.querySelector('body')
drawerToggler.forEach(element=>{
    element.addEventListener('click', e=>{
        e.preventDefault();
        console.log('clicjed')
        let dataTarget=element.dataset.target;
        let direction = element.dataset.direction;
        let drawer=document.querySelector(dataTarget);
        //let style = window.getComputedStyle(drawer, null).getPropertyValue("transform");

        let style = window.getComputedStyle(drawer);
        let matrix = new WebKitCSSMatrix(style.webkitTransform);
        //console.log('translateX: ', matrix.m41);

        console.log(matrix.isIdentity);
        if(matrix.isIdentity==true){
            slide(drawer,direction, 0)
        }
        else{
            slide(drawer,direction, 1) 
        }
        //close drawer when clicked
        drawer.addEventListener('click', e=>{
            let target = e.target
            if (target.classList.contains('s-drawer-container')){
                slide(drawer,direction, 0)
            }
            else{
               e.stopPropagation()
            }
        })
        
    });
});

function slide(elem, direction, payload) {
    if (direction == 'left'){
        if(payload == 0){
            elem.style.transition='1s ease';
            elem.style.transform='translate(-100%,0)';  
            body.style.overflow='hidden'
        }
        else{
            elem.style.transition='1s ease';
            elem.style.transform='translate(0)';
            body.style.overflow='hidden'
        }
    }

    if (direction == 'top-left'){
        if(payload == 0){
            elem.style.transform='1s ease';
            elem.style.transform='translate(-100%,-100%)';  
            body.style.overflow='auto'
        }
        else{
            elem.style.transition='1s ease';
            elem.style.transform='translate(0)';
            body.style.overflow='hidden'
        }
    }
}