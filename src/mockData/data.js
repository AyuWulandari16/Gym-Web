import Image1 from "../assets/tabs/1.png";
import Image2 from "../assets/tabs/2.png";
import Image3 from "../assets/tabs/3.png";
import Image4 from "../assets/tabs/4.png";

import Img1 from "../assets/2.png";
import Img2 from "../assets/3.png";

import BgImage from "../assets/bg.png";

// Navbar Menu
export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Traine",
    link: "#",
  },
  {
    id: 3,
    title: "Program",
    link: "#",
  },
  {
    id: 4,
    title: "Blogs",
    link: "#",
  },
  {
    id: 5,
    title: "Pricing",
    link: "#",
  },
];

// BgStyle Hero
export const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

// Banner Sections
export const BannerData = {
  image: Img1,
  title: "Unlock Your Potential With Modern Training",
  subtitle:
    "Join a supportive community, get access to expert-designed training plans, and use top-tier equipment to achieve your fitness goals faster.",
  link: "#",
};

export const Banner2Data = {
  image: Img2,
  title: "Transform Your Lifestyle Today",
  subtitle:
    "Fitness is not just about looking good — it’s about feeling strong, confident, and energized. Let’s build a better you, together.",
  link: "#",
};

// Card Products Data
export const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    image: Image1,
    info: "Info",
    price: "$100",
  },
  {
    id: 2,
    category: "Fitness",
    image: Image2,
    title: "Dumbells",
    info: "Info",
    price: "$100",
  },
  {
    id: 3,
    category: "Yoga Mat",
    image: Image3,
    title: "Yoga Mat",
    info: "Info",
    price: "$100",
  },
  {
    id: 4,
    category: "Fitness",
    image: Image4,
    title: "Yoga Mat",
    info: "Info",
    price: "$100",
  },
  {
    id: 5,
    category: "Muscles",
    image: Image2,
    title: "Yoga Mat",
    info: "Info",
    price: "$100",
  },
  {
    id: 6,
    category: "Muscles",
    image: Image3,
    title: "Yoga Mat",
    info: "Info",
    price: "$100",
  },
];

// Testimonials
export const TestimonialsData = [
  {
    id: 1,
    name: "Jonathan R.",
    text: "Joining this gym completely changed my routine. The trainers are professional, and the equipment is always in top condition. Highly recommended!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Stephanie W.",
    text: "I love the group classes and the energy here! The atmosphere keeps me motivated every single session. It feels like a second home.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen M.",
    text: "From the moment I signed up, I felt supported. The staff truly cares about helping you reach your goals. My stamina and mood have improved a lot!",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ariana L.",
    text: "The facility is clean, the equipment is modern, and there’s always someone to guide you if needed. Great experience so far!",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];
