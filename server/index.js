import { Hocuspocus } from "@hocuspocus/server";
import debounce from "debounce";
//import { TiptapTransformer } from "@hocuspocus/transformer";
import { writeFileSync } from "fs";

let debounced;

// Configure the server …
const server = new Hocuspocus({
  port: 1234,
  name: "local-dev-hocuspocus"
}).configure({
  async connected(data) {
    //console.log(data)
    console.log("connections/documents:", server.getConnectionsCount() + " / " + server.getDocumentsCount());
  },
  async onChange(data) {
    const save = () => {
      // Convert the y-doc to something you can actually use in your views.
      // In this example we use the TiptapTransformer to get JSON from the given
      // ydoc.
      // const prosemirrorJSON = TiptapTransformer.fromYdoc(data.document);
      let docJSON = data.document.getArray('tasks').toJSON()
      console.log(docJSON)
      console.log(data.context.user)
      // Save your document. In a real-world app this could be a database query
      // a webhook or something else
      writeFileSync(`../documents/${data.documentName}.json`, JSON.stringify(docJSON));

      // Maybe you want to store the user who changed the document?
      // Guess what, you have access to your custom context from the
      // onConnect hook here. See authorization & authentication for more
      // details
      //  console.log(`Document ${data.documentName} changed by ${data.context.user.name}`);
    };

    debounced?.clear();
    debounced = debounce(save, 4000);
    debounced();
  },
});


/* https://tiptap.dev/hocuspocus/server/configuration
Setting 	Description 	Default value
name 	A name for the instance, used for logging. 	
port 	The port the server should listen on. 	80
timeout 	A connection healthcheck interval in milliseconds. 	30000 (= 30s)
debounce 	Debounces the call of the onStoreDocument hook for the given amount of time in ms. Otherwise every single update would be persisted. 	2000 (= 2s)
maxDebounce 	Makes sure to call onStoreDocument at least in the given amount of time (ms). 	10000 (= 10s)
quiet 	By default, the servers show a start screen. If passed false, the server will start quietly.

 https://tiptap.dev/hocuspocus/server/methods
Method 	Description
listen(portOrCallback, callback) 	Start the server.
configure(configuration) 	Pass custom settings.
handleConnection(incoming, request, context) 	Bind the server to an existing server instance.
getDocumentsCount() 	Get the total number of active documents
getConnectionsCount() 	Get the total number of active connections
closeConnections(documentName?) 	Close all connections, or to a specific document.
destroy() 	Stop the server.
*/
/*
server.handleConnection(incoming, request, context){
    console.log("incoming", incoming)
    console.log("request", request)
    console.log("context", context)
let documentsCount = server.getDocumentsCount() 
let connectionsCount = server.getConnectionsCount() 
console.log(documentsCount, connectionsCount)


}*/

// … and run it!
server.listen();