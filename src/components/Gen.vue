<template>
  <b-container>
    <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Link</label>
      <b-input class="col-7" id="inlineFormInputName2" placeholder="Enter Your Link" v-model="Submit.link" style="margin-right:5px;"/>
      <b-button variant="primary" @click="genshortlink()">Short Link</b-button>
    </b-form>
    <p id="shortlink" v-bind:style="{ display : hidden }">Short Link : <a :href="getShortlink" target="_blank"> {{ Shortlink }} </a></p>
  </b-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        Submit: { link: '' },
        Shortlink: '-',
        hidden: 'none'
      }
    },
    methods: {
      ...mapActions([
        'genShortlink'
      ]),
      genshortlink () {
        this.genShortlink(this.Submit).then(() => {
          this.Shortlink = this.getShortlink
          this.hidden = ''
        })
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
