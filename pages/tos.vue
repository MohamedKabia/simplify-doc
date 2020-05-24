<template>
  <div>
    <section class="s-mt-60">
      <div class="s-bg-container bg-primary s-light-text s-p-16">
        <div class="s-theme-el s-container h-100" data-theme="#F2775C #D8F3F6 #596B6C #D94D24">
          <div class="s-center-all">
            <div>
              <div class="m-auto" style="width:170px; height:170px">
                <img src="../static/imgs/TOS.png" alt="tos" class="s-responsive-img">
              </div>
              <div>
                <p class="s-heading s-center s-mt-20">Theme On Scroll</p>
                <p class="s-mt-10 s-center">
                  Give your application a unique scrolling effect with Theme On Scroll.
                  get read of the old block website layout
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="s-theme-el  s-container s-center-all h-100" data-theme="#24C6c9 #D8F3F6 #05191C #EF6333">
          <div class="container1">
            <p class="s-heading s-center">How it works</p>
            <div class="s-mt-20 s-center">
              <p>Downloade and include this plugin in your app</p>
              <button class="s-btn s-btn-primary-outline">Downloade</button>
              <p>Or downloade package vai npm</p>
              <div class="s-card-1">
                <div class="code-editor s-pl-16" style="height:70px">
                  <code class="language-css">
npm i -d simplify/tos
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="s-theme-el s-container s-center-all h-00 s-center h-100" data-theme="#500D4F #494849 #7699A2 #D9424">
          <div class="container1">
            <div class="s-card-1 dark-text s-mb-10">
              <p class="s-heading dark-text">Theme Template code snippet</p><br>
            <p>data-theme="<span class="s-primary-text">primary</span> 
            <span class="s-secondary-text">secondary</span>  <span class="s-info-text">info</span>
              <span class="s-danger-text">danger</span>  <span class="s-warning-text">warning</span> 
               <span class="s-dark-text">dark</span>  <span class="s-bg-dark s-light-text">light</span>"</p><br>
            </div>
            <div class="">
           <div class="code-editor s-p-16">
                <code class="language-css">
&lt;div class=&quot;s-bg-container s-bg-secondary s-primary-text&quot;&gt;

&lt;div class=&quot;s-theme-el&quot; data-theme=&quot;def #D8F3F6 #05191C #EF6333&quot;&gt;
&lt;h1&gt; 2nd element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-theme=&quot;#D8F3F6 #EF6333 #596B6C #D94D24&quot;&gt;
&lt;h1&gt;3 element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-theme=&quot;#500D4F #494849 #7699A2 #D94D24&quot;&gt;
&lt;h1&gt; 4rd element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-theme=&quot;#F2775C #6C5C59 #596B6C #D94D24&quot;&gt;
&lt;h1&gt; 5th element&lt;/h1&gt;
&lt;/div&gt;

&lt;/div&gt;
                </code>
              </div>
        </div>
         </div>
        </div>

        <div class="s-mt-60 s-theme-el s-container s-center-all s-center h-100" data-theme="#F2775C #6C5C59 #596B6C #D94D24">
          <div class="container1 s-mt-10">
            <div class="s-card-1 s-dark-text">
              <p><span class="s-danger-text">Note=></span> when using the data-theme model
              the theme colors must be in following order.
              <br><span class="s-info-text">primary secondary info danger warning dark light</span></p>
              data-theme="primary secondary info danger warning dark light"
            </div>

            <div class="s-mt-20 s-card-1 s-dark-text s-mb-20">
              <p>If you wish not to change a variable use <span class="s-warning-text">def</span>
              to replace the variable. The def attribute set the variable to it current default color.</p>
              <br>
              data-theme="def <span class="secondary-text">secondary</span>
               <span class="info-text">info</span> def <span class="warning-text">warning</span> <span class="dark-text">dark</span> light"
            </div>
              <div class="s-mt-20 container1">
                <div class="code-editor s-p-16">
                <code class="language-css">
&lt;div class=&quot;s-bg-container&quot;&gt;

&lt;div class=&quot;s-theme-el&quot; data-bg=&quot;green&quot; data-color=&quot;white&quot;&gt;
&lt;h1&gt;3 element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-bg=&quot;teal&quot; data-color=&quot;black&quot;&gt;
&lt;h1&gt; 4rd element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-bg=&quot;yellow&quot; data-color=&quot;purple&quot;&gt;
&lt;h1&gt; 5th element&lt;/h1&gt;
&lt;/div&gt;

&lt;div class=&quot;s-theme-el&quot; data-bg=&quot;blue&quot; data-color=&quot;white&quot;&gt;
&lt;h1&gt; 6nd element&lt;/h1&gt;
&lt;/div&gt;

&lt;/div&gt;
                </code>
              </div>
              </div>
          </div>
        </div>

        <div class="s-theme-el s-container s-center-all s-center h-100" data-theme="#F2775C #6C5C59 #596B6C #D94D24">
          <div class="container1">
        
            <div class="s-mt-10">
              <p>With this setup you can change background and text color only without changing any variable value</p>
            </div>

            <div class="container1">
              <div class="code-editor s-p-16">
                <code class="language-css">
 /*----
-- edit theme and css variables here
 */
