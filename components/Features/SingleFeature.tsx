import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    // <a href="/templates/dynamic">
    //   <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8 dark:bg-slate-800">
    //     {" "}
    //     <div className="-mt-6">
    //       <div>
    //         <span className="bg-primary-50 text-primary-700 inline-flex rounded-lg p-3 dark:bg-slate-700">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="2"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //             className="h-6 w-6 "
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    //             ></path>
    //           </svg>
    //         </span>
    //       </div>
    //       <p className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-slate-300">
    //         Dynamic Template
    //       </p>
    //       <p className="mt-5 text-base text-gray-500 dark:text-slate-500">
    //         Generate any template from a single prompt.
    //       </p>
    //     </div>
    //   </div>
    // </a>
    <div className="w-full">

      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white tracking-tight  sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
