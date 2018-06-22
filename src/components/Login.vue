<template>
  <b-container>
    <b-form-group id="fieldsetHorizontal"
                horizontal
                :label-cols="4"
                breakpoint="md"
                label="Username"
                label-for="inputHorizontal">
      <b-form-input v-model="username"></b-form-input>
    </b-form-group>
    <b-form-group id="fieldsetHorizontal"
                horizontal
                :label-cols="4"
                breakpoint="md"
                label="Password"
                label-for="inputHorizontal">
      <b-form-input type="password" v-model="password"></b-form-input>
    </b-form-group>
    <b-button variant="primary" v-on:click="login()">Login</b-button>
    <p v-bind:style="{color : colorwarning, display : hidden}">Incorrect Username or Password</p>
  </b-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    data () {
      return {
        username: '',
        password: '',
        hidden: 'none',
        colorwarning: 'red'
      }
    },
    methods: {
      ...mapActions([
        'adminLogin'
      ]),
      login () {
        let json = {
          username: this.username,
          password: this.password
        }
        this.adminLogin(json).then(() => {
          if (this.getLoginData === 'success') {
            let randomstring = ''
            let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 5; i++) {
              randomstring += text.charAt(Math.floor(Math.random() * text.length))
            }
            this.$session.start()
            this.$session.set('jwt', randomstring)
            this.$router.push({name: 'Admin'})
          } else {
            this.hidden = ''
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'getLoginData'
      ])
    }
  }
</script>

<style scoped>
</style>
