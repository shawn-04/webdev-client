export default function ReduxTodoForm({
  title,
  setTitle,
  editing,
  onSubmit,
}: {
  title: string;
  setTitle: (title: string) => void;
  editing: boolean;
  onSubmit: () => void;
}) {
  return (
    <div id="wd-redux-todo-form" className="mb-2 flex flex-wrap gap-2">
      <input id="wd-redux-todo-title" className="rounded border border-neutral-300 px-2 py-1"
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="button" id="wd-redux-add-todo" onClick={onSubmit}
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white">
        {editing ? "Update" : "Add"}
      </button>
    </div>
  );
}
