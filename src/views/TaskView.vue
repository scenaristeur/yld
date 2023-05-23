<template>
  <div class="task">
    <h1>TaskView</h1>
    <input ref="task" @keyup.enter="add" />
    <button @click="add">Add</button>

  </div>
</template>
  
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

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
tasks.observe(() => {
 // console.log("tasks were modified");
  console.log(tasks.toJSON())
});

// Add a new task
//tasks.push(["buy milk"]);



export default {
  name: 'TaskView',
  components: {
    // HelloWorld
  },
  methods: {
    add() {
      tasks.push([this.$refs.task.value]);
      this.$refs.task.value = ""
    }
  }
}
</script>
  