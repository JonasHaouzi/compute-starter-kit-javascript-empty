import { Router } from "@fastly/expressly";

const PRODUCTS_BACKEND = "origin_0";
const router = new Router();
let backendResponse;

// If the URL begins with /products/
router.all("(.*)", async (req, res) => {
  // Parse the JSON response from the backend.
  const data = await backendResponse.json();

  // Add a new field to the parsed data.
  data["new_field"] = "data injected at the edge";

  // Construct a new response using the new data but original status and headers.
  res.headers = backendResponse.headers;
  res.withStatus(backendResponse.status).json(data);
});

router.listen();
