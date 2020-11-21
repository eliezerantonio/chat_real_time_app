<template>
  <div id="app">

<NavbarPublic/>
<router-view/>
<MyFooter/>

  </div>
</template> 

<script>

import NavbarPublic from './components/NavbarPublic';
import MyFooter from  './components/MyFooter';
export default {
  name: 'app',
  components: {
    NavbarPublic,
    MyFooter,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
