<template>
  <b-container>
    <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Link</label>
      <b-input class="col-7" id="inlineFormInputName2" placeholder="Enter Your Link" v-model="Submit.link" style="margin-right:5px;"/>
      <b-button variant="primary" @click="genshortlink()">Short Link</b-button>
    </b-form>
    <p>Short Link : <a :href="getShortlink" target="_blank"> {{ getShortlink }} </a></p>
  </b-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        Submit: { link: '' }
      }
    },
    methods: {
      ...mapActions([
        'genShortlink'
      ]),
      genshortlink () {
        this.genShortlink(this.Submit)
      }
    },
    computed: {
      ...mapGetters([
        'getShortlink'
      ])
    }
  }
</script>

<style scoped>
</style>
