import { BenefitsType, SelectedPage } from "../../shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const benefits: Array<BenefitsType> = [
  {
    icon : <HomeModernIcon className="h-6 w-6" />,
    title : "State of the Art Facilities",
    description : "Achieve your fitness goals with our all-in-one gym platform. Track progress, access personalized plans, and stay motivated"
  },
  {
    icon : <UserGroupIcon className="h-6 w-6" />,
    title : "100's of Diverse Classes",
    description : "Elevate your fitness journey with our innovative gym platform. Access personalized workout plans, track your progress, and stay motivated"
  },
  {
    icon : <AcademicCapIcon className="h-6 w-6" />,
    title : "Expert and Pro Trainers",
    description : "Whether you're at home or in the gym, stay on track with ease. Join today and take the first step toward a healthier, stronger you!"
  }
]

const container = {
  hidden : {},
  visible : {
    transition : { staggerChildren: 0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* {HEADER} */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden : {opacity: 0, x: -50},
            visible : {opacity: 1, x: 0}
          }}
          >
          <HText>MORE THAN JUST A GYM!</HText>
          <p className="my-5 text-sm">
          "Welcome to the ultimate gym experience! Our platform offers personalized workout plans, progress tracking, virtual coaching, and motivational resources to help you achieve your fitness goals. Whether you're at home or in the gym, stay on track with ease. Join today and take the first step toward a healthier, stronger you!"
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
          className="mt-5 md:flex items-center justify-between md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          variants={container}
        >
          {benefits.map((benefit: BenefitsType) =>(
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits