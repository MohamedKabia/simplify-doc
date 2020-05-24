<template>
    <div>
        <div class="center-aside s-p-16">
            <section>
                <div class="s-heading s-primary-text">
                    s-drawer
                </div>
                <p>justt like <span class="s-danger-text">s-toolbar</span>
                this component is used to navigate through an application. This component also works well with the
                 <span class="s-danger-tex">s-toolbar</span>
                component</p>
            </section>
            <div class="s-mt-20 s-card">
                <div class="s-accordin">
                <div class="s-accord-item">
                    <div class="s-accord-title">
                    <div class="title">Html</div>
                    <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                    </div>
                    <div class="s-accord-content">
                    <div class="code-editor">
                        <pre>
                        <code  class="language-css">

                        </code>
                        </pre>
                    </div>
                    </div>
                 </div>
                </div>
                <!----end accordion---->
            </div>

            <div class="s-mt-20 s-card">
                <div class="s-accordin">
                <div class="s-accord-item">
                    <div class="s-accord-title">
                    <div class="title">Html</div>
                    <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
                    </div>
                    <div class="s-accord-content">
                    <div class="code-editor">
                        <pre>
                        <code  class="language-css">
&lt;!-------toggler---&gt;
&lt;div class=&quot;s-icon drawer&quot; data-target=&quot;#drawer&quot; data-direction=&quot;left&quot;&gt;&lt;span class=&quot;mdi mdi-menu&quot;&gt;&lt;/span&gt;&lt;/div&gt;

&lt;div class=&quot;s-drawer&quot;&gt;
  &lt;div class=&quot;s-drawer-container top-left&quot; id=&quot;drawer&quot;&gt;
    &lt;div class=&quot;s-drawer-contents &quot;&gt;
      &lt;ul class=&quot;s-list&quot;&gt;
        &lt;li class=&quot;s-list-item&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;s-tool&quot;&gt;Home&lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;s-list-item&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;s-tool&quot;&gt;About&lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;s-list-item&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;s-tool&quot;&gt;Contact&lt;/a&gt;
        &lt;/li&gt;

        &lt;li class=&quot;s-list-item&quot;&gt;
          &lt;a href=&quot;#&quot; class=&quot;s-tool&quot;&gt;Projects&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                        </code>
                        </pre>
                    </div>
                    </div>
                 </div>
                </div>
                <!----end accordion---->
                <div class="s-mt-10">
                    <div class="s-mobile s-card">
                        <div class="s-toolbar">
                            <div class="s-icon drawer" data-target="#drawer" data-direction="left"><span class="mdi mdi-menu"></span></div>
                        </div>

                    <div class="s-drawer">
                        <div class="s-drawer-container top-left" id="drawer">
                            <div class="s-drawer-contents ">
                                <ul class="s-list">
                                    <li class="s-list-item">
                                        <a href="#" class="s-tool">Home</a>
                                    </li>

                                    <li class="s-list-item">
                                        <a href="#" class="s-tool">About</a>
                                    </li>

                                    <li class="s-list-item">
                                        <a href="#" class="s-tool">Contact</a>
                                    </li>

                                    <li class="s-list-item">
                                        <a href="#" class="s-tool">Projects</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="s-mt-20 s-p-16">
                        <p>This component has a position of absolute. Overflow is set to hidden when in viewport, and scroll is set to disable.

                        </p>
                    </div>
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
      title: 'Drawers  Simplify',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify Drawers responsive menue drawer ' }
      ]
    }
  }
}
</script>