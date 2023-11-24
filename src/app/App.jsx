import { Suspense } from "react";
import Counter from "./Counter";

async function Todos() {
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

export async function App() {
  return (
    <div>
      <h1>My todos sdf</h1>
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
}
