/*'use strict';
//get all s-form/form 
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
function appendError(a){
    let errordiv = document.createElement("div");
    errordiv.innerHTML = "This field is required";
    errordiv.classList.add('errordiv');
    insertAfter(errordiv,  a);
    
    //check if errordiv already exist, if so set to display none
    let nextElement = a.nextElementSibling.nextElementSibling;
    console.log(nextElement, 'before removed')
        if(nextElement.classList.contains('errordiv')){
            nextElement.classList.add('none')
            nextElement.style.display ='none';
            console.log('ran remove')
        }
        else{
            console.log('else remove')
        }
}
function removeError(b){
    let nextElement = b.nextElementSibling;
    try{
        if(nextElement.classList.contains('errordiv')){
            nextElement.style.display ='none';
        }
    }
    catch{
        //
    }
    b.classList.remove('s-danger-outline');
}
let forms = document.querySelectorAll('.s-form');
forms.forEach( form =>{
    let formArray = Array.from(form);
    form.addEventListener('click', e=>{
        e.preventDefault();
        let target = e.target;
        if(target.classList.contains('s-form-btn')){
            let form = target.parentNode;
            let formElement = Array.from(form);
            formElement.forEach(element=>{
               if(element.classList.contains('s-required')){
                if(element.value === '' || element.value === null || element.value === undefined ){
                    appendError(element);
                };
               };
            });
        };
    });
    //on focusout
    for(let i =0; i <= formArray.length -1; i++){
        if(formArray[i].classList.contains('s-required')){
            formArray[i].addEventListener('focusout', ()=>{
                let val = formArray[i].value;
                if(val === '' || val == null){
                    appendError(formArray[i]);
                }
                else if(val !== '' || val !== null){
                    removeError(formArray[i]);
                };
            });
        }
    };
});

// alert 
let disAlert =document.querySelectorAll('.s-dismissable');
disAlert.forEach(element=>{
  element.addEventListener('click', e=>{
    let target=e.target;
    if(target.classList.contains('s-icon')){
        element.style.display='none';
    }
  });
});

//dropdown menue 
const toggle =document.querySelectorAll('.s-toolbar');
toggle.forEach(element=>{
    let elem = element;
    element.addEventListener('click', e=>{
        let target =e.target;
        if(target.classList.contains('triger')){
            let a =Array.from(element.children);
            let i =0;
           a.forEach( e=>{
               if(e.classList.contains('s-nav-container')){
                if(e.classList.contains('dropdown')){
                    e.classList.remove('dropdown');
                }
                else{
                    e.classList.add('dropdown')
                }
               }
               i++;
           })
        }
    });
})


const inputField = document.querySelectorAll('.s-input-field');
inputField.forEach(element=> {
    element.addEventListener('focusout', e=>{
        let target =e.target
        let label = target.nextSibling.nextSibling
        if(element.value === '' || element.value === undefined || element.value === null){
            label.classList.add('s-opasity-5');
            label.classList.remove('s-opasity-1-t0');

        }
        else{
            //set opasity to  .1 and top to 0
            label.classList.add('s-opasity-1-t0');
            label.classList.remove('s-opasity-5');
        }
    })
});

//password
const inputgroup= document.querySelectorAll('.s-input-group');
inputgroup.forEach(element=>{
    element.addEventListener('click', e=>{
        let target =e.target;
        if(target.classList.contains('s-input')){
            if(target.type === 'password'){
                let eye = target.nextElementSibling;
                target.addEventListener('keyup', ()=>{
                    if(target.value !== ''){
                        eye.style.cssText='visibility:visible';
                    }
                    else{
                        eye.style.cssText='visibility:hidden';
                    }
                    
                });
            }
        }
    });
});

const pwordtogl =document.querySelectorAll('.s-eye');
pwordtogl.forEach(element=>{
    element.addEventListener('click', e=>{
        let target = e.target;
        let container = e.target.closest('.s-input-group');
        let arr = container.childNodes;
        arr.forEach(item=>{
            if(item.type === 'password'){
                item.type='text';
                target.classList.remove('mdi-eye-outline')
                target.classList.add('mdi-eye-off-outline');
            }
            else if(item.type === 'text'){
                item.type='password';
                target.classList.remove('mdi-eye-off-outline');
                target.classList.add('mdi-eye-outline');
            }
        })
    });
});


// flip card 
const flipCard= document.querySelectorAll('.s-flip-card');
flipCard.forEach(element=>{
    element.addEventListener('click', e=>{
        let target= e.target;
        if(target.classList.contains('s-flip-btn')){
            element.classList.add('s-flip');
            element.classList.remove('s-flip-back');
        }
        else if(target.classList.contains('s-back')){
            element.classList.add('s-flip-back');
            element.classList.remove('s-flip');
        }
    });
});*/
const toggleelm = document.querySelectorAll('.s-trigger');
try{
    toggleelm.forEach(elm=>{
        elm.addEventListener('click', e=>{
            let target =e.target.dataset;
            let menue =target.toggle;
            let element =document.querySelector(menue);
            if(element.classList.contains('s-d-block')){
                element.classList.remove('s-d-block');
            }
            else{
                element.style.height='100%';
                element.classList.add('s-d-block');
            }
        });
    })  
}
catch(error){};
/**
 * 
 -----------------*tos */

