/// <reference types="@fastly/js-compute" />

addEventListener("fetch", async (event) => {

  const req = event.request;

  let backendResponse = await fetch(req, {
    backend: "origin_0"
  });

/*  if (backendResponse.status == 200) {
    // Parse the URL so we can determine the path.
    let url = new URL(req.url);
console.log("JOJO");
    // If the request is to a product endpoint...
    if (url.pathname.startsWith('/products/')) {
      // Parse the JSON response from the backend.
      let data = await backendResponse.json();

      // Add a new field to the parsed data.
      data["new_field"] = "data injected at the edge";

      // Construct a new response using the new data but original status and headers.
      backendResponse = new Response(JSON.stringify(data), {
        status: backendResponse.status,
        headers: backendResponse.headers
      });
    }
  }
*/
  // Send the backend response to the client.
  event.respondWith(backendResponse);
});
