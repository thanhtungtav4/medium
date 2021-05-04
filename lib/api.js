export function getWPURL(path = "") {
  return `${
    process.env.WORDPRESS_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getWPURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}