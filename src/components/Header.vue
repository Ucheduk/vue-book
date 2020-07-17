<template>
  <div id="header">
    <b-navbar class="container" toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand class="text-center"><router-link to="/">VueBook</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link v-if="user" to="/dashboard">Dashboard</router-link>
          <router-link v-if="user" to="/stories">All Stories</router-link>
          <a v-if="user" @click="logout">Logout</a>
          <router-link v-else to="/login">Login</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
 name: 'Header',
 computed: {
  ...mapGetters({
      user: types.SELECT_CURRENT_USER
  })
 },
 methods: {
  async logout() {
    await this.$store.dispatch(types.SIGN_OUT_START);
    this.$router.replace('/')
  }
 }
}
</script>

<style>
  #header {
    background-color: #6c757d;
    width: 100%;
    /* height: 70px; */
  }
  a {
    color: #fff;
    margin: 0 10px;
  }
  a:not([href]) {
    color: #fff;
  }
  a:hover {
    color: var(--blue);
    text-decoration: none;
  }
</style>