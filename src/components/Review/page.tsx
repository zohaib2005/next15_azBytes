export default async function Review() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <h2>Review Page</h2>
}