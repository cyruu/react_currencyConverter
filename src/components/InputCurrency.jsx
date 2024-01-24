import React, { useState } from "react";

function InputCurrency({
  title,
  curValue,
  onChangeCurValue,
  currList,
  def,
  onChangeCur,
}) {
  return (
    <>
      <div className="bg-gray-200 text-black px-10 py-5 rounded-xl flex flex-col items-start mb-1">
        <p className="mb-2 text-sm">{title}</p>
        <div className="flex w-[300px]">
          <select
            className="bg-gray-200 flex flex-1 p-2 mr-7 rounded"
            style={{ border: "1px solid gray" }}
            onChange={onChangeCur}
          >
            <option key={def} className="text-center">
              {def}
            </option>
            {currList.map((x) => (
              <option key={x} className="text-center">
                {x}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="flex p-2 bg-transparent outline-none w-[50%] text-center"
            style={{ borderBottom: "1px solid gray" }}
            value={curValue}
            onChange={onChangeCurValue}
          />
        </div>
      </div>
    </>
  );
}

export default InputCurrency;
