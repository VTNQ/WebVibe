
import { FaArrowRight } from "react-icons/fa";

const features = [
  {
    title: "110 Prebuilt Websites",
    description:
      "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
    img: "/img/prebuilt.png",
  },
  {
    title: "120+ Design Elements",
    description:
      "Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination.",
    img: "/img/design-elements.png",
  },
  {
    title: "Built For Performance",
    description:
      "Experience total control of your website’s features that will empower you to make superior performance-related decisions.",
    img: "/img/performance.png",
  },
  {
    title: "Mobile Friendly",
    description:
      "Avada is 100% fluid & responsive across all device types, from mobile to desktop & tablets, with no compromise.",
    img: "/img/mobile.png",
  },
  {
    title: "Dynamic Content",
    description:
      "Build unique pages & post layouts for your website by harnessing the power of Avada’s dynamic content functionality.",
    img: "/img/dynamic.png",
  },
  {
    title: "Online Store Builder",
    description:
      "Avada is integrated with WooCommerce, allowing you to build successful online stores to sell anything online.",
    img: "/img/store.png",
  },
];

export default function Section5() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2 text-[#67AE6E]">All-In-One Website Builder</h2>
      <p className="text-gray-600 mb-10">
        Experience total control over your website creation process.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div key={index} className="space-y-4">
            <img
  src={f.img}
  alt={f.title}
  className="mx-auto rounded object-cover h-48 w-full"
/>

            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-[#67AE6E] text-white px-6 py-2 rounded-full inline-flex items-center hover:bg-gray-800 transition">
          Discover More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}
