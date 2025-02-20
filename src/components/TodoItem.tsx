import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-fuchsia-300 bg-fuchsia-50 hover:bg-fuchsia-200">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125 accent-pink-700"
        />
        <span className={todo.completed ? "line-through text-pink-500" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}
