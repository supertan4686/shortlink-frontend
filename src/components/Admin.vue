<template>
  <b-container fluid>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Statistic of click shortlink System</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              Menu
            </template>
            <b-dropdown-item href="#" @click='logout()'>Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <b-row>
        <b-col cols="12" style="margin-top:30px;">
          <h1>Statistic of click shortlink</h1>
        </b-col>
      </b-row>
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
      if (this.$session.exists()) {
        this.fetchStatlinks()
      } else {
        this.$router.push({name: 'Login'})
      }
    },
    methods: {
      ...mapActions([
        'fetchStatlinks'
      ]),
      logout () {
        this.$session.destroy()
        this.$router.push('/admin/login')
      }
    }
  }
</script>

<style scoped>
  .container-fluid{
    padding :0;
  }
</style>
