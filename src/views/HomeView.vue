<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->
   <TaskView />
  </div>
</template>

<script>
// @ is an alias to /src
import TaskView from '@/views/TaskView.vue'

export default {
  name: 'HomeView',
  components: {
    TaskView
  }
}
</script>
