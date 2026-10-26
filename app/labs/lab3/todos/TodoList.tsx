import todos from "./todos.json";
import TodoItem from "./TodoItem";

export default function TodoList() {
  console.log(todos);
  return (
    <div id="wd-todo-list">
      <h4>Todo List</h4>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
