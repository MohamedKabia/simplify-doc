<template>
    <div>
        <div class="center-aside s-p-16">
            <div class="s-heading s-primary-text">
                s-form
            </div>
            <div class="s-mt-10">
                <p>Simplify forms are responsive and consistent across all browsers. Our forms can be customized to suit any design preference.
                </p>
            </div>
            <div class="s-mt-20 s-card s-r-4" id="form1">
                <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">Html</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                                <code  class="language-css">
&lt;form class=&quot;s-form&quot;&gt;
  &lt;div class=&quot;s-form-label s-primary-text&quot;&gt; Login&lt;/div&gt;
  &lt;label for=&quot;User Name&quot; class=&quot;s-fluid&quot;&gt; Username&lt;/label&gt;
  &lt;input type=&quot;text&quot; class=&quot;s-input s-fluid s-required&quot;&gt;
  &lt;label for=&quot;password&quot; class=&quot; s-fluid&quot;&gt; Password&lt;/label&gt;
  &lt;input type=&quot;password&quot; class=&quot;s-input s-fluid s-required&quot;&gt;
  &lt;button class=&quot;s-btn s-btn-primary-outline  s-mt-16 s-form-btn&quot;&gt;login&lt;/button&gt;
&lt;/form&gt;
                                </code>
                                </pre>
                        </div>
                        </div>
                    </div>
                                        <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">JavaScript</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                                <code  class="language-css">
'use strict';
//get all s-form/form 
function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function appendError(a) {
  let errordiv = document.createElement(&quot;div&quot;);
  errordiv.innerHTML = &quot;This field is required&quot;;
  errordiv.classList.add('errordiv');
  insertAfter(errordiv, a);

  //check if errordiv already exist, if so set to display none
  let nextElement = a.nextElementSibling.nextElementSibling;
  try {
    if (nextElement.classList.contains('errordiv')) {
      nextElement.classList.remove('errordiv')
      nextElement.style.display = 'none';
    }
  } catch {

  }
  a.classList.add('s-danger-outline');
}

function removeError(b) {
  let nextElement = b.nextElementSibling;
  try {
    if (nextElement.classList.contains('errordiv')) {
      nextElement.style.display = 'none';
    }
  } catch {
    //
  }
  b.classList.remove('s-danger-outline');
}
let forms = document.querySelectorAll('.s-form');
forms.forEach(form =&gt; {
  let formArray = Array.from(form);
  form.addEventListener('click', e =&gt; {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('s-form-btn')) {
      let form = target.parentNode;
      let formElement = Array.from(form);
      formElement.forEach(element =&gt; {
        if (element.classList.contains('s-required')) {
          if (element.value === '' || element.value === null || element.value === undefined) {
            appendError(element);
          };
        };
      });
    };
  });
  //on focusout
  for (let i = 0; i &lt;= formArray.length - 1; i++) {
    if (formArray[i].classList.contains('s-required')) {
      formArray[i].addEventListener('focusout', () =&gt; {
        let val = formArray[i].value;
        if (val === '' || val == null) {
          appendError(formArray[i]);
        } else if (val !== '' || val !== null) {
          removeError(formArray[i]);
        };
      });
    }
  };
});
                                </code>
                                </pre>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!--mobile--->
                    <div class="s-mt-20 s-mobile s-card">
                        <div class="s-toolbar"><div class="s-icon"><span class="mdi mdi-menu"></span></div></div>
                        <div class="s-p-16">
                            <form class="s-form">
                                <div class="s-form-label s-primary-text"> Login</div>
                                <label for="User Name" class="s-fluid"> Username</label>
                                <input type="text" class="s-input s-fluid s-required">
                                <label for="password" class=" s-fluid"> Password</label>
                                <input type="password" class="s-input s-fluid s-required">
                                <button class="s-btn s-btn-primary-outline  s-mt-10 s-form-btn">login</button>
                            </form>

                            <div class="s-mt-20">
                                <p>This form comes with form authentication.</p>
                            </div>
                        </div>
                    </div>
            </div>
            <!--form2-->
            <div class="s-mt-20 s-card s-r-4" id="form1">
                <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">Html</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                              <code  class="language-css">
 &lt;form class=&quot;s-form s-card&quot;&gt;
   &lt;div class=&quot;s-input-group&quot;&gt;
     &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-account&quot;&gt;&lt;/span&gt;&lt;/div&gt;
     &lt;input type=&quot;text&quot; class=&quot;s-input&quot; placeholder=&quot;Name&quot;&gt;
   &lt;/div&gt;

   &lt;div class=&quot;s-input-group&quot;&gt;
     &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-lock-question &quot;&gt;&lt;/span&gt;&lt;/div&gt;
     &lt;input type=&quot;password&quot; class=&quot;s-input&quot; placeholder=&quot;Password&quot;&gt;
     &lt;div class=&quot;s-icon s-eye&quot;&gt;&lt;span class='mdi mdi-eye-outline'&gt;&lt;/span&gt;&lt;/div&gt;
   &lt;/div&gt;
   &lt;div class=&quot;s-d-flex&quot;&gt;
     &lt;input type=&quot;checkbox&quot; class=&quot;s-mt-3 s-checkbox-switch s-primary&quot; name=&quot;agree&quot;&gt;
     &lt;small&gt;Tearms of servicw&lt;/small&gt;
   &lt;/div&gt;
   &lt;button class=&quot;s-btn s-btn-primary-outline  s-shadow s-mt-10 s-form-btn&quot;&gt;login&lt;/button&gt;
 &lt;/form&gt;
                              </code>
                            </pre>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!--mobile--->
                    <div class="s-mt-20 s-mobile s-card">
                        <div class="s-toolbar"><div class="s-icon"><span class="mdi mdi-menu"></span></div></div>
                        <div class="s-p-16">
                            <form class="s-form s-card">
                                <div class="s-input-group">
                                    <div class="s-icon"><span class="mdi mdi-account"></span></div>
                                    <input type="text" class="s-input" placeholder="Name">
                                </div> 

                                <div class="s-input-group">  
                                    <div class="s-icon"><span class="mdi mdi-lock-question "></span></div> 
                                    <input type="password" class="s-input" placeholder="Password"> 
                                    <div class="s-icon s-eye"><span class='mdi mdi-eye-outline'></span></div> 
                                </div>
                                <div class="s-d-flex">
                                    <input type="checkbox" class="s-mt-3 s-checkbox-switch s-primary" name="agree">
                                    <small>Tearms of servicw</small>
                                </div>
                                <button class="s-btn s-btn-primary-outline  s-shadow s-mt-10 s-form-btn">login</button>
                            </form>

                            <div class="s-mt-20">
                                <p>this form comes with password visibility toggle.</p>
                            </div>
                        </div>
                    </div>
            </div>
             <!-----flip form--->
            <div class="s-mt-60 s-card">
                <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">Html</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                                <code  class="language-css">
