<template>
  <div class="hello container">
    <div class="row justify-content-center">
      <b-card class="card text-center">
        <b-card-title><b-icon-book-half></b-icon-book-half> VueBook</b-card-title>
        <b-card-text>Create public and private stories from your daliy activties</b-card-text>
        <hr>
        <router-link to="/login" class="btn btn-primary">Login or Signup with Google</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to your vue book'
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