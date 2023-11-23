export async function App() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
}