&lt;form action=&quot;&quot; class=&quot;s-form&quot;&gt;
  &lt;div class=&quot;s-form-label s-primary-text&quot;&gt;Login&lt;/div&gt;
  &lt;div class=&quot;s-flip-card&quot; style=&quot;height:200px&quot;&gt;
    &lt;div class=&quot;s-flip-card-front&quot;&gt;
      &lt;div class=&quot;s-input-group&quot;&gt;
        &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-lock-question &quot;&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;label for=&quot;email&quot;&gt;&lt;/label&gt;
        &lt;input type=&quot;email&quot; class=&quot;s-input&quot; placeholder=&quot;email&quot;&gt;
        &lt;div class=&quot;s-icon s-eye&quot;&gt;&lt;span class='mdi mdi-eye-outline'&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;div class=&quot;s-icon s-shadow&quot;&gt;&lt;span class=&quot;s-flip-btn mdi mdi-arrow-right &quot;&gt;&lt;/span&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-flip-card-back&quot;&gt;
      &lt;div class=&quot;s-icon s-mb-20&quot;&gt;&lt;span class=&quot;mdi mdi-arrow-left s-back&quot;&gt;&lt;/span&gt; &lt;small&gt;Back&lt;/small&gt;&lt;/div&gt;
      &lt;div class=&quot;s-input-group&quot;&gt;
        &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-lock-question &quot;&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;label for=&quot;password&quot;&gt;&lt;/label&gt;
        &lt;input type=&quot;password&quot; class=&quot;s-input&quot; placeholder=&quot;Password&quot;&gt;
        &lt;div class=&quot;s-icon s-eye&quot;&gt;&lt;span class='mdi mdi-eye-outline'&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;button class=&quot;s-btn s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-arrow-right &quot;&gt;&lt;/span&gt;&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;
                                </code>
                            </pre>
                        </div>
                        </div>
                    </div>

                    <!------item 2----->
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">Html</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                                <code  class="language-css">
/*this script is only for the flip card 
component in this form */
const flipCard = document.querySelectorAll('.s-flip-card');
flipCard.forEach(element =&gt; {
  element.addEventListener('click', e =&gt; {
    let target = e.target;
    if (target.classList.contains('s-flip-btn')) {
      element.classList.add('s-flip');
      element.classList.remove('s-flip-back');
      //do extra stufs
    } else if (target.classList.contains('s-back')) {
      element.classList.add('s-flip-back');
      element.classList.remove('s-flip');
      //do extra stufs
    }
  });
});

