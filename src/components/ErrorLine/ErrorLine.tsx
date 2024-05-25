import React from "react";

interface ErrorLineProps {
  message: string;
}

const ErrorLine: React.FC<ErrorLineProps> = ({ message }) => {
  return <span className="h-5 text-red-600 text-sm absolute mb-10">{message || ""}</span>
};

export default ErrorLine;
