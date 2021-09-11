<template>
  <headerBar/>

  <div class="dashboard">
    <sideBar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import headerBar from './components/Header';
import sideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    headerBar,
    sideBar
  },

  mounted() {
    if (!localStorage.getItem('auth')) {
      this.$router.push({name: 'login'});
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(to right, #eaece5, #eaece5)
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100vw;
  /*background-color: #23272B;*/
  /*background-color: #13161a;*/
  height: 100vh;

}

</style>
