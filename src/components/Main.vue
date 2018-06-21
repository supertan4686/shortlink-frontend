<template>
  <b-container fluid>
    <Navbar></Navbar>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-table striped hover 
            :items="getStatlinks" 
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage">
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="getStatlinks.length" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        fields: [
          {
            key: 'id',
            label: 'ID',
            sortable: true
          },
          {
            key: 'shortlink',
            label: 'Short Link',
            sortable: true
          },
          {
            key: 'reallink',
            label: 'Real Link',
            sortable: true
          },
          {
            key: 'amount',
            label: 'Amount',
            sortable: true
          }
        ],
        currentPage: 1,
        perPage: 5,
        pageOptions: [ 5, 10, 25, 20, 25, 30, 35, 40, 45, 50, 100 ]
      }
    },
    computed: {
      ...mapGetters([
        'getStatlinks'
      ])
    },
    created () {
      this.fetchStatlinks()
    },
    methods: {
      ...mapActions([
        'fetchStatlinks'
      ])
    },
    components: {
      Navbar
    }
  }
</script>

<style scoped>
  .container-fluid{
    padding :0;
  }
</style>
