type Todo = { id: number; title: string; done: boolean };

export default function TodoItem({
  todo = { id: 0, title: "Default todo", done: false },
}: {
  todo?: Todo;
}) {
  return (
    <li className="wd-todo-item">
      <label>
        <input type="checkbox" defaultChecked={todo.done} /> {todo.title}
      </label>
    </li>
  );
}
