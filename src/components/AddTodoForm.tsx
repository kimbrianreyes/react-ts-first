import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done"
        className="rounded-s-md grow border-fuchsia-950 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-fuchsia-950 text-white hover:bg-fuchsia-700"
      >
        Add
      </button>
    </form>
  );
}
