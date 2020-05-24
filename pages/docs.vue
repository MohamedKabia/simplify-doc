<template>
    <div>
        <div class="center-aside s-p-16">
            <div class="s-heading s-primary-text">
                Introduction:
            </div>
            <div class="intro">
                <p>Simplify is a front-end web UI library with different components
                     to choose from. No design skill is required. Simplify components are mobile-responsive 
                     and can be easily adjusted to suit any design pattern using our CSS classes. With Simplify, 
                     developers have the chance to use only the JavaScript required for a component that uses Javascript.
                </p>
            </div>
            <div class="s-mt-60">
                <h3>Example</h3>
                <p>The forms below are designed with Simplify classes. The 1st form has rounder curves compared to the 2nd form,
                     which has a more block-like feel. This difference in design is achieved by adding
                     <span class="s-danger-text">s-r-20</span> class to the 1st form</p>
                     <div>
                        <p> Note=> <span class="s-danger-text">s-r-20</span> gives a border radius of 20px to all sides of an element</p>
                     </div>
                <div class="s-row">
                    <div class="s-col-md-6">
                        <div class="s-card s-p-16 s-r-4">
                            <form class="s-form">
                                <div class="s-form-label s-primary-text"> Login</div>
                                <label for="User Name" class="s-fluid"> Uername</label>
                                <input type="text" class="s-input s-fluid s-r-20">
                                <label for="password" class=" s-fluid"> Password</label>
                                <div class="s-password">
                                    <input type="password" class=" s-input s-fluid s-r-20 s-required">
                                </div>
                                <button class="s-btn s-btn-primary-outline s-r-20 s-mt-16 s-form-btn">login</button>
                            </form>
                        </div>
                    </div>

                     <div class="s-col-md-6">
                        <div class="s-card s-p-16 s-r-4">
                            <form class="s-form">
                                <div class="s-form-label s-primary-text"> Login</div>
                                <label for="User Name" class="s-fluid"> Username</label>
                                <input type="text" class="s-input s-fluid s-required">
                                <label for="password" class=" s-fluid"> Password</label>
                                <input type="password" class="s-input s-fluid s-required">
                                <button class="s-btn s-btn-primary-outline  s-mt-16 s-form-btn">login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="s-mt-20">
                <p class="s-mt-10">
                   The script required for any component that uses javascript is provided in the documentation. developers can edit it to suit their preference.
                    Note: if Simplify Javascript is included in your chosen Simplify file or CDN, loading this script is not required.
                </p>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    head () {
    return {
      title: 'Documentation',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify documentation, Downloade files ' }
      ]
    }
  },
    methods: {
        
    },
    mounted() {

    },
    computed: {
      
    },
    created() {
     
    }
}
</script>
<style>
  
</style>