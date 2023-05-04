import React from "react";

function SubCategory({ icon, title }) {
  return (
    <div className="group flex h-36 w-[10.625rem] flex-none flex-col items-center justify-center gap-4 rounded border duration-300 hover:border-secondary2 hover:bg-secondary2">
      <div className="text-6xl text-black duration-300 group-hover:text-text">
        {icon}
      </div>
      <p className="duration-300 group-hover:text-text">{title}</p>
    </div>
  );
}

export default SubCategory;
