import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Card from "../shared/Card";

export default function Task({
  id,
  title,
  description,
  handelDelete,
  checked,
  handelChecked,
}) {
  return (
    <Card>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handelChecked(id)}
      />

      <div
        className="text-display"
        style={checked ? { textDecoration: "line-through" } : null}
      >
        {title}
      </div>
      <div
        className="text-display"
        style={checked ? { textDecoration: "line-through" } : null}
      >
        {description}
      </div>
      <button onClick={() => handelDelete(id)} className="delete">
        <FaTrashAlt />
      </button>
    </Card>
  );
}