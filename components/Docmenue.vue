<template>
    <div>
        <div class="left-aside s-card s-row-colums">
                <div class="logo s-card .s-order-sm-2">
                    <img src="../static/imgs/blue w trianle.svg" alt="simplify" class="s-responsive">
                </div>

                <div class=".s-order-sm-1 s-sm-none" id="menu">
                <ul class="s-list" @click.prevent="currentTab">
                <li class="s-list-item">
                   <nuxt-link  class="s-list-link" to="/docs" v-bind:class="{'s-active':doc}">
                       Getting started 
                   </nuxt-link>
                </li>
                 <li class="s-list-item" >
                    <nuxt-link to="/accordion" class="s-list-link">
                        Accordion
                    </nuxt-link>
                </li>
                <li class="s-list-item" >
                    <nuxt-link to="/alerts" class="s-list-link">
                        Alerts
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/buttons" class="s-list-link">
                        Buttons
                    </nuxt-link>
                </li>
                 <li class="s-list-item">
                     <nuxt-link to="/card" class="s-list-link">
                        Cards
                    </nuxt-link>
                </li>
                 <li class="s-list-item">
                     <nuxt-link to="/checkbox" class="s-list-link">
                        Checkbox
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/classes" class="s-list-link">
                        Classes 
                    </nuxt-link>
                </li>
                 <li class="s-list-item">
                     <nuxt-link to="/dialogs" class="s-list-link">
                        Dialogs
                    </nuxt-link>
                </li>
                 <li class="s-list-item">
                     <nuxt-link to="/drawers" class="s-list-link">
                        Drawers
                    </nuxt-link>
                </li>
                 <li class="s-list-item">
                     <nuxt-link to="/dropdowns" class="s-list-link">
                        Dropdowns
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/forms" class="s-list-link">
                        Forms
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/grid" class="s-list-link">
                        Grids
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/input" class="s-list-link">
                        Inputs
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/tables" class="s-list-link">
                        Tables
                    </nuxt-link>
                </li>
                <li class="s-list-item">
                     <nuxt-link to="/toolbar" class="s-list-link">
                        Toolbars
                    </nuxt-link>
                </li>
              </ul>
                </div>
            </div> 
    </div>
</template>
<script>
export default {
   data() {
       return {
           link:'',
           doc:false,
           url:['accordion','alerts','buttons','card','checkbox','classes','dialogs','docs','drawers','dropdowns','examples','forms','grid','input']
       }
   },
   mounted() {
        console.log(this.$route.name);
        let name =this.$route.name;
        for(let i=0; i < this.url.length; i++){
            if(this.url[i] == name){
                console.log('urll',this.url[i]);
                this.url[i] =true
            }
        }
    },
    methods: {
        currentTab: e=>{
            let target = e.target;
            console.log(target);
            if(target.classList.contains('s-list-link')){
               document.querySelectorAll(".s-list-item").forEach(function(element) {
                    element.classList.remove('s-active');
                });
                target.closest('.s-list-item').classList.add('s-active')
            }
            location.reload();
            target.closest('.s-list-item').classList.add('s-active')
        },

        pathname: ()=>{
            console.log('goooo',this.link)
        }
    },
    computed: {
        trythis: ()=>{
            return this.$route.name
        }
    },
}
</script>
<style>
.nuxt-link-exact-active{
    color: #4353e2;
}
#menu{
    height: 0;
    transition: ease-in-out .3s;
}
</style>