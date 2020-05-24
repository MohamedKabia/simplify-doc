<template>
    <div>
        <div class="s-mt-60">
            <div class="s-container">
            <div class=" s-mt-10 s-toolbar s-app s-flat s-bg-dark s-light-text">
                <div class="s-d-flex">
                    <div class="s-icon"><span class="mdi mdi-menu"></span></div>
                    <div class="s-brand-name s-list-item">Brand Name</div>
                </div>
                    <div class="s-spacer"></div>
                <nav class="s-nav-container s-light-text">
                    <ul class="s-ul">
                        <li class="s-list-item "><a href="#home" class="s-active s-list-link">Home</a></li>
                         <li class="s-list-item"><a href="#about" class="s-list-link">About</a></li>
                          <li class="s-list-item"><a href="#projects" class="s-list-link">Projects</a></li> 
                         <li class="s-list-item"><a href="#contact" class="s-list-link">Contact</a></li></ul>
                </nav>
            </div>
        </div>
            <div class="s-scroll-spy">
                <section id="home" class="s-bg-danger">
                    <div>
                         Home
                     </div>
                </section>

                 <section id="about" class="s-bg-dark">
                     <div>
                         About
                     </div>
                </section>

                 <section id="projects">
                     <div>
                         projects
                     </div>
                </section>

                 <section id="contact">
                     <div>
                         Contact
                     </div>
                </section>
            </div>
        </div>
        <div class="s-icon s-bg-light" id="btop"><span class="mdi mdi-menu"></span></div>
    </div>
</template>
<style>
   .s-scroll-spy{
       width: 100%;
   } 
   .s-scroll-spy section{
       width: 100%;
       min-height:100vh;
   }
   body{
       scroll-behavior: smooth !important;
       transition: all .3s;
   }
   #btop{
       position: fixed;
       right: 30px;
       bottom: 30px;
   }
   .s-app{
       position: fixed;
       top: 10px;
       left: 50%;
       transform: translate(-50%);
       width: inherit;
       z-index: 1000;
       border-radius:4px;
   }
</style>