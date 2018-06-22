<template>
  <b-form inline>
    <label class="sr-only" for="inlineFormInputName2">Link</label>
    <b-input class="col-7" id="inlineFormInputName2" placeholder="Enter Your Link" v-model="Submit.link" style="margin-right:5px;"/>
    <b-button variant="primary" @click="genshortlink()">Short Link</b-button>
  </b-form>
</template>

<script>
  export default {
  }
</script>

<style scoped>
</style>
