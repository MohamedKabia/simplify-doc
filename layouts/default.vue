<template>
  <div>
     <Appheader/>
     <Docmenue  v-if="dis"/>
     <Sponsors  v-if="dis"/>

    <nuxt />
  </div>
</template>
<script>
import Appheader from '../components/Appheader';
import Docmenue from '../components/Docmenue';
import Sponsors from '../components/Sponsors';
export default {
  components:{
    Appheader,
    Sponsors,
    Docmenue
  },
  data() {
    return {
      dis: false,
      aTz:/^[a-zA-Z]*$/,
      fullpageUrls:['\x2F','\x2Ftos','\x2Fexamples', '\x2Fexample\x2Fslider', '\x2F']
    }
  },
  methods: {
    reloadPage: ()=>{
      location.reload();
    }
  },
  mounted() {
    let loc = window.location.pathname;
    if(loc === '\x2F' || loc === '\x2Ftos' || loc === '\x2Fexamples' || loc === '\x2Fexample\x2Fslider'){
      this.dis = false;
    }
    else{
       this.dis = true;
    }
    
  },
  watch:{
    $route (to, from){
    if(this.fullpageUrls.includes(to.path)){
        this.dis = false;
        this.reloadPage()
    }
    if(this.fullpageUrls.includes(from.path)){
      if(this.fullpageUrls.includes(to.path)){
        this.dis = false;
        this.reloadPage()
      }
      else{
        this.dis = true;
        this.reloadPage()
      }
    }
    if(this.fullpageUrls.includes(from.path) && this.fullpageUrls.includes(to.path)){
      this.dis = false;
    }
}

}
}
</script>