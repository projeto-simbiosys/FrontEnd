import React from "react";

export default function TeamMember({ name, role, img }) {
  return (
    <div className="text-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 mx-auto rounded-full object-cover shadow-md mb-4"
      />
      <h4 className="font-semibold text-lg text-[#005C99]">{name}</h4>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}
