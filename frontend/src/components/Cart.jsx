import React, { useState } from "react";
import Page from "./Page";
import Button from "./shared/Button";

export default function Cart() {
  const [pages, setPages] = useState([
    { page: "Page 1", checked: false },
    { page: "Page 2", checked: false },
    { page: "Page 3", checked: false },
    { page: "Page 4", checked: false },
    { page: "Page 5", checked: false },
    { page: "Page 6", checked: false },
  ]);

  const allChecked = pages.every((p) => p.checked);

  const handleCheck = (index) => {
    setPages((prev) =>
      prev.map((p, i) => (i === index ? { ...p, checked: !p.checked } : p))
    );
  };

  const handleCheckAll = () => {
    setPages((prev) => prev.map((p) => ({ ...p, checked: !allChecked })));
  };

  return (
    <section className="w-[370px] h-[326px] border border-[#EEE] rounded-md py-[10px] shadow-lg">
      <div className="">
        <Page
          page={"All pages"}
          checked={allChecked}
          onChange={handleCheckAll}
        />
      </div>
      <div className="w-[90%] mx-auto border-t border-gray-300 my-2"></div>
      <main className="h-[175px] overflow-y-auto no-scrollbar">
        {pages.map((el, i) => (
          <Page
            key={i}
            page={el.page}
            checked={el.checked}
            onChange={() => handleCheck(i)}
          />
        ))}
      </main>

      <div className="w-[90%] mx-auto border-t border-gray-300 my-2"></div>
      <div className="p-2">
        <Button label={"Done"} />
      </div>
    </section>
  );
}
