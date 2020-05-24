<template>
    <div>
        <div class="s-mt-60 center-aside s-p-16">
            <div class="s-heading s-primary-text">Accordion</div>
            <div>
                <p>Simplify Accordion reduces vertical space with large amounts of information.</p>
            </div>
            <div class="s-mt-20">
                <div class="s-d-flex s-align-center s-space-between">
                   <div>width: 100%</div>
                   <div>padding: 16px</div>
                   <div>height: auto</div>
                </div>
            </div>
            <div class="s-mt-20">
                <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                            <div class="title">Title</div>
                            <div class="s-icon"><span class="mdi mdi-chevron-down"></span></div>
                        </div>
                        <div class="s-accord-content">
                            <div class="p"><p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                                aliquid officia nulla. Aliquid tempore vel iusto
                                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
                            </p></div>
                        </div>
                    </div>
                    <div class="s-accord-item">
                        <div class="s-accord-title">
                            <div class="title">Title</div>
                            <div class="tele">amg looj</div>
                            <div class="s-icon"><span class="icon mdi mdi-chevron-down"></span></div>
                        </div>
                        <div class="s-accord-content">
                            <div class="p"><p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                                aliquid officia nulla. Aliquid tempore vel iusto
                                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
                            </p></div>
                        </div>
                    </div>

                    <div class="s-accord-item">
                        <div class="s-accord-title">
                            <div class="title">Title</div>
                            <div class="s-icon"><span class="mdi mdi-chevron-down "></span></div>
                        </div>
                        <div class="s-accord-content">
                            <div class="p"><p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                                aliquid officia nulla. Aliquid tempore vel iusto
                                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="s-mt-60">
                 <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                            <div class="title">Html</div>
                            <div class="s-icon"><span class="mdi  mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
<div class="code-editor">
<code  class="language-css">
&lt;div class=&quot;s-accordin&quot;&gt;
    &lt;div class=&quot;s-accord-item &quot;&gt;
        &lt;div class=&quot;s-accord-title&quot;&gt;
            &lt;div class=&quot;title&quot;&gt;Title&lt;/div&gt;
            &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-chevron-down&quot;&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;s-accord-content&quot;&gt;
            &lt;p&gt;
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                aliquid officia nulla. Aliquid tempore vel iusto
                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;s-accord-item&quot;&gt;
        &lt;div class=&quot;s-accord-title&quot;&gt;
            &lt;div class=&quot;title&quot;&gt;Title&lt;/div&gt;
            &lt;div class=&quot;tele&quot;&gt;amg looj&lt;/div&gt;
            &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;icon mdi mdi-chevron-down&quot;&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;s-accord-content&quot;&gt;
            &lt;p&gt;
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                aliquid officia nulla. Aliquid tempore vel iusto
                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;s-accord-item&quot;&gt;
        &lt;div class=&quot;s-accord-title&quot;&gt;
            &lt;div class=&quot;title&quot;&gt;Title&lt;/div&gt;
            &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-chevron-down &quot;&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;s-accord-content&quot;&gt;
            &lt;p&gt;
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat animi eligendi neque
                aliquid officia nulla. Aliquid tempore vel iusto
                doloribus in fuga consequuntur culpa, maiores dicta, esse odit. Praesentium, sapiente.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code>
</div>
                        </div>
                    </div>

                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                            <div class="title">JavaScript</div>
                            <div class="s-icon"><span class="mdi  mdi-code-tags"></span></div>
                        </div>
                        <div class="s-accord-content">
<div class="code-editor s-p-10">
<code  class="language-css">
const accordingContainer = document.querySelectorAll('.s-accordin')
accordingContainer.forEach(element =&gt; {
  element.addEventListener('click', e =&gt; {
    let target = e.target;
    let targetChildren = target.children
    if (target.classList.contains('s-accord-title')) {
      const accordContent = target.nextElementSibling;
      const elHeight = target.nextElementSibling.clientHeight;
      let i = 1;
      if (elHeight &lt; ; = 0) {
        try {
          for (i in target.children) {
            if (targetChildren[i].classList.contains('s-icon')) {
              targetChildren[i].style.cssText = &quot;transform: rotate(180deg); transition:all .2s linear&quot;
            }
          }
        } catch (error) {

        }
        slideDown(accordContent);
      } else if (elHeight &gt;= 0) {
        try {
          for (i in target.children) {
            if (targetChildren[i].classList.contains('s-icon')) {
              targetChildren[i].style.cssText = &quot;transform: rotate(360deg);transition:all .2s linear&quot;
            }
          }
        } catch (error) {

        }
        slideUp(accordContent);
      }
    } else {
      try {
        target.closest('.s-accord-title').click();
      } catch (error) {

      }
    }
  })
})

function slideUp(elem) {
  //elem.style.transition = &quot;all 4s ease-in-out&quot;;
  elem.style.cssText = &quot;display:none; opacity:0&quot;;

}

function slideDown(elem) {
  elem.style.cssText = &quot;display:block; opacity:1&quot;;
}
</code></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-mt-20">
                <div>Note: <span class="s-danger-text"> s-accord-title</span> is set to display flex and justfy-contentt space-between</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     head () {
    return {
      title: 'Accordion  Simplify',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify Accordion or dropdown ' }
      ]
    }
  }
}
</script>