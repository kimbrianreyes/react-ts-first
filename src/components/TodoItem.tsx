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
          className="scale-125"
        />
        <span
          className={todo.completed ? "line-through text-blue-500-400" : ""}
        >
          {todo.title}
        </span>
      </label>
    </div>
  );
}
