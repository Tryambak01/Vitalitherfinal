import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function Options({
  choices,
  onSelect,
  value,
  selected,
  disabled,
}) {
  // const handleSelect = (choiceIndex) => {
  //   setSelected(choiceIndex);
  //   onSelect(choiceIndex);
  // };

  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={onSelect}>
          <RadioGroup.Label className="sr-only"></RadioGroup.Label>
          <div className="space-y-2">
            {choices?.map((choice, i) => (
              <RadioGroup.Option
                key={i + 1}
                value={i}
                disabled={disabled}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-[#54273c] bg-opacity-75 text-white"
                      : "bg-white bg-opacity-50"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md hover:shadow-xl hover:bg-[#54273c] hover:text-white focus:outline-none`
                }
                onClick={() => onSelect(i)}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "hover:text-white"
                            }`}
                          >
                            {choice}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
