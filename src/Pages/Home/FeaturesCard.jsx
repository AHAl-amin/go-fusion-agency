


import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import { AiTwotoneSetting, AiTwotoneShopping } from "react-icons/ai";
import { BsPhone, BsCodeSlash } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbMessageChatbot, TbTools } from "react-icons/tb";

const services = [
  {
    title: "Web Development",
    description:
      "From sleek landing pages to robust web platforms, we craft responsive websites using the latest technologies like React, Next.js, and Node.js — optimized for performance, SEO, and user experience.",
    icon: <BsCodeSlash size={24} />,
    color: "#401d0c",
  },
  {
    title: "UI/UX Design",
    description:
      "We blend creativity with usability to create clean, intuitive interfaces. From wireframes to final prototypes, we ensure your product looks great and feels natural across all devices.",
    icon: <FiFigma size={24} />,
    color: "#a56828",
  },
  {
    title: "App Development",
    description:
      "We design and develop high-quality mobile applications for both iOS and Android using Flutter and React Native — apps that are fast, secure, and user-friendly.",
    icon: <BsPhone size={22} />,
    color: "#401d0c",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "From chatbots and recommendation engines to predictive analytics and neural networks, we build custom AI features tailored to solve your real-world problems.",
    icon: <TbMessageChatbot size={24} />,
    color: "#a56828",
  },
  {
    title: "E-commerce Solutions",
    description:
      "We create e-commerce platforms that drive sales — integrating secure payments, inventory systems, and modern UI to make your online store stand out.",
    icon: <AiTwotoneShopping size={24} />,
    color: "#401d0c",
  },
  {
    title: "Custom Software Development",
    description:
      "We develop fully custom platforms, CRMs, admin panels, and automation tools designed around your exact workflow — helping you scale efficiently.",
    icon: <TbTools size={24} />,
    color: "#a56828",
  },
  {
    title: "Branding & Identity",
    description:
      "From logos to brand guidelines, we help define your visual identity to reflect your vision, stand out from competitors, and build trust with your audience.",
    icon: <HiOutlineLightBulb size={26} />,
    color: "#401d0c",
  },
  {
    title: "Maintenance & Support",
    description:
      "We offer reliable post-launch support, security monitoring, bug fixing, and performance optimization so you can focus on growth, not glitches.",
    icon: <AiTwotoneSetting size={26} />,
    color: "#a56828",
  },
];

const ServicesTimeline = () => {
  return (
    <VerticalTimeline>
      {services.map((service, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: service.color, color: "#fff" }}
          contentArrowStyle={{ borderRight: `7px solid ${service.color}` }}
          date={service.title} // এখানে title কে date হিসেবে উপরে দেখাচ্ছি
          iconStyle={{ background: service.color, color: "#fff" }}
          icon={service.icon}
        >
          <h3 className="vertical-timeline-element-title">{service.title}</h3>
          <p>{service.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ServicesTimeline;
