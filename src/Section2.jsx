import { HeartIcon } from "@heroicons/react/24/outline";
import {
  LocalShippingOutlined,
  ThumbUpOffAltOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const features = [
  {
    name: "Qualität",
    description:
      "Wir haben strengste Qualitätsprinzipien und halten diese ein.",
    icon: ThumbUpOffAltOutlined,
  },
  {
    name: "Kundenservice",
    description:
      "Wir gehen auf alle Ihre Wünsche ein. Kompetente Beratung und große Auswahl an frischen Produkten macht uns aus.",
    icon: HeartIcon,
  },
  {
    name: "Lieferung",
    description:
      "Wir liefern unsere Produkte nicht nur an Geschäftskunden sondern auch für Privatkunden. Sprechen Sie uns einfach an.",
    icon: LocalShippingOutlined,
  },
  {
    name: "Halal",
    description:
      "Bei uns müssen sich keine darüber Gedanken machen, ob das Fleisch Halal Fleisch ist. Wir bieten nur das an wovon wir selbst überzeugt sind.",
    icon: VerifiedOutlined,
  },
];

export default function Section2() {
  return (
    <motion.div
      animate={{ x: [100, 0] }}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ type: "spring", duration: 0.8, bounce: 1, stiffness: 80 }}
      className="bg-white shadow-2xl rounded-3xl p-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Dafür stehen wir
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere Qualitätsmerkmale
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-left font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-left leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
}
