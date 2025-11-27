import React from "react"; 
import { motion } from "framer-motion";

export default function Card({ title, description, icon, image }) {
  return (
    <motion.div
      className="bg-white text-blue-900 rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-contain mx-auto"
          />
        ) : (
          <div className="text-4xl text-center">{icon}</div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </motion.div>
  );
}
