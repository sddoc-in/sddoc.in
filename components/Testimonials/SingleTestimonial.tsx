// "use client";
// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import Modal from "react-modal";

// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

// const customStyles = {
//   content: {
//     padding: '6px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     maxWidth: '800px',
//     width: '90%',
//     zIndex: 9999,
//   },
//   overlay: {
//     zIndex: 9998,
//   },
// };

// const truncateContent = (content, wordLimit) => {
//   const words = content.split(' ');
//   if (words.length <= wordLimit) {
//     return content;
//   }
//   return words.slice(0, wordLimit).join(' ');
// };

// const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
//   const { star, name, image, content, designation, Country } = testimonial;
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//     setTimeout(() => setIsVisible(true), 10); // Delay for smooth transition
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsVisible(false);
//     setTimeout(() => setModalIsOpen(false), 300); // Duration of the transition
//     document.body.style.overflow = 'auto';
//   };

//   let ratingIcons = [];
//   for (let index = 0; index < star; index++) {
//     ratingIcons.push(
//       <span key={index} className="text-yellow">
//         {starIcon}
//       </span>
//     );
//   }

//   const truncatedContent = truncateContent(content, 8);
//   const fadedWords = content.split(' ').splice(9, 2).join('...');

//   return (
//     <div className="w-full">
//       <div
//         className="wow fadeInUp h-72 shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
//         data-wow-delay=".1s"
//       >
//         <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
//         <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
//           {truncatedContent} <span className="opacity-50">{fadedWords}</span>
//           <button
//             className="bg-[#4A6cf7] text-white py-1 rounded-md px-4 mt-2"
//             onClick={openModal}
//           >
//             Read More
//           </button>
//         </p>

//         <div className="flex items-center">
//           <div className="relative mr-4 h-[45px] w-[50px] overflow-hidden rounded-full">
//             <Image src={image} alt={name} fill />
//           </div>
//           <div className="w-full">
//             <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
//               {name}
//             </h3>
//             <p className="text-sm text-body-color">{designation ? designation : Country}</p>
//           </div>
//         </div>
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Testimonial Modal"
//         className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//         overlayClassName={`fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="wow fadeInUp shadow-two dark:shadow-three rounded-sm bg-white p-8 dark:bg-dark lg:px-5 xl:px-8">
//           <div className="flex justify-between">
//             <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
//             <div>
//               <button
//                 className="bg-[#4A6cf7] text-white py-1 rounded-md px-4 mb-4 mr-4" onClick={closeModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//           <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
//             {content}
//           </p>
//           <div className="flex items-center">
//             <div className="relative mr-4 h-[45px] w-[50px] overflow-hidden rounded-full">
//               <Image src={image} alt={name} fill />
//             </div>
//             <div className="w-full">
//               <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
//                 {name}
//               </h3>
//               <p className="text-sm text-body-color">{designation ? designation : Country}</p>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default SingleTestimonial;


"use client"
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '6px',
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '90%',
    zIndex: 9999,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9998,
  },
};


const truncateContent = (content, wordLimit) => {
  const words = content.split(' ');
  if (words.length <= wordLimit) {
    return content;
  }
  return words.slice(0, wordLimit).join(' ');
};




const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation,Country } = testimonial;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
   setModalIsOpen(true);
    setTimeout(() => setIsVisible(true), 10); 
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setModalIsOpen(false), 300); 
    document.body.style.overflow = 'auto';
  };

  let ratingIcons: JSX.Element[] = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  const truncatedContent = truncateContent(content, 8);
  const fadedWords = content.split(' ').splice(9, 2).join('...') ;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp h-72 shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {truncatedContent} <span className="opacity-50">{fadedWords}</span>
          <button
            className="bg-[#4A6cf7] text-white py-1 rounded-md px-4 mt-2"
            onClick={openModal}
          >
            Read More
          </button>
        </p>

        <div className="flex items-center">
          <div className="relative mr-4 h-[45px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation ? designation : Country}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Testimonial Modal"
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        overlayClassName={`fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}

      >
        <div className="wow fadeInUp shadow-two dark:shadow-three rounded-sm bg-white p-8 dark:bg-dark lg:px-5 xl:px-8">
          <div className="flex justify-between">
            <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
            <div>
              <button
                className="bg-[#4A6cf7] text-white py-1 rounded-md px-4 mb-4 mr-4" onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
          <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
            {content}
          </p>
          <div className="flex items-center">
            <div className="relative mr-4 h-[45px] w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                {name}
              </h3>
              <p className="text-sm text-body-color">{designation ? designation : Country}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleTestimonial;
