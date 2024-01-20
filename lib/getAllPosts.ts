export default async function getAllPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?limit=10'
  );
  if (!response.ok) {
    throw new Error('There was an Error fetching posts');
  }
  return response.json();
}
