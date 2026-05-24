export function getHeaders() {
  const token = process.env.GOREST_TOKEN;

  if (!token) {
    throw new Error("❌ GOREST_TOKEN is missing in environment variables");
  }

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
}