import React from "react";
import Warning from "../../icons/Warning";
import Typography from "../Typography";

export default function InputError({ message }) {
  return (
    <Typography
      size="sm"
      weight="normal"
      className="flex items-center justify-end mt-1 gap-1.5 text-red-700"
    >
      <Warning className="w-4 h-4 fill-red-700" />
      {message}
    </Typography>
  );
}
