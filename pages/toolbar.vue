<template>
  <div class="center-aside s-p-16">
    <div>
      <span class="s-heading s-primary-text">Toolbar</span><br>
      <p>A toolbar is generally the primary source of site navigation. It is used to display navigation
         links. Simplify toolbars work with dropdown and side drawer.
      </p>
    </div>

    <div class="s-mt-20">
      <div class="s-card s-r-4">
        <div class="s-accordin">
          <div class="s-accord-item s-card">
            <div class="s-accord-title">
              <div class="title">HTML</div>
              <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
            </div>
            <div class="s-accord-content">
              <div class="code-editor">
                <code class="language-css">
&lt;div class=&quot;s-toolbar&quot;&gt;
  &lt;div class=&quot;s-d-flex&quot;&gt;
    &lt;div class=&quot;s-tool s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-menu&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;div class=&quot;s-ml-5 s-toolbrar-title&quot;&gt;Toolbar&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;s-spacer&quot;&gt;&lt;/div&gt;
  &lt;nav class=&quot;s-nav-container&quot;&gt;
    &lt;ul class=&quot;s-ul&quot;&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;span class=&quot;s-icon mdi mdi-bell-alert-outline&quot;&gt;&lt;/span&gt;&lt;/li&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;span class=&quot;s-icon mdi mdi-logout-variant&quot;&gt;&lt;/span&gt;&lt;/li&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;span class=&quot;s-icon mdi mdi-cart-outline &quot;&gt;&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
        <div class="s-p-16">
          <div class="s-mobile s-card">
            <div class="s-toolbar">
                <div class="s-d-flex">
                    <div class="s-tool s-icon"><span class="mdi mdi-menu"></span></div>
                    <div class="s-ml-5 s-toolbrar-title">Toolbar</div>
                </div> 
                <div class="s-spacer"></div>
                <nav class="s-nav-container">
                    <ul class="s-ul">
                        <li class="s-list-item"><span class="s-icon mdi mdi-bell-alert-outline"></span></li>
                        <li class="s-list-item"><span class="s-icon mdi mdi-logout-variant"></span></li>
                        <li class="s-list-item"><span class="s-icon mdi mdi-cart-outline "></span></li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---left toolbar--->
    <div class="s-mt-20">
      <div class="s-card s-r-4">
        <div class="s-accordin">
          <div class="s-accord-item s-card">
            <div class="s-accord-title">
              <div class="title">HTML</div>
              <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
            </div>
            <div class="s-accord-content">
              <div class="code-editor">
                <code class="language-css">
&lt;div class=&quot;s-toolbar s-left&quot; style=&quot;width:60px&quot;&gt;
  &lt;div class=&quot;s-nav-container&quot;&gt;
    &lt;nav class=&quot;s-nav-container&quot;&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;span class=&quot;s-icon-lg mdi mdi-bell-alert-outline&quot;&gt;&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span class=&quot;s-icon-lg mdi mdi-logout-variant&quot;&gt;&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span class=&quot;s-icon-lg mdi mdi-cart-outline &quot;&gt;&lt;/span&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/div&gt;
&lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
        <div class="s-p-16">
          <div class="s-mobile s-card">
            <div class="s-toolbar s-left" style="width:60px">
                <div class="s-nav-container">
                    <nav class="s-nav-container">
                        <ul>
                            <li><span class="s-icon-lg mdi mdi-bell-alert-outline"></span></li>
                            <li><span class="s-icon-lg mdi mdi-logout-variant"></span></li>
                            <li><span class="s-icon-lg mdi mdi-cart-outline "></span></li>
                        </ul>
                    </nav>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---dropdown---->
    <div class="s-mt-20">
      <div class="s-card s-r-4">
        <div class="s-accordin">
          <div class="s-accord-item s-card">
            <div class="s-accord-title">
              <div class="title">HTML</div>
              <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
            </div>
            <div class="s-accord-content">
              <div class="code-editor">
                <code class="language-css">
&lt;div class=&quot;s-toolbar s-bg-dark s-light-text&quot;&gt;
  &lt;div class=&quot;s-d-flex&quot;&gt;
    &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;triger mdi mdi-menu&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;div class=&quot;s-ml-10 s-toolbrar-title &quot;&gt;Toolbar&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;s-spacer&quot;&gt;&lt;/div&gt;
  &lt;nav class=&quot;s-nav-container&quot;&gt;
    &lt;ul class=&quot;s-ul &quot;&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;s-list-link&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;s-list-link&quot;&gt;Projects&lt;/a&gt;&lt;/li&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;s-list-link&quot;&gt;Api&lt;/a&gt;&lt;/li&gt;
      &lt;li class=&quot;s-list-item&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;s-list-link&quot;&gt;About us&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
          <div class="s-accord-item s-card">
            <div class="s-accord-title">
              <div class="title">javaScript</div>
              <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
            </div>
            <div class="s-accord-content">
              <div class="code-editor">
                <code class="language-css">
const toggle = document.querySelectorAll('.s-toolbar');
toggle.forEach(element =&gt; {
  let elem = element;
  element.addEventListener('click', e =&gt; {
    if (target.classList.contains('triger')) {
      let a = Array.from(element.children);
      let i = 0;
      a.forEach(e =&gt; {
        if (e.classList.contains('s-nav-container')) {
          if (e.classList.contains('dropdown')) {
            e.classList.remove('dropdown');
          } else {
            e.classList.add('dropdown')
          }
        }
        i++;
      })
    }
  });
})
                </code>
              </div>
            </div>
          </div>
        </div>
        <div class="s-p-16">
            <div class="s-toolbar s-bg-dark s-light-text">
                <div class="s-d-flex">
                    <div class="s-icon"><span class="triger mdi mdi-menu"></span></div>
                    <div class="s-ml-10 s-toolbrar-title ">Toolbar</div>
                </div> 
                <div class="s-spacer"></div>
                <nav class="s-nav-container">
                    <ul class="s-ul ">
                        <li class="s-list-item"><a href="#" class="s-list-link">Home</a></li>
                        <li class="s-list-item"><a href="#" class="s-list-link">Projects</a></li>
                        <li class="s-list-item"><a href="#" class="s-list-link">Api</a></li>
                        <li class="s-list-item"><a href="#" class="s-list-link">About us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style >
    .center{
        text-align: center;
    }
</style>