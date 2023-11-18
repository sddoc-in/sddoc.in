import { Feature } from "@/types/feature";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src="/services/feature/ui.png" alt="fron end " width={100} height={100} /> ,
    title: "MERN stack",
    paragraph:
      "We build responsive, interactive, and user-friendly web applications using React, Nextjs, Angular, and Vue.",
  },
  {
    id: 1,
    icon: <Image src="/services/feature/android.png" alt="android " width={100} height={100} /> ,
    title: "Mobile app development",
    paragraph:
      "We build native and cross-platform mobile apps for Android and iOS using React Native, Ionic, Flutter, and Xamarin.",
  },
  {
    id: 1,
    icon: <Image src="/services/feature/restapi.png" alt="API" width={100} height={100} /> ,
    title: "API data integration",
    paragraph:
      "We integrate your app with third-party APIs such as Google Maps, Facebook, Twitter, and other services.",
  },
  {
    id: 1,
    icon: <Image  src="/services/feature/dataprocess.png" alt="Data" width={100} height={100} />,
    title: "Data process & Automation",
    paragraph:"We can scrape data from any website and automate repetitive tasks such as business process autmation and web testing.",
  },
  {
    id: 1,
    icon:<Image src="/services/feature/Aibot.png" alt="Data" width={100} height={100} /> ,
    title: "AI & Machine Learning",
    paragraph:
      "We can build AI models to help you make better decisions and automate your business processes.",
  },
  {
    id: 1,
    icon: <Image src="/services/feature/datascience.png" alt="Data Science" width={100} height={100} />,
    title: "Data Science",
    paragraph:
      "We can help you make sense of your data and use it to make better decisions.",
  },
];
export default featuresData;
