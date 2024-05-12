import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "CORE BUSINESS",
  desc: "To become the premier provider of affordable quality goods (brands) and services in Zambia based on our ability to deliver our products on time while adhering to high professional standards and ethics.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Excellence",
      desc: "We believe excellence is the standard for all we do and this is achieved by serving customers with consistency and improved efficiency. We are thus committed to continuous improvement of our product and service delivery. We assure value for money products and services.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Integrity",
      desc: "We believe doing the right thing even when no one is looking or will find out thus compelling us to deal fairly with all stakeholders.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Innovation",
      desc: "Benac Enterprises Limited believes that innovation is an important element in everything we do i.e. ways of acquiring products visa-vis distribution and service delivery.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Passion",
      desc: "We show pride, enthusiasm and dedication in everything that we do. We are committed to selling and delivering high quality products and services.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Customer Satisfaction",
      desc: "We ensure that our products and services always exceed our customer's expectation. Our business is nonexistent without our customers and that's why we earnestly value them. In order to maintain this client relationship we believe in pre-sale and post sale services.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Quality",
      desc: "Quality is at the forefront of the Company's work process and we believe in providing high quality products backed by efficient service.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
