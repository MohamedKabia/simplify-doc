<template>
    <div class="center-aside s-p-16">
        <div>
            <div class="s-heading s-primary-text">
               Switch
            </div>
            <p>Switch is a checkbox component that is designed to operate as a switch. <span class="s-danger-text"> class gives checkbox a unique design and great user experience.
            </span> </p>

            <div class="s-mt-20 s-card s-r-4">
                <div class="s-accordin">
                    <div class="s-accord-item ">
                        <div class="s-accord-title">
                            <div class="title">Title</div>
                            <div class="s-icon"><span class="mdi mdi-chevron-down"></span></div>
                        </div>
                        <div class="s-accord-content">
                            <div class="code-editor">
                                <code  class="language-css">
&lt;input type=&quot;checkbox&quot; class=&quot;s-checkbox-switch s-primary s-m-5&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;s-checkbox-switch s-secondary s-m-5&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;s-checkbox-switch s-dark s-m-5&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;s-checkbox-switch s-danger s-m-5&quot;&gt;
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s-card s-r-4 s-p-16">
                    <input type="checkbox" class="s-checkbox-switch s-primary s-m-5">
                    <input type="checkbox" class="s-checkbox-switch s-secondary s-m-5">
                    <input type="checkbox" class="s-checkbox-switch s-dark s-m-5">
                    <input type="checkbox" class="s-checkbox-switch s-danger s-m-5">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     head () {
    return {
      title: 'checkbox ',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify checkbox or switch ' }
      ]
    }
  }
}
</script>