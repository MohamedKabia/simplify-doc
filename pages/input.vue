<template>
    <div class="center-aside s-p-16">
        <div>
            <div class="s-heading s-primary-text">
                Input
            </div>
            <p>Specifies an input field where the user can enter data. Simplify input are design to achieve the best user experience.
            </p>
            <div class="s-mt-20 s-card s-r-4 s-p-16">
                <div class="s-p-10">
                  <input type="text" class="s-input" placeholder="s-input"> 
                </div>               
                <div class="s-p-10">
                    <input type="text" class="s-input s-input-outline-primary" placeholder="s-input-outline-primary">
                </div>
                <div class="s-p-10">
                    <input type="text" class="s-input s-input-outline-secondary" placeholder="s-input-outline-secondary">
                </div>

                <div class="s-p-10">
                    <input type="text" class="s-input s-input-outline-danger" placeholder="s-input-outline-danger">
                </div>
            </div>

            <div class="s-mt-20">
                <div class="s-accordin">
                        <div class="s-accord-item s-card">
                            <div class="s-accord-title">
                                <div class="title">Html</div>
                                <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                            </div> 
                           <div class="s-accord-content">
                             <div class="code-editor">
                                <pre>
                                <code  class="language-css">
&lt;input type=&quot;text&quot; class=&quot;s-input&quot; placeholder=&quot;s-input&quot;&gt; 
&lt;input type=&quot;text&quot; class=&quot;s-input s-input-outline-primary&quot; placeholder=&quot;s-input-outline-primary&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;s-input s-input-outline-secondary&quot; placeholder=&quot;s-input-outline-secondary&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;s-input s-input-outline-danger&quot; placeholder=&quot;s-input-outline-danger&quot;&gt;
                                </code>
                                </pre>
                                </div>


                            </div>
                        </div>
                    </div>
            </div>
            <div class="s-card-1 s-mt-20">
                <div class="s-primary-text">
                    <h2 class="s-primary-text">s-select</h2>
                </div>
                <p>The <span class="s-danger-text">s-select</span> class gives a select input a basic style that improve it aperance and User experience</p>
                <div class="s-mt-20">
                    <select name="cat" id="" class="s-select s-flat">
                        <option value="void">Pick a fruit</option>
                        <option value="ba">Banan</option>
                        <option value="ap">Apple</option>
                        <option value="or">Orange</option>
                        <option value="mg">mango</option>
                    </select>
                </div>
            </div>
            <div class="s-mt-20 s-card s-r-4">
                <div class="s-accordin">
                    <div class="s-accord-item s-card">
                        <div class="s-accord-title">
                            <div class="title">Html</div>
                            <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div> 
                        <div class="s-accord-content">
                            <div class="code-editor">
                            <pre>
                            <code  class="language-css">
&lt;div class=&quot;s-input-container&quot;&gt;
  &lt;input type=&quot;password&quot; class=&quot;s-input-field&quot; required&gt;
  &lt;label for=&quot;forname&quot; class=&quot;s-label&quot;&gt;Name&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;s-input-container&quot;&gt;
  &lt;input type=&quot;password&quot; class=&quot;s-input-field&quot; required&gt;
  &lt;label for=&quot;forname&quot; class=&quot;s-label&quot;&gt;email&lt;/label&gt;
&lt;/div&gt;
                            </code>
                            </pre>
                            </div>
                        </div>
                    </div>
                    <div class="s-accord-item s-card">
                        <div class="s-accord-title">
                            <div class="title">Html</div>
                            <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div> 
                        <div class="s-accord-content">
                            <div class="code-editor">
                            <pre>
                            <code  class="language-css">
const inputField = document.querySelectorAll('.s-input-field');
inputField.forEach(element =&gt; {
  element.addEventListener('focusout', e =&gt; {
    let target = e.target;
    let label = target.nextSibling.nextSibling
    if (element.value === '' || element.value === undefined || element.value === null) {
      label.style.cssText = &quot;opacity:5&quot;;

    } else {

      label.style.cssText = &quot; top:0; opacity:.1&quot;;
    }
  })
});
                            </code>
                            </pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="s-mt-20">
                    <div class="s-card s-r-4 s-p-16 s-mb-20" style="width:250px; margin:0 auto;">
                        <div class="s-input-container">
                            <input type="password" class="s-input-field" required>   
                            <label for="forname" class="s-label">Name</label>     
                        </div>

                        <div class="s-input-container">
                            <input type="password" class="s-input-field" required>   
                            <label for="forname" class="s-label">email</label>     
                        </div>
                    </div>
                    <div class="s-mt-20">
                        <p>Note: This design works best when the label is below the input as shown in the code above.
</p>
                    </div>
                </div>
            </div>

            <!---input groups---->
            <div class="s-mt-20 s-card s-r-4">
                <h3>Input group</h3>
                <p>Add text, buttons or icons to an input field.</p>
                <div class="s-accordin">
                    <div class="s-accord-item s-card">
                        <div class="s-accord-title">
                            <div class="title">Html</div>
                            <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div> 
                        <div class="s-accord-content">
                            <div class="code-editor">
                            <pre>
                            <code  class="language-css">
&lt;div class=&quot;s-input-group&quot;&gt;
    &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-account&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;s-input&quot; placeholder=&quot;Name&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;s-input-group&quot;&gt;
    &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-lock-question &quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;input type=&quot;password&quot; class=&quot;s-input&quot; placeholder=&quot;Password&quot;&gt;
    &lt;div class=&quot;s-icon s-eye&quot;&gt;&lt;span class='mdi mdi-eye-outline'&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
                            </code>
                            </pre>
                            </div>
                        </div>
                    </div>

                    <!--script--->
                    <div class="s-accord-item s-card">
                        <div class="s-accord-title">
                            <div class="title">JavaScript</div>
                            <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                        </div> 
                        <div class="s-accord-content">
                            <div class="code-editor">
                            <pre>
                            <code  class="language-css">
/*
This script toggle the visibility of the password
 */
const inputgroup = document.querySelectorAll('.s-input-group');
inputgroup.forEach(element =&gt; {
  element.addEventListener('click', e =&gt; {
    let target = e.target;
    if (target.classList.contains('s-input')) {
      if (target.type === 'password') {
        let eye = target.nextElementSibling;
        target.addEventListener('keyup', () =&gt; {
          if (target.value !== '') {
            eye.style.cssText = 'visibility:visible';
          } else {
            eye.style.cssText = 'visibility:hidden';
          }

        });
      }
    }
  });
});

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

                <div class="s-mt-20">
                    <div class="s-card s-r-4 s-p-16 s-mb-20" style="width:250px; margin:0 auto;">
                        <div class="s-input-group">
                            <div class="s-icon"><span class="mdi mdi-account"></span></div>
                            <input type="text" class="s-input" placeholder="Name">
                        </div> 

                        <div class="s-input-group">  
                            <div class="s-icon"><span class="mdi mdi-lock-question "></span></div> 
                            <input type="password" class="s-input" placeholder="Password"> 
                            <div class="s-icon s-eye"><span class='mdi mdi-eye-outline'></span></div> 
                        </div>
                    </div>
                </div>
            </div>
            <!---end input group--->
        </div>
    </div>
</template>
<style>
</style>