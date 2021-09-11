<template>
  <div v-if="auth" class="sidebar">
    <div class="menu-items">
      <div class="menu-item">
        <div class="link-container">
          Процесс
        </div>
      </div>
      <div class="menu-item">
        <div class="link-container">
          Событие
        </div>
      </div>
      <div class="menu-item">
        <div class="link-container">
          Соединение
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "SideBar",
  computed: {
    auth() {
      return localStorage.getItem('auth');
    },
    admin() {
      return localStorage.getItem('role') === 'Admin';
    },
  }
}
</script>


<style scoped>
.sidebar {
  background: linear-gradient(to right, #b2c2bf, #b2c2bf);

  /*background: #b2c2bf;*/
  color: black;
}

.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  /*margin-top: 40px;*/
}

.menu-icon > * {
  width: 30px;
  height: 30px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 0px 3px;
}

.menu-items > * {
  text-decoration: none;
  /*margin-top: 60px;*/
}

.link-container {
  padding: 2px 5px;
  font-size: 20px;
  color: black;
}

.menu-item {
  display: flex;
  flex-direction: row;
  padding: 0 2px;
  text-underline: none;
  outline: none;
}

.side-btn:focus {
  outline: none;
}

.side-btn {
  border: none;
  padding: 8px 0px;
  cursor: pointer;
  font-size: 16px;
  color: white;
}

.logo {
  color: white;
  min-height: 100px;
  min-width: 100px;
  /*font-size: 24px;*/
  margin-top: 10px;
}

.side-btn.active {
  border: none;
  padding: 8px 0px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #343A40;
  /*background-color: #8994A0;*/
  /*background-color: black;*/
}
</style>