"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { OssChip } from "@/components/ui/oss-chips"
import { OssLight } from "@/components/ui/oss-lights"
import { HeroMainboardStuff } from "@/components/ui/shiny-lights"

export const CTAWithGithub = () => {
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center overflow-hidden py-20 text-gray-400 md:px-8">
      <HeroMainboardStuff className="absolute top-[-100px] block brightness-50 invert dark:hidden" />

      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="absolute left-1/2 top-[-100px] -translate-x-1/2">
          <OssLight />
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            alt="Github logo"
            src="/github.svg"
            className="mt-24 hidden dark:block"
            width={640}
            height={520}
          />
          <div className="absolute left-[-50px] top-[150px] -z-50 lg:left-[150px] lg:top-[400px] lg:h-[400px] lg:w-[1000px]">
            <OssChip className="flex" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
