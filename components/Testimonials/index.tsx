import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Bob van de Haar",
    designation: "Microsoft 365 | Modern Workplace | WVD | Azure",
    content:
      "As the Lead Data Engineer on a critical project for a prominent e-commerce marketplace, the SDDOC Team demonstrated exceptional expertise and leadership. They successfully delivered a sophisticated product research tool, adhering strictly to the set timelines and budget constraints. Their management skills were evident as they effectively guided and motivated others, ensuring the project progressed smoothly and efficiently. What truly set SDDOC apart was their response to unforeseen challenges. Faced with potential setbacks, they employed remarkable problem-solving skills and innovative thinking. They not only steered the project back on track but also significantly enhanced the final outcome. SDDOC's efforts resulted in delivering a solution that surpassed the client's original specifications, adding substantial value to their operations. Their dedication, skill, and leadership were key to the project's success, making them an invaluable asset to any team. I wholeheartedly recommend SDDOC for their outstanding professional abilities and commitment to excellence.",
    image: "/images/testimonial/bob.jpeg",
    star: 5,
  },
  {
    id: 2,
    name: "Alberto ces",
    designation: "Social Media Manager",
    content: "I don't really use linkedin but I have made this account just to write an honest review about Sddoc Team because of how much I was impressed with his work ethic and intelligent I have been thier client for more than a year now, hired them for multiple complex projects and I have nothing negative to say about them. They are very honest and smart and if we faced any bugs even with old projects they would always take responsibility and fix no questions asked. And it seems like they only gets better and better with time I think they will do great things in the future and im honored to know such a team.",
    image: "/images/testimonial/empty.png",
    star: 5,
  },
  {
    id: 3,
    name: "oneno amin",
    designation: "Automation Engineer",
    content:"Sddoc Team are amazing at thier job! They knows thier way around people, they are good with selenuim and they are also try harder definitely I will work with them again",
    image: "/images/testimonial/empty.png",
    star: 5,
  },

  {
    id: 4,
    name: "jeanpierredemul",
    Country: "United States",
    content:"The greatest Tech Team I ever Met on this platform. Very Professional and Knows exactly what They are doing to Satisfy Thier Clients. Thank you very much for your Great Work, Sddoc. I always Recommend.",
    image: "/images/testimonial/empty.png",
    star: 5,
  },

  {
    id: 5,
    name: "rvihanga_perera",
    Country: "Sri Lanka",
    content:"Good team and good work. I will hire them again",
    image: "/images/testimonial/empty.png",
    star: 5,
  },

  {
    id: 6,
    name: "vandettabb",
    Country: "Macedonia [FYROM]",
    content:"Fast delivery , good support, awesome Team, offered help whenever needed, totally recommend",
    image: "/images/testimonial/empty.png",
    star: 5,
  },

  {
    id: 7,
    name: "hr3456",
    Country: "United Kingdom",
    content:"The Sddoc team are great coders. You can trust them to deliver the project you want. Very impressed! Will be working with them again.",
    image: "/images/testimonial/empty.png",
    star: 5,
  },

  {
    id: 8,
    name: "yogeshjakhar",
    Country: "India",
    content:"Sddoc has the best developers for your Twitter bot. They are highly professional, always available to communicate, and will suggest the best solutions.",
    image: "/images/testimonial/yogeshjakhar.webp",
    star: 5,
  },

  {
    id: 9,
    name: "av3613",
    Country: "Mexico",
    content:"I'm impressed to be honest, you have no idea how many times i had to explain other people, They are so smart make it exactly how i wanted it. They's a 10+",
    image: "/Images/testimonial/av3613.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Satisfied Customers"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
