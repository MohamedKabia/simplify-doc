<template>
    <div class="s-card">
        <div class="s-toolbar app s-light-text s-bg-primary">
                <div class="s-md-none ">
                    <div class="s-icon"><span class="mdi mdi-menu s-trigger" data-toggle="#menu"></span></div>
                </div>
                <div class="s-ml-10">
                    <nuxt-link to="/">
                        <div class="logo">
                        <div class="s-d-flex s-align-center">
                            <div class="simplify ml-0">Simplify</div>
                        </div>
                        </div>
                   </nuxt-link>
                </div>
                
                <div class="s-spacer"></div>
                <div class="s-dropdown s-flat d-right s-md-none">
                <div class="s-ddown-title">
                    Menu <div class="s-icon s-ml-5"><span class=" mdi mdi-chevron-down s-arrow"></span></div>
                    </div>
                    <ul class="s-ddown-menu s-bg-light s-dark-text">
                    <li class="s-ddown-item"><nuxt-link to="/docs" class="s-list-link">Documentation</nuxt-link></li>
                    <li class="s-ddown-item"><nuxt-link to="/tos" class="s-list-link">TOS</nuxt-link></li>
                    <li class="s-ddown-item"><button class="s-btn s-list-link s-dialog-toggle"  data-target="#dialog4">Report</button></li>
                    <li class="s-ddown-item"><nuxt-link to="/examples" class="s-list-link">Examples</nuxt-link></li>
                    </ul>
                </div>
                <nav class="s-nav-container s-sm-none">
                    <ul class="s-ul">
                        <li class="s-list-item"><nuxt-link to="/docs" class="s-list-link">Documentation</nuxt-link></li>
                        <li class="s-list-item"><nuxt-link to="/tos" class="s-list-link">TOS</nuxt-link></li>
                        <li class="s-list-item"><div class="s-light-text s-list-link s-dialog-toggle"  data-target="#dialog4">Report</div></li>
                        <li class="s-list-item"><nuxt-link to="/examples" class="s-list-link">Examples</nuxt-link></li>
                    </ul>
                </nav>
            <!--end-->
        </div>
        <report/>
    </div>
</template>
<script>
import report from '../components/Report';
export default {
    components:{
        report
    }
}
</script>
<style>
.s-50p{
    width: 70px;
}
.logo{
    font-size: 24px;
    cursor: pointer;
}
.s-toolbar .nuxt-link-active{
    color: white;
    text-decoration: none;
}
.ml-0{
    margin-left: 0;
}
.app{
    position: fixed;
    top: 0;
    z-index: 1000;
}
</style>