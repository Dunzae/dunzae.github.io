"use client"

import { useState } from "react";
import { Agdasima } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { RxExit } from "react-icons/rx";

const agdasima = Agdasima({ subsets: ["latin"], weight: "400" })
export interface TitleBarProps {
    className?: string
}

export function TitleBar({ className }: TitleBarProps) {
    const [isFold, setIsFold] = useState(false);
    const foldOnClick = () => {
        setIsFold(_fold => !_fold);
    }

    return (
        <motion.header
            animate={{ transform: isFold ? "translateX(-100%)" : "translateX(0%)" }}
            transition={{ type: "spring" }}
            className={`${className} w-full h-[100px] border-b border-b-gray-200 lg:border-b-0 flex justify-center lg:h-full lg:flex-col lg:items-center 
                lg:flex-shrink lg:gap-4 lg:bg-titleBar bg-center bg-cover lg:bg-origin-border lg:bg-no-repeat lg:relative`}>
            <div className={`hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:text-white lg:p-4 lg:cursor-pointer`}
                onClick={foldOnClick}>
                <RxExit size={30} className="rotate-180" />
            </div>
            <div className="lg:text-white">
                <span className={`${agdasima.className} text-[60px] `}>LogSomething</span>
            </div>
            <div className="hidden lg:block lg:w-[200px] lg:h-[225px] rounded-[30%] lg:overflow-hidden lg:relative lg:hover:scale-110 lg:transition-all">
                <Image src="/images/profile.jpg" alt="profile image" width={200} height={230}
                />
            </div>
            <div className="hidden lg:font-bold lg:flex lg:flex-col lg:items-center lg:px-[20px] lg:gap-4 lg:mb-4">
                <span className="lg:text-[30px] lg:text-white">Dunzae</span>
                <ul className="lg:text-[15px] lg:text-gray-400 lg:flex lg:flex-wrap lg:justify-center lg:px-5">
                    <li className="lg:px-2"># 1999년생</li>
                    <li className="lg:px-2"># OS</li>
                    <li className="lg:px-2"># Web</li>
                    <li className="lg:px-2"># React</li>
                    <li className="lg:px-2"># Express</li>
                    <li className="lg:px-2"># C/C++</li>
                </ul>
            </div>
            <div className="hidden lg:flex lg:gap-2 lg:text-white">
                <Link href="http://github.com/dunzae" target="_blank"><FaGithub size={30} /></Link>
                <Link href="http://dunzae.tistory.com" target="_blank"><SiTistory size={30} /></Link>
            </div>
        </motion.header>
    )
}

export default TitleBar;