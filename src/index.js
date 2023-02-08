import { Router } from "@fastly/expressly";
 
const PRODUCTS_BACKEND = "origin_0";
const router = new Router();
let backendResponse;

// Configure middleware that automatically proxies request
// asynchronously to your backend and sets the global variable
// for use in all your base request handlers.
router.use(async (req, res) => {
  backendResponse = await fetch(req, {
    backend: PRODUCTS_BACKEND
  });
});

// If the URL begins with /products/
router.all("(.*)", async (req, res) => {
  // Parse the JSON response from the backend.
  const data = await backendResponse.text();
  console.log("JOJO");
  console.log(typeof data);
  console.log(data);
  let data2 = data.replace('ok', 'ok-but-optimized.jpg');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('a', 'b');
  data2 = data2.replace('ok', 'ok-but-optimized.jpg');
  data2 = data2.replace('ok', 'ok-but-optimized.jpg');
console.log(typeof res);
console.log(res.constructor.name);
  console.log(data2);

  // Construct a new response using the new data but original status and headers.
  //res.headers = backendResponse.headers;
  res.withStatus(backendResponse.status).send(data2);
});

router.listen();
