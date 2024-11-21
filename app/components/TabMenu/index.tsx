"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export interface TabMenuProps {
    className?: string
}

export function TabMenu({ className }: TabMenuProps) {
    const [selected, setSelected] = useState("Recommended");

    return (
        <div className={`${className} w-full bg-white border border-gray flex justify-center rounded-md lg:border-b-2 lg:block`}>
            <motion.span
                whileHover={{ borderBottom: "1px solid black", boxShadow : "0px 0px 5px #444" }}
                className={`w-[140px] p-4 flex-grow-0 inline-block cursor-pointer ${selected === "Recommended" ? "font-bold" : "font-normal"}`}>
                Recommended
            </motion.span>
            <motion.span 
                whileHover={{ borderBottom: "1px solid black", boxShadow : "0px 0px 5px #444" }}
                className={`p-4 flex-grow-0 inline-block cursor-pointer box-border text-gray ${selected === "Update" ? "font-bold" : "font-normal"}`} 
            >
                Update
            </motion.span>
        </div>
    )
}