<template>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      let query = this.$route.params.shortlink
      this.getReallink(query).then(() => {
        window.location.href = this.resultReallink
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