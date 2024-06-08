// @ts-ignore
import { useLottie } from "lottie-react";
import React from "react";

// const LoadingComponent = ({ animationData, sizew,sizeh }) => {
const LoadingComponent = ({ animationData, size }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);
  
  // return (
  //   <div className="border-bg-grey" style={{ width: sizew, height: sizeh, margin: 0, padding: 0, display: 'inline-block' }}>
  //     {View}
  //   </div>
  // );
  return <div className={`w-${size} h-auto max-w-[850px]`} >{View}</div>;
};

export default LoadingComponent;