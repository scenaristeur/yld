<template>
  <div class="task">
    <h1>TaskView</h1>
  
    <TaskEdit v-if="editing != null"/>

    <input placeholder="new document name" ref="task" @keyup.enter="add" />

    <TaskList />
    <br>
    config (todo) :
    <input placeholder="sync server" :value="syncServer" />
    <input placeholder="document name" :value="documentName" />
    <input placeholder="user name" :value="userName" />

  

  </div>
</template>
  
<script>
// @ is an alias to /src
import TaskList from '@/views/TaskList.vue'
import TaskEdit from '@/views/TaskEdit.vue'
import { v4 as uuidv4 } from 'uuid';

//import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";


const provider = new HocuspocusProvider({
        url: "ws://127.0.0.1:1234",
        name: "example-document1",
      });
     // console.log(this.provider)
      // Define `tasks` as an Array
      const tasks = provider.document.getArray("tasks");

 

export default {
  name: 'TaskView',
  components: {
    TaskList,
    TaskEdit
  },
  data() {
    return {
      syncServer: "ws://127.0.0.1:1234",
      documentName: "example-document1",
      provider: null,
      userName: "anonymous"

    }
  },
  async created() {
  //  this.initProvider()
  },
  methods: {
   /* initProvider() {
      let app = this
      this.provider = new HocuspocusProvider({
        url: app.syncServer,
        name: app.documentName,
      });
      console.log(this.provider)
      // Define `tasks` as an Array
      this.tasks = this.provider.document.getArray("tasks");

      // Listen for changes
      this.tasks.observe(() => {
        // console.log("tasks were modified");
        console.log(this.tasks.toJSON())
      });
    },*/
    add() {
      let host = "http://localhost/"
      let baseIri = host + "yld/"
      let date = Date.now()
      let name = this.$refs.task.value
      //let id = baseIri + this.$refs.task.value + "_" + date
      let id = encodeURI(baseIri + this.userName + "/"+this.documentName + "/" + uuidv4())
      let task = {
        "@context":
        {
          "@base": baseIri,
          "sch": "http://schema.org/",
          "as": "https://www.w3.org/ns/activitystreams",
          "ical": "http://www.w3.org/2002/12/cal/ical#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "ical:dtstart": {
            "@type": "xsd:dateTime"
          },
        },
        "@id": id,
        "@type": "sch:DigitalDocument",
        "name": name,
        "created": date
        //"jobTitle": "Professor",
        //"telephone": "(425) 123-4567",
        //"url": "http://www.janedoe.com"
      }
      tasks.push([task]);
      this.$refs.task.value = ""
    }
  },
  computed: {
    editing() {
      return this.$store.state.editing
    },
  }
}
</script>
  