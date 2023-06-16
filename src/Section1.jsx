import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const features = [
  {
    name: "100% organisches Fleisch",
    description: "",
    icon: CheckBadgeIcon,
  },
  {
    name: "SSL certificates.",
    description: "",
    icon: CheckBadgeIcon,
  },
];

export default function Section1() {
  return (
    <motion.div
      animate={{ x: [-100, 0] }}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ type: "spring", duration: 0.8, bounce: 0.5, stiffness: 80 }}
      className="overflow-hidden mt-8 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4 grid grid-cols-1 content-center">
            <div className="lg:max-w-lg shadow-xl rounded-3xl p-3">
              <h2 className="text-base font-semibold leading-9 text-red-600">
                Frisch & Premium Qualität
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Halal Fleischhandel
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unsere Mission ist es, Ihnen ein umfassendes Fleischsortiment,
                Halal und in bester Premium Qualität zu attraktiven Preisen zu
                bieten!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 h-5 w-5 text-red-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="image1.jpeg"
            alt="Product screenshot"
            className="w-[57rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={32}
            height={442}
          />
        </div>
      </div>
    </motion.div>
  );
}
