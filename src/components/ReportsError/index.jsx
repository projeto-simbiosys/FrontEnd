import errorState from "../../assets/error-reports-state.png";
import Heading from "../Heading";
import Typography from "../Typography";
import { motion } from "framer-motion";

export default function ReportsError({ text }) {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full flex flex-col justify-center items-center py-4">
        <img src={errorState} className="max-w-[200px]" />
        <Heading
          level={3}
          weight="bold"
          className="!text-lg text-red-700 text-center mb-2"
        >
          Erro ao carregar dados
        </Heading>
        <Typography size="normal" weight="regular" className="text-center">
          {text}
        </Typography>
      </div>
    </motion.div>
  );
}
