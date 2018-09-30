<template>
  <div>
    sds
  </div>
</template>

<script>
export default {
  name: 'Video',
  components: {

  }
}
//
//
// var appRouter = function(app) {
//
// 	app.get('/', function(req, res) {
//     	return res.send('Welcome to Intuit Webhooks Sample App');
// 	});
//
// 	 /**
//      * Method to receive webhooks event notification
//      * 1. Validates payload
//      * 2. Adds it to a queue
//      * 3. Sends success response back
//      *
//      * Note: Queue processing happens asynchronously
//      */
//
// 	app.post('/webhooks', function(req, res) {
//
// 		var payload = JSON.stringify(req.body);
// 		var signature = req.get('intuit-signature')
//
// 		// if signature is empty return 401
// 		if (!signature) {
// 			return res.status(401).send('FORBIDDEN');
// 		}
//
// 		// if payload is empty, don't do anything
// 		if (!payload) {
// 			return res.status(200).send('success');
// 		}
//
// 		// validate signature
// 		if (util.isValidPayload(signature, payload)) {
//
// 			// add to queue
// 			queue.addToQueue(payload);
// 			console.log('task added to queue ');
//
// 			return res.status(200).send('success');
// 		} else {
// 			return res.status(401).send('FORBIDDEN');
// 		}
// 	});
// }
//
// app.post('/', (req, res) => {
//     // check if verification token is correct
//     if (req.query.token !== token) {
//         return res.sendStatus(401);
//     }
//
//     // print request body
//     console.log(req.body);
//
//     // return a text response
//     const data = {
//         responses: [
//             {
//                 type: 'text',
//                 elements: ['Hi', 'Hello']
//             }
//         ]
//     };
//
//     res.json(data);
// });

app.post('/webhook', (req, res) => {

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});
</script>

<style scoped lang="scss">

</style>
