<template>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      let query = this.$route.params.shortlink
      this.getReallink(query).then(() => {
        let checkhttp = this.resultReallink.split('/')
        let redirecturl = ''
        if (checkhttp.includes('http:') || checkhttp.includes('https:')) {
          redirecturl = this.resultReallink
        } else {
          redirecturl = 'http://' + this.resultReallink
        }
        window.location.href = redirecturl
      })
    },
    computed: {
      ...mapGetters([
        'resultReallink'
      ])
    },
    methods: {
      ...mapActions([
        'getReallink'
      ])
    }
  }
</script>