<template>
  <div class="edit">
    <h1>Edit {{temp_editing.name}} </h1>
      <ul>
      <li v-for="[key, value] of Object.entries(temp_editing)" :key="key" >
        <b>{{key}}</b> 
       {{  typeof(value) }}
        <input v-if="typeof(value) == 'string'" :value="value" />
        <input v-else-if="typeof(value) == 'number'"  type="number" :value="value" />
        <div v-else>{{value}}</div>
      </li>


    </ul>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>

     -->
     <button @click="update">Update</button>
    <button @click="close">Close editing</button>
<br>
    {{ temp_editing }}
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
    },
    update(){
      console.log(this.temp_editing)
      console.log(this.$refs)
    }
  },
  computed: {
    temp_editing() {
      return this.$store.state.editing
    },
  }
}
</script>
  