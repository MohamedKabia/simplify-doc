<template>
  <div class="">
    <div class="s-bg-light s-mt-60">
        <div class="s-container s-mt-60 s-p-10">
          <div class="s-row">
            <div class="s-col-md-7">
              <div  class="s-mt-60">
                <div class="s-mt-10">
                  <div class="s-heading s-primary-text">Simplify</div>
                </div>
                <h2 class="h2 s-mt-10" style="line-height:1.6rem">
                 Build responsive web applications with Simplify. no third party plugins are required.
              </h2>
              <div class="s-mt-10">
                <p>Simplify is a free open source UI library. it is  responsive on all browsers. Simplify is suitable for both small and large projects. </p>
              </div>
              </div>
              <div class="s-mt-20 act"> 
                <nuxt-link to="/docs" ><button class="s-m-5 s-btn-lg s-btn-primary-outline s-fluid-so s-m-5-so">
                  <span class="s-icon mdi mdi-speedometer"></span> Get started</button></nuxt-link> 
                <a href="@assets/downloade/simplify.rar" download="simplify" ><button class="s-m-5 s-btn-lg s-btn-dark-outline s-fluid-so s-m-5-so">
                  <span class="s-icon mdi mdi-download "></span> Downloade</button></a>
              </div>

            </div>
            <div class="s-col-md-5 s-order-md-1">
              <div class="logo-container">
                <img src="../static/imgs/bluetriangle.svg" class="s-sm-none s-responsive" alt="simplify">
              </div>
            </div>
          </div>
        </div>
    </div>

<div class="links s-mt-60">
<div class="s-container s-p-16">
<div class="s-primary-text">Javascript development CDN</div>
<div class="s-card">
    <div class="code-editor h-30" style="height:70px !important;">
      <code  class="language-css">
  &lt;script src=&quot;https://raw.githack.com/simplifyui/simplify/master/simplifyui/simplify/simplifyjs.js&quot; defer&gt;&lt;/script&gt;
      </code>
      </div>
</div>

<!-----PRODUCTİON-->
<div class="s-primary-text">Javascript Production CDN</div>
<div class="s-card">
    <div class="code-editor h-30" style="height:70px !important;">
      <code  class="language-css">
 &lt;script src=&quot;https://rawcdn.githack.com/simplifyui/simplify/8cf3f733e8b8723a8b4bc0f640b8d4d96fc5d1fe/simplifyui/simplify/simplifyjs.js&quot; defer&gt;&lt;/script&gt;
cdn by https://raw.githack.com/
      </code>
      </div>
</div>

<div class="s-mt-20">
  <div class="s-primary-text">CSS Production CDN</div>
  <div class="s-card">
    <div class="code-editor h-30" style="height:70px !important;">
      <code  class="language-css">
  &lt;link rel=&quot;stylesheet&quot; href=&quot;https://raw.githack.com/simplifyui/simplify/master/simplifyui/simplify/style.css&quot;&gt;
      </code>
      </div>
</div>
</div>

<!--production-->
<div class="s-mt-20">
  <div class="s-primary-text">CSS development CDN</div>
  <div class="s-card">
    <div class="code-editor h-30" style="height:70px !important;">
      <code  class="language-css">
 &lt;link rel=&quot;stylesheet&quot; href=&quot;https://rawcdn.githack.com/simplifyui/simplify/8cf3f733e8b8723a8b4bc0f640b8d4d96fc5d1fe/simplifyui/simplify/style.css&quot;&gt;
      </code>
      </div>
</div>
</div>

 <div class="s-mt-20 s-row s-center">
   <div class="s-col-lg-4 s-col-sm-12">
     <div class="s-p-16">
      <P> Downloade SCSS and JS file</P>
      <nuxt-link to="../assets/downloade/simplify.rar" download class="s-mt-10 s-btn s-btn-info-outline" >Downloade</nuxt-link>
     </div>
   </div>

   <div class="s-col-lg-4 s-col-sm-12">
     <div class="s-p-16">
      <P> Downloade SCSS grid file</P>
      <nuxt-link to="../assets/downloade/simplify.rar" download class="s-mt-10 s-btn s-btn-info-outline">Downloade</nuxt-link>
     </div>
   </div>

    <div class="s-col-lg-4 s-col-sm-12">
     <div class="s-p-16">
      <P> Downloade all SCSS files</P>
      <nuxt-link to="../assets/downloade/simplify.rar" download class="s-mt-10 s-btn s-btn-info-outline">Downloade</nuxt-link>
     </div>
   </div>

 </div>
  </div>
  </div>

  <div class="s-mt-60 s-bg-light">
    <div class="s-container s-p-10">
      <div class=" s-r-4 s-p-16">
        <p>Downloade simplify vai npm install <br> <i> $ @simplifyui/simplifyui</i></p>
        <nuxt-link to="https://www.npmjs.com/package/@simplifyui/simplifyui">simplifyui</nuxt-link>
      </div>
    </div>
  </div>

  <footer class="s-mt-60 s-p-16 s-bg-dark s-light-text">
    <div class="s-center-all" style="min-height:50vh">
      <div class="s-center">
        <div style="width:170px; margin:30px auto;">
          <img src="../static/imgs/white traingle.svg" class="s-responsive" alt="simplify">
        </div>
        <p>Subscribe to our Newsletter</p>
        <div class="s-input-group s-center-all s-light-text">
           <input type="email" class="s-input" placeholder="Email Address">
          <button class="s-btn s-btn-info">subscribe</button>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>
<script>
export default {
head () {
    return {
     
      title:'Simplify',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'simple materisl design component library'
        }
      ]
    }
  }
};
</script>

<style>
@media (max-width: 768px) {  
 .md-none{
   display: none;
 }
}
</style>