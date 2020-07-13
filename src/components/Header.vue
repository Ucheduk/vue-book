<template>
  <div id="header">
    <b-navbar class="container" toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand class="text-center"><router-link to="/">VueBook</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/stories">All Stories</router-link>
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
 name: 'Header'
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
  a:hover {
    color: var(--blue);
    text-decoration: none;
  }
</style>