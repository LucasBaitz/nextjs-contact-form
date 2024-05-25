import { QueryType } from "@/interfaces/FormData";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Icons } from "../Icons/Icons";

interface QueryRadioProps {
  queryType: QueryType;
  selected: boolean;
  handleSelection: (queryType: QueryType) => void;
}

const QueryRadio: React.FC<QueryRadioProps> = ({
  queryType,
  selected,
  handleSelection,
}) => {
  return (
    <div
      className={`flex items-center align-middle p-3 border border-[#1f5b50] hover:border-[#1f5b50] rounded-lg gap-3 cursor-pointer ${
        selected && "bg-[#E0F1E7]"
      }`}
      onClick={() => handleSelection(queryType)}
    >
      {selected ? (
        <Icons.radioSelected className="ml-3" />
      ) : (
        <input
          type="radio"
          className="p-5 w-5 h-5 ml-3 border-gray-500 cursor-pointer"
          value={queryType.toString()}
          checked={selected}
          onClick={() => handleSelection(queryType)}
        />
      )}

      <Label htmlFor="support-request">Support Request</Label>
    </div>
  );
};

export default QueryRadio;
