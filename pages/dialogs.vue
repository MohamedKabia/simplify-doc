<template>
    <div>
        <div class="center-aside s-p-16">
            <section>
                <div class="s-heading s-primary-text">
                    s-dialog
                </div>
                <p>Add dialogue to your application with Simplify dialogue plugin.
                   This component can be used to inform a user about a specific task or information.
                </p>
            </section>
            
            <section class="s-mt-20">
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
 &lt;button class=&quot;s-btn s-btn-danger s-dialog-toggle&quot; data-target=&quot;#dialog1&quot;&gt;
   click me
 &lt;/button&gt;

 &lt;div class=&quot;s-dialog persist&quot; id=&quot;dialog1&quot;&gt;
   &lt;div class=&quot;s-dialog-container s-larg&quot;&gt;
     &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
       upti eius quidem corporis earum similique
       natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.&lt;/p&gt;
     &lt;div class=&quot;s-dialog-action&quot;&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot; id=&quot;agree&quot;&gt;Agree&lt;/button&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot;&gt;disafree&lt;/button&gt;
     &lt;/div&gt;
   &lt;/div&gt;
 &lt;/div&gt;
                    </code>
                    </pre>
                    </div>
                </div>
                </div>
            </div>  
            <!----end accordion --->
            <div class="s-center s-p-16 s-card">
                    <button class="s-btn s-btn-danger s-dialog-toggle" data-target="#dialog1">
                            click me
                    </button>

                    <div class="s-dialog persist"  id="dialog1">
                        <div class="s-dialog-container s-larg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
                                upti eius quidem corporis earum similique 
                                natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.</p>
                            <div class="s-dialog-action">
                                <button class="s-btn s-btn-light" id="agree">Agree</button>
                                <button class="s-btn s-btn-light">disafree</button>
                            </div>
                        </div>
                    </div>
                    <div class="s-mt-20">
                        <p>With the <span class="s-danger-text">persist</span> class, the dialogue only 
                        closes when an action is taken, such as agreeing to terms of service or submitting a form.
                        </p>
                    </div>
            </div>              
            </section>

            <section class="s-mt-20 s-card">
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
 &lt;button class=&quot;s-btn s-btn-primary s-dialog-toggle&quot; data-target=&quot;#dialog2&quot;&gt;click me&lt;/button&gt;

 &lt;div class=&quot;s-dialog &quot; id=&quot;dialog2&quot;&gt;
   &lt;div class=&quot;s-dialog-container s-medium&quot;&gt;
     &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
       upti eius quidem corporis earum similique
       natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.&lt;/p&gt;
     &lt;div class=&quot;s-dialog-action&quot;&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot; id=&quot;agree&quot; @click=&quot;dialog = false&quot;&gt;Agree&lt;/button&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot;&gt;disafree&lt;/button&gt;
     &lt;/div&gt;
   &lt;/div&gt;
 &lt;/div&gt;
                        </code>
                        </pre>
                        </div>
                    </div>
                    </div>
                </div>  
                <div class="s-center s-p-16">
                    <button class="s-btn s-btn-primary s-dialog-toggle" data-target="#dialog2">click me</button>
                
                    <div class="s-dialog "  id="dialog2">
                        <div class="s-dialog-container s-medium">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
                                upti eius quidem corporis earum similique 
                                natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.</p>
                            <div class="s-dialog-action">
                                <button class="s-btn s-btn-light" id="agree" @click="dialog = false">Agree</button>
                                <button class="s-btn s-btn-light">disafree</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="s-mt-20 s-card">
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
 &lt;button class=&quot;s-btn s-btn-primary s-dialog-toggle&quot; data-target=&quot;#dialog3&quot;&gt;click me&lt;/button&gt;

 &lt;div class=&quot;s-dialog &quot; id=&quot;dialog3&quot;&gt;
   &lt;div class=&quot;s-dialog-container s-small&quot;&gt;
     &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
       upti eius quidem corporis earum similique
       natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.&lt;/p&gt;
     &lt;div class=&quot;s-dialog-action&quot;&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot; id=&quot;agree&quot;&gt;Agree&lt;/button&gt;
       &lt;button class=&quot;s-btn s-btn-light&quot;&gt;disafree&lt;/button&gt;
     &lt;/div&gt;
   &lt;/div&gt;
 &lt;/div&gt;
                        </code>
                        </pre>
                        </div>
                    </div>
                    </div>
                </div>  
                <div class="s-center s-p-16">
                    <button class="s-btn s-btn-primary s-dialog-toggle" data-target="#dialog3">click me</button>
                
                    <div class="s-dialog "  id="dialog3">
                    <div class="s-dialog-container s-small">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab impedit corr
                            upti eius quidem corporis earum similique 
                            natus in ut facere tenetur maiores illum, dignissimos iste hic atque fuga vitae.</p>
                        <div class="s-dialog-action">
                            <button class="s-btn s-btn-light" id="agree">Agree</button>
                            <button class="s-btn s-btn-light">disafree</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>{
        return {

        }
    },
    head () {
    return {
      title: 'Dialogs',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify Dialogs allow users to interact withh dialogs ' }
      ]
    }
  }
}
</script>