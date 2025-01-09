import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-8">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonials.image}
                alt=""
                className="rounded-full w-14"
              />
              <h2 className="text-xl font-semibold mt-3">
                {testimonials.name}
              </h2>
              <p className="text-gray-500 mb-4">{testimonials.role}</p>
              <div className="flex mb-4">
                {Array(testimonials.stars)
                  .fill()
                  .map((item, index) => (
                    <img src={assets.rating_star} key={index} alt="" />
                  ))}
              </div>
              <p className="text-sm text-center text-gray-600">
                {testimonials.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
