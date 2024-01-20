export default async function getSinglePost(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const result = await response.json();
  return result;
}
