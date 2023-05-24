<template>
  <div class="task">
   {{  task }}
  </div>
</template>
  
<script>

export default {
  name: 'TaskListElement',
  components: {
    // HelloWorld
  },
  props: ["task"],
  data(){
    return {
     // taskList : []
    }
  },
/*  created(){
    tasks.observe(() => {
 // console.log("tasks were modified");
  
  this.taskList = tasks.toJSON()
  console.log(this.taskList)
});
  },*/
  methods: {
   /* add() {
      tasks.push([this.$refs.task.value]);
      this.$refs.task.value = ""
    }*/
  }
}
</script>
  