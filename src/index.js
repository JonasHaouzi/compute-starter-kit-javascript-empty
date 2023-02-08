/// <reference types="@fastly/js-compute" />
 
const handler = async (event) => {
  // Get the request from the client.
  const req = event.request
console.log(req);  
const beresp = await fetch(req, {
    backend: "origin_0"
  })


  // Send our response back to the client.
  return beresp;
};

addEventListener("fetch", event => event.respondWith(handler(event)));
