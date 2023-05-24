<template>
  <div class="edit">
    <h1>Edit</h1>
    <div>Task {{ temp_editing }}</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>

     -->
    <button @click="close">Close editing</button>
  </div>
</template>
  
<script>
// @ is an alias to /src
//import TaskView from '@/views/TaskView.vue'

export default {
  name: 'TaskEdit',

  /* components: {
     TaskView
   }*/
  methods: {
    close() {
      this.$store.commit('setEditing', null)
    }
  },
  computed: {
    temp_editing() {
      return this.$store.state.editing
    },
  }
}
</script>
  