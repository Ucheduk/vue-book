<template>
  <div id="dashboard" class="container">
    <h1>Welcome {{ user.displayName }}</h1>
    <p>See all your stories</p>
    <b-table striped fixed borderless :fields="fields" :items="items" responsive="sm">

      <!-- A custom formatted column -->
      <template v-slot:cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(nameage)="data">
        {{ data.item.name.first }} is {{ data.item.age }} years old
      </template>

      <template v-slot:cell(status)>
        public
      </template>

      <template v-slot:cell(actions)>
        actions
      </template>

    </b-table>
  </div>
</template>

<script>
import * as types from '../store/types';

  export default {
    name: 'Dashboard',
    data() {
      return {
        user:  this.$store.getters[types.SELECT_CURRENT_USER],
        fields: [
          // A column that needs custom formatting
          { key: 'name', label: 'Title' },
          
          // A virtual column made up from two fields
          { key: 'nameage', label: 'Data Created' },

          // A virtual column made up from two fields
          { key: 'status', label: 'Status' },
          { key: 'actions', label: 'Actions' }
        ],
        items: [
          { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
          { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
          { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
          { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
        ]
      }
    }
  }
</script>

<style scoped>
#dashboard {
  margin-top: 50px;
}

</style>
