import LoadingImage from "@assets/images/loading.webp"
import { motion } from "motion/react";

function Loading() {
    return <div className="w-full h-full flex items-center justify-center">
        <motion.img src={LoadingImage} alt="loading" className="" animate={{ "rotate": "360deg" }} transition={{ repeat: Infinity, duration: 2 }} />
    </div>
}

export default Loading;