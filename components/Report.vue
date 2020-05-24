<template>
    <div>
        <section>                
            <div class="s-dialog "  id="dialog4">
                <div class="s-dialog-container s-larg">
                    <form  class="s-form">
                        <div class="s-input-group s-mt-6">
                            <div class="s-icon"><span class="mdi mdi-account"></span></div>
                            <input type="text" class="s-input" placeholder="Name">
                        </div> 
                        <div class="s-input-group s-mt-6">
                            <div class="s-icon"><span class="mdi mdi-email"></span></div>
                            <input type="email" class="s-input" placeholder="Email">
                        </div> 
                        <div class="s-input-group s-mt-6">
                            <div class="s-icon"><span class="mdi mdi-toy-brick-outline "></span></div>
                            <input type="text" class="s-input" placeholder="component">
                        </div> 
                        <textarea name="" id=""  rows="10" class="s-card-1 s-mt-10 s-fluid">

                        </textarea>
                         <div class="s-dialog-actin s-mt-10">
                            <button class="s-btn s-btn-light">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
     head () {
    return {
      title: 'Report a bug  Simplify',
      meta: [
        { hid: 'description', name: 'description', content: 'Report a bug or contact us  Simplify' }
      ]
    }
  }
}
</script>