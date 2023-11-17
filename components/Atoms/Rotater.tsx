import Image from "next/image";
import React from "react";
import { Text } from "./Text";
import { ServicesDataInterface } from "../constants/services";

export default function Rotater({ data }: {data:ServicesDataInterface}) {
  return (
    <>
      <div className="overflow-hidden w-full my-6 md:my-4">
        <div className=" overflow-hidden relative w-full h-20">
          <div className="w-[200%] flex items-center justify-start absolute left-0 animate gap-4 ">
            {data.services.map((i: any) => {
              return (
                <div
                  key={i.name}
                  className="flex cursor-pointer h-[65px] w-fit bg-white justify-center items-center b-a-shadow px-[20px] py-[10px] rounded-md hover:scale-105 hover:opacity-100 duration-150"
                >
                  <div className={`mx-3 w-[${i.size}] h-auto`}>
                    <Image
                      src={i.image}
                      width={70}
                      height={50}
                      alt={i.name}
                      className=" w-full h-auto"
                    />
                  </div>
                  <Text text={i.name} classes="text-black mx-1 w-[100px] " />
                </div>
              );
            })}
            {data.services.map((i: any) => {
              return (
                <div
                  key={i.name}
                  className="flex cursor-pointer h-[65px] w-fit bg-white justify-center items-center b-a-shadow px-[20px] py-[10px] rounded-md hover:scale-105 hover:opacity-100 duration-150"
                >
                  <div className={`mx-3 w-[${i.size}] h-auto`}>
                    <Image
                      src={i.image}
                      width={70}
                      height={50}
                      alt={i.name}
                      className=" w-full h-auto"
                    />
                  </div>
                  <Text text={i.name} classes="text-black mx-1 w-[100px] " />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
