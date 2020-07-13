<template>
  <div id="dashboard" class="container">
    <h1>Edit Story</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Status:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="selected"
          :options="foods"
          disabled-field="notEnabled"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Story:" label-for="input-3">
        <b-form-textarea
          id="textarea-rows"
          v-model="form.body"
          placeholder="Tell us your story..."
          rows="8"
        ></b-form-textarea>
      </b-form-group>

      <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          body: '',
          food: null,
        },
        selected: 'Public',
        foods: ['Public', 'Private'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.food = null
        this.form.body = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
#dashboard {
  margin-top: 50px;
}

</style>
