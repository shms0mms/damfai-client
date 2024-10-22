import Image, { type ImageProps } from "next/image"
import { FC } from "react"
import { siteConfig } from "@/config/site.config"
import { cn } from "@/lib/utils"

type IconProps = React.HTMLAttributes<SVGElement>
type SiteIconProps = Omit<ImageProps, "src" | "alt">

export const Icons = {
  icon: (({ className, ...props }) => (
    <>
      <Image
        src={"/chappi-white.png"}
        alt={siteConfig.name}
        className={cn("hidden dark:block", className)}
        {...props}
      />
      <Image
        src={"/chappi-black.png"}
        alt={siteConfig.name}
        className={cn("dark:hidden", className)}
        {...props}
      />
    </>
  )) satisfies FC<SiteIconProps>,
  placeholder: (props: IconProps) => (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="120" height="120" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z"
        fill="#FFF"
      />
    </svg>
  ),
  arrowDown: (props: {}) => (
    <svg
      width={20}
      height={24}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L12 20M12 20L5 13M12 20L19 13"
        stroke={"currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="1 30"
          to="30 30"
          dur="1s"
          begin="1s"
          fill="freeze"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="30"
          to="0"
          dur="1s"
          begin="1s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
