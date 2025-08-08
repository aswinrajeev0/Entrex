import React, { JSX } from "react";

interface MyComponentProps {
  svg: JSX.Element;
  provisionName: string;
}

const ProvisionCard:React.FC<MyComponentProps> = ({svg, provisionName}) => {
    return (
        <div className="w-[250px] h-[130px] flex flex-col items-center justify-center text-center border border-gray-300 rounded-[20px] shadow-sm p-4">
            {svg}
            <h1 className="mt-2 text-md font-medium">{provisionName}</h1>
        </div>
    )
}

export default ProvisionCard