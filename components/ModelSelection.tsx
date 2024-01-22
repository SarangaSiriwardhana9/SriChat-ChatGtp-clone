"use client";
import Select from "react-select";
import useSWR from "swr";


type Props = {};

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

const ModelSelection = ({}: Props) => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
    
<Select
  className="mt-2"
  options={models?.modelOptions}
  defaultValue={model}
  placeholder={model}
  isSearchable
  isLoading={isLoading}
  menuPosition="fixed"
  styles={{
    control: (provided: Styles) => ({
      ...provided,
      backgroundColor: "#434654", // Set your desired background color here
      borderColor: "gray-300",
      color: "white",
      text: "white",
    }),
  }}
  onChange={(e) => setModel(e.value)}
/>
    </div>
  );
};

export default ModelSelection;