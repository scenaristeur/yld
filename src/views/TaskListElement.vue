<template>
  <div class="task">
    <button @click="edit">{{ task.name }}</button> , {{ task.created }} <button @click="remove">remove</button>
  </div>
</template>
  
<script>

export default {
  name: 'TaskListElement',
  components: {
    // HelloWorld
  },
  props: ["task"],
  data() {
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
    edit() {
      console.log("edit", this.task)
     // this.$router.push({ path: '/edit/'+this.task.name })
      this.$store.commit("setEditing", this.task)
    },
    remove() {
      console.log("remove", this.task)
    }
    /* add() {
       tasks.push([this.$refs.task.value]);
       this.$refs.task.value = ""
     }*/
  }
}
</script>
  