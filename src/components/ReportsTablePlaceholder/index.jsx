import React from "react";
import { motion } from "framer-motion";

export default function ReportsTablePlaceholder() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <table className="w-full">
        <thead className="border-b">
          <tr className="animate-pulse">
            {[1, 2].map(item => (
              <th
                key={item}
                scope="col"
                className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
              >
                <div className="h-4 w-16 bg-gray-300 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="animate-pulse">
          {[1, 2].map(item => (
            <tr
              key={item}
              className="bg-white border-b border-b-gray-disabled/50"
            >
              <td className="py-2 whitespace-nowrap pl-1 pr-6 text-sm font-bold text-gray-900">
                <div className="h-4 w-16 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                <div className="h-4 w-24 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                <div className="h-4 w-28 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6 flex items-center gap-3">
                <div className="h-6 w-14 bg-gray-300 rounded" />
                <div className="h-6 w-6 bg-gray-300 rounded" />
                <div className="h-6 w-6 bg-gray-300 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
