<template>
  <div class="hello container">
    <div class="row justify-content-center">
      <b-card class="card text-center">
        <b-card-title><b-icon-book-half></b-icon-book-half> VueBook</b-card-title>
        <b-card-text>Create public and private stories from your daliy activties</b-card-text>
        <hr>
        <a @click="signIn" class="btn btn-primary">Login or Signup with Google</a>
      </b-card>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'Login',
  data() {
    return {
      user:  this.$store.getters[types.SELECT_CURRENT_USER]
    }
  },
  methods: {
    async signIn() {
      console.log('signIn')
      const user = await this.$store.dispatch(types.GOOGLE_SIGN_IN_START);
      if (user) this.$router.replace('dashboard')
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