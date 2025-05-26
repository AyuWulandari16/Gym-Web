import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Enhance your flexibility, balance, and inner peace with our high-quality yoga mats, straps, blocks, and bolsters – ideal for all levels.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equipments",
    desc: "Target and develop every major muscle group with our full range of strength-training equipment including barbells, dumbbells, power racks, and cable machines.",
    icon: <FaDumbbell />,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "Achieve your fitness goals with state-of-the-art treadmills, elliptical trainers, spin bikes, and other essential cardio machines.",
    icon: <GiGymBag />,
    delay: 0.5,
  },
];

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-6 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="bg-gray-100 space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl
              hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
