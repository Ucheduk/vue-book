<template>
  <div class="hello container">
    <div class="row justify-content-center">
      <b-card class="card text-center">
        <b-card-title><b-icon-book-half></b-icon-book-half> VueBook</b-card-title>
        <b-card-text>Create public and private stories from your daily activities</b-card-text>
        <hr>
        <router-link to="/story/new" class="btn btn-primary">Create Story</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'Home',
  data() {
    return {
      user: this.$store.getters[types.SELECT_CURRENT_USER],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 150px;
}
.card {
  width: 300px;
}
a {
  color: #fff;
}
</style>