const scrollSpy=document.querySelector('.s-scroll-spy');
 if(document.contains(scrollSpy)){
const scrollSpyArr=Array.from(scrollSpy.children);
 const secPos ={}
 let secId = []
 scrollSpyArr.forEach(section=>{
    secId.push(section.id)
    secPos[section.id] = section.getBoundingClientRect( ).top; 
 });
 
 console.log(secId);

 window.onscroll= ()=>{
    scrollFunction();
    let scrollPosition =document.documentElement.scrollTop
     || document.body.scrollTop;
     
     
     let id =secId;
     for(id in secPos){
         if(secPos[id] <= scrollPosition){
             document.querySelector('.s-active').classList.remove('s-active');
             document.querySelector(`a[href*=${id}]`).classList.add('s-active');
         }
     }
 }
};
 //end scroll spy

 //scroll back to top:
 let toTopbtn = document.getElementById("btop");
 if(document.contains(toTopbtn)){
    toTopbtn.addEventListener('click', ()=>{
        topFunction();
     })
 }

 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopbtn.style.display = "flex";
    } else {
      toTopbtn.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//tos
const bgContainer = document.querySelector('.s-bg-container');
const bgElement = document.querySelectorAll('.s-theme-el');
let start = 2

function isVisible(){
// checks if element is in the viewport
try{
    bgElement.forEach( element=>{
        let rect = element.getBoundingClientRect( );
        let deviceHeight = window.innerHeight ||  this.innerHeight
        console.log('this', deviceHeight);
        if(element.getBoundingClientRect( ).top <= deviceHeight/start && element.getBoundingClientRect( ).top >=0 ){
            console.log(element, element.getBoundingClientRect( ).top, deviceHeight/start)
            let bgColor = element.dataset.bg;
            let textColor =element.dataset.color;
            let theme =element.dataset.theme;
            if(bgColor !== null || textColor !== undefined){
                bgContainer.style.background=bgColor;
                bgContainer.style.color=textColor;
            }
            
            if(theme !== null || theme !== undefined){
                console.log(typeof theme)
                let arr = theme.split(" ")
                console.log(typeof arr)
                let colorClass =['primary', 'secondary', 'info', 'danger', 'warning', 'dark', 'light'];
                for(let i= 0; i < arr.length; i++){
                    for(let j = i; j<= i; j++){
                        if(arr[i] == 'def'){
                            j++;
                        }
                        else{
                        //get  css root variable 
                        let cssvar=window.getComputedStyle(document.documentElement)
                        .getPropertyValue('--'+colorClass[j])
                         //set css variable to given color
                        document.documentElement.style.setProperty
                        ('--'+colorClass[j], arr[i])
                        console.log('i',i, 'j',j, cssvar);
                    }
                }
                }
            }
        }
        })
        }
        catch(error){
            console.warn('You may have loade TOS globally. Please import it locally',error)
        }
}
window.addEventListener('load', ()=>{
    isVisible();
})
window.addEventListener('scroll', ()=>{
    isVisible();
});