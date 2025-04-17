import React from "react";
import Button from "../Button";
import Download from "../../icons/Download";
import Delete from "../../icons/Delete";
import { AnimatePresence, motion } from "framer-motion";
import ReportsEmpty from "../ReportsEmpty";
import useReportsTable from "./hook";

export default function ReportsTable({ reports, filters }) {
  const { filteredReports, navigate } = useReportsTable({ reports, filters });

  return (
    <AnimatePresence mode="wait">
      {filteredReports.length === 0 ? (
        <motion.div
          key="empty"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ReportsEmpty text="Tente ajustar os filtros para ver outros resultados" />
        </motion.div>
      ) : (
        <motion.div
          key="table"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left">
                  Mês
                </th>
                <th className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left">
                  Ult. Atualização
                </th>
                <th className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left">
                  Ult. edição por
                </th>
                <th className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left">
                  status
                </th>
                <th className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredReports.map(report => (
                  <motion.tr
                    key={report.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border-b border-b-gray-disabled/50"
                  >
                    <td className="py-2 whitespace-nowrap pl-1 pr-6 text-sm font-bold text-gray-900">
                      {report.month}
                    </td>
                    <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                      {report.lastUpdate}
                    </td>
                    <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                      {report.lastPersonToUpdate}
                    </td>
                    <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                      {report.status}
                    </td>
                    <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6 flex items-center gap-3">
                      <Button
                        variant="sys-secondary"
                        className="!px-1.5 !py-0.5 shadow-none"
                        disabled={report.isClosed}
                        onClick={() =>
                          navigate(`/admin/reports/edit/${report.id}`)
                        }
                      >
                        Revisar
                      </Button>
                      <Button
                        variant="sys-secondary"
                        className="group !px-1.5 !py-0.5 shadow-none"
                      >
                        <Download className="h-[24px] w-[25px] stroke-sys-main group-disabled:stroke-gray-detail-disabled" />
                      </Button>
                      <Button
                        variant="sys-secondary"
                        className="!px-1.5 !py-0.5 shadow-none !border-red-700"
                      >
                        <Delete className="h-[24px] w-[25px]" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
