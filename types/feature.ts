import Image from "next/image";
export type Feature = {
  id: number;
  icon: React.ReactElement<typeof Image>;
  title: string;
  paragraph: string;
};
