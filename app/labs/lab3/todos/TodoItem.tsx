type Todo = { title: string; status: string; done: boolean };

export default function TodoItem({
  todo = { title: "Default todo", status: "PENDING", done: false },
}: {
  todo?: Todo;
}) {
  return (
    <li className="wd-todo-item">
      <label>
        <input type="checkbox" defaultChecked={todo.done} /> {todo.title} ({todo.status})
      </label>
    </li>
  );
}
