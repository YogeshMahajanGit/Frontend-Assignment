import React from "react";
import CheckBox from "./shared/CheckBox";

export default function Page({ page, checked, onChange }) {
  return (
    <div className="w-[370px] h-[42px] flex items-center justify-between py-3 pr-4 pl-6 ">
      <div>{page}</div>
      <div>
        <CheckBox
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