/*To toggle see the password the following script is required */
const pwordtogl = document.querySelectorAll('.s-eye');
pwordtogl.forEach(element =&gt; {
  element.addEventListener('click', e =&gt; {
    let target = e.target;
    let container = e.target.closest('.s-input-group');
    let arr = container.childNodes;
    arr.forEach(item =&gt; {
      if (item.type === 'password') {
        item.type = 'text';
        target.classList.remove('mdi-eye-outline')
        target.classList.add('mdi-eye-off-outline');
      } else if (item.type === 'text') {
        item.type = 'password';
        target.classList.remove('mdi-eye-off-outline');
        target.classList.add('mdi-eye-outline');
      }
    })
  });
});

                            </code>
                            </pre>
                        </div>
                        </div>
                    </div>
                        </div>
                        <div class="s-mt-20 s-p-16">
                            <div class="s-r-4 s-p-16">
                                <form action="" class="s-form">
                                    <div class="s-form-label s-primary-text">Login</div>
                                    <div class="s-flip-card" style="height:200px">
                                        <div class="s-flip-card-front">
                                            <div class="s-input-group">
                                                <div class="s-icon"><span class="mdi mdi-lock-question "></span></div> 
                                                <label for="email"></label>
                                                <input type="email" class="s-input" placeholder="email"> 
                                                <div class="s-icon s-eye"><span class='mdi mdi-eye-outline'></span></div> 
                                                <div class="s-icon s-shadow"><span class="s-flip-btn mdi mdi-arrow-right "></span></div>
                                            </div> 
                                        </div>
                                        <div class="s-flip-card-back">
                                            <div class="s-icon s-mb-20"><span class="mdi mdi-arrow-left s-back"></span> <small>Back</small></div>
                                            <div class="s-input-group">
                                                <div class="s-icon"><span class="mdi mdi-lock-question "></span></div> 
                                                <label for="password"></label>
                                                <input type="password" class="s-input" placeholder="Password"> 
                                                <div class="s-icon s-eye"><span class='mdi mdi-eye-outline'></span></div> 
                                                <button class="s-btn s-icon"><span class="mdi mdi-arrow-right "></span></button>
                                            </div> 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!---form 3--->
                        <div class="s-mt-20 s-card s-r-4" id="form1">
                    <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                        <div class="title">Html</div>
                        <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
                        <div class="code-editor">
                            <pre>
                                <code  class="language-css">
&lt;form class=&quot;s-form&quot;&gt;
  &lt;div class=&quot;s-card s-p-16 s-r-4 s-mb-20&quot;&gt;
    &lt;div class=&quot;s-form-label s-primary-text&quot;&gt;Register&lt;/div&gt;
    &lt;div class=&quot;s-input-container&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;s-input-field s-required&quot;&gt;
      &lt;label for=&quot;for name&quot; class=&quot;s-label&quot;&gt;Name&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-input-container&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;s-input-field&quot;&gt;
      &lt;label for=&quot;for surnamename&quot; class=&quot;s-label&quot;&gt;Surname&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-input-container&quot;&gt;
      &lt;input type=&quot;email&quot; class=&quot;s-input-field&quot;&gt;
      &lt;label for=&quot;for email&quot; class=&quot;s-label&quot;&gt;email&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-input-container&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;s-input-field&quot;&gt;
      &lt;label for=&quot;for password&quot; class=&quot;s-label&quot;&gt;password&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-input-container&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;s-input-field&quot;&gt;
      &lt;label for=&quot;forname&quot; class=&quot;s-label&quot;&gt;Confirm password&lt;/label&gt;
    &lt;/div&gt;
    &lt;button class=&quot;s-btn s-btn-primary-outline  s-shadow s-mt-10 s-form-btn&quot;&gt;login&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;
                                </code>
                            </pre>
                        </div>
                        </div>
                    </div>
                    </div>

                   
                    <!--mobile--->
                    <div class="s-mt-20 s-mobile s-card">
                        <div class="s-toolbar"><div class="s-icon"><span class="mdi mdi-menu"></span></div></div>
                        <div class="s-p-16">
                            <form class="s-form">
                                <div class="s-card s-p-16 s-r-4 s-mb-20">
                                    <div class="s-form-label s-primary-text">Register</div>
                                 <div class="s-input-container">
                                    <input type="text" class="s-input-field s-required">   
                                    <label for="for name" class="s-label">Name</label>     
                                </div>
                                <div class="s-input-container">
                                    <input type="text" class="s-input-field">   
                                    <label for="for surnamename" class="s-label">Surname</label>     
                                </div>
                                <div class="s-input-container">
                                    <input type="email" class="s-input-field">   
                                    <label for="for email" class="s-label">email</label>     
                                </div>
                                <div class="s-input-container">
                                    <input type="text" class="s-input-field">   
                                    <label for="for password" class="s-label">password</label>     
                                </div>
                                 <div class="s-input-container">
                                    <input type="text" class="s-input-field">   
                                    <label for="forname" class="s-label">Confirm password</label>     
                                </div>
                                <button class="s-btn s-btn-primary-outline  s-shadow s-mt-10 s-form-btn">login</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   head () {
    return {
      title: 'Forms  Simplify',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify Forms get user inputs ' }
      ]
    }
  }
}
</script>
<style>
.none{
    display: none !important;
}
    
</style>