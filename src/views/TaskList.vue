<template>
  <div class="task">
    <h1>TaskList</h1>
   


<ul>
  <li v-for="task in taskList" :key="task" >
    <TaskListElement :task="task"  /> 

  </li>
</ul>


<div v-if="debug==true">

  {{  taskList  }}
</div>




  </div>
</template>
  
<script>
// @ is an alias to /src
import TaskListElement from '@/views/TaskListElement.vue'

//import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";

// Connect it to the backend
const provider = new HocuspocusProvider({
  url: "ws://127.0.0.1:1234",
  name: "example-document1",
});


// Define `tasks` as an Array
const tasks = provider.document.getArray("tasks");

// Listen for changes


// Add a new task
//tasks.push(["buy milk"]);



export default {
  name: 'TaskList',
  components: {
    TaskListElement
  },
  data(){
    return {
      taskList : [],
      debug: true
    }
  },
  created(){
    tasks.observe(() => {
 // console.log("tasks were modified");
  
  this.taskList = tasks.toJSON().reverse()
  console.log(this.taskList)
});
  },
  methods: {
   /* add() {
      tasks.push([this.$refs.task.value]);
      this.$refs.task.value = ""
    }*/
  }
}
</script>
  