//===========================================================================================
/* transition time ===*/  changeDefault('--transTime', 2+'s');                    /*=== */
/* only one color==*/     changeDefault('--primary', 'teal');                       /*=== */
/* multiple color==*/     let custumthem=['red', 'orange', 'yellow', 'green'];      /*=== */
/* ===*/ /*=== */
/* ===*/ /*=== */
//=============================================================================

/*===============================do not change============= ======*/
if (custumthem !== '' || custumthem !== undefined || custumthem !== null) {
  changrTheme();
}

function changrTheme() {
  let defaultThem = ['--primary', '--secondary', '--info', '--danger', '--warning', '--dark', '--light']
  for (let i = 0; i &lt; custumthem.length; i++) {
    for (let j = i; j &lt;= i; j++) {
      if (custumthem[i] === 'def') {
        j++;
      } else {
        //get  css root variable 
        window.getComputedStyle(document.documentElement)
          .getPropertyValue(defaultThem[j])
        //set css variable to given color
        document.documentElement.style.setProperty(defaultThem[j], custumthem[i])
      }
    }

  }
}

function changeDefault(elem, payload) {
  window.getComputedStyle(document.documentElement).getPropertyValue(elem);
  document.documentElement.style.setProperty(elem, payload)
  let tru = window.getComputedStyle(document.documentElement).getPropertyValue(elem);
}
                </code>
              </div>
            </div>
         </div>
        </div>
      
      </div>
      <!---end theme container -->
    </section>
  </div>
</template>
<style>
.code-editor{
  width: 100%;
  height: 500px;
  overflow: scroll;
}
 .m-auto {
  margin: auto auto;
}
.s-heading {
  line-height: 2.5rem;
}

.h-100 {
  min-height: 100vh;
  background: transparent;
}

:root{
    --primary:  #6668d3;
    --secondary:#4caf50;
    --info:#708bd6;
    --warning: #fd900a;
    --danger: #ff5252;
    --dark:#363333;
    --light:#f4f7f7;
    --transTime: .4s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .s-bg-container {
    transition: ease-in-out var(--transTime);
    width: 100%;
    height: 100%;
  }

  .s-bg-primary,
  .bg-primary {
    background-color: var(--primary);
  }

  .s-mt-60 {
    margin-top: 60px;
  }

  /*
  customize the theme here
*/
  /*
---------------backgrounds-color------------
*/
  .s-bg-dark,
  .bg-dark {
    background-color: var(--dark);
  }

  .s-bg-light,
  .bg-light {
    background-color: var(--light);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-primary,
  .bg-primary {
    transition: ease-in-out var(--transTime);
    background-color: var(--primary);
  }

  .s-bg-secondary,
  .bg-secondary {
    background-color: var(--secondary);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-danger,
  .bg-danger {
    background-color: var(--danger);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-warning,
  .bg-warning {
    background-color: var(--warning);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-info,
  .bg-info {
    background-color: var(--info);
  }

  /*
---------text--color-------------
*/
  .s-dark-text,
  .dark-text {
    color: var(--dark)
  }

  .s-light-text,
  .light-text {
    color: var(--light);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-primary-text,
  .primary-text {
    color: var(--primary);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-secondary-text,
  .secondary-text {
    color: var(--secondary);
  }

  .s-bg-danger-text,
  .danger-text {
    color: var(--danger);
    transition: ease-in-out var(--transTime);
  }

  .s-bg-dark-text,
  .dark-text {
    color: var(--dark);
  }

  .s-bg-warning-text,
  .warning-text {
    color: var(--warning);
  }

  .s-bg-info-text,
  .info-text {
    color: var(--info);
  }

  /*
----------component or elements theme--------------
*/
  .s-btn-primary,
  .btn-primary {
    background-color: var(--primary)
  }

  .s-btn-secondary,
  .btn-secondary {
    background-color: var(--secondary)
  }

  .s-btn-info,
  .btn-info {
    background-color: var(--info)
  }

  .s-btn-danger,
  .btn-danger {
    background-color: var(--danger)
  }

  .s-btn-dark,
  .btn-dark {
    background-color: var(--dark)
  }

  .s-btn-light,
  .btn-light {
    background-color: var(--light)
  }

  .s-btn-warning,
  .btn-warning {
    background-color: var(--warning)
  }


  .s-btn-primary-outline,
  .btn-primary-outline,
  .primary-outline{
    border-color: var(--primary)
  }

  .s-btn-secondary-outline,
  .btn-secondary-outline,
  .secondary-outline {
    border-color: var(--secondary);
    transition: ease-in-out var(--transTime);
  }

  .s-btn-info-outline,
  .btn-info-outline,
  .info-outline{
    border-color: var(--info)
  }

  .s-btn-danger-outline,
  .btn-danger-outline,
  .danger-outline{
    border-color: var(--danger);
    transition: ease-in-out var(--transTime);
  }

  .s-btn-dark-outline,
  .btn-dark-outline,
  .dark-outline{
    border-color: var(--dark)
  }

  .s-btn-light-outline,
  .btn-light-outline,
  .light-outline{
    border-color: var(--light)
  }
  .container1{
    width:700px;
    margin: auto auto;
  }
  @media(max-width:700px){
    .container1{
    width:100%;
  }
  }
</style>