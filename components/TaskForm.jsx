"use client";
import { useFormStatus } from "react-dom";
import { createTask } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please wait..." : "Create Task"}
    </button>
  );
};

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
      </div>
    </form>
  );
};

export default TaskForm;
