<template>
  <div class="flex-row align-content-center d-flex justify-content-center">
    <form class="box-login">
      <h1>Авторизация</h1>
      <div class="d-flex flex-column">
        <p class="text-muted"> Пожалуйста введите свой логин и пароль!</p>
        <input type="email" class="mb-2 form-control" v-model="data.userName" placeholder="Имя пользователя">
        <input type="password" class="mb-2 form-control" v-model="data.password" placeholder="Пароль">
        <div v-if="invalidValidation" class="mb-2 validation-failed"><label><small>Пожалуйста заполните все
          поля</small></label></div>
        <div v-if="invalidData" class="mb-2 validation-failed"><label><small>Неверные данные для входа</small></label>
        </div>
      </div>
      <input type="button" class="form-control mt-4 btn btn-dark" @click="login" value="Войти" href="#">
    </form>
  </div>
</template>
<script>
import APIService from '/src/components/APIService'

export default {
  data() {
    return {
      invalidValidation: false,
      invalidData: false,
      data: {
        userName: '',
        password: '',
      },
    }
  },
  components: {
    Api: APIService
  },
  methods: {
    async login() {
      this.invalidValidation = false;
      this.invalidData = false;
      if (!this.data.userName || !this.data.password) {
        this.invalidValidation = true;
        return
      }
      try {
        let {data} = await APIService.Post('Account/SignIn', this.data);
        localStorage.setItem('auth', data.accessToken)
        localStorage.setItem('role', data.role)
        if (data.role === 'Admin') {
          window.location = '/users';
        }
        else {
          window.location = '/diagram';
        }
      } catch (e) {
        this.invalidData = true;
        console.log(e)
      }
    },
  },
}
</script>
<style>


.validation-failed {
  color: #D42F2F;
}

.box-login {
  width: 500px;
  padding: 40px;
  /*position: center;*/
  position: absolute;
  top: 15%;
  left: 37%;
  background: #c0ded9;
  text-align: center;
  transition: 0.25s;
  margin-top: 150px
}

.box-login h1 {
  color: black;
  text-transform: uppercase;
  font-weight: 500
}

</style>