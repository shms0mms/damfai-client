"use client"

import { animate, motion } from "framer-motion"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export const AISlider = () => {
  const scale = [1, 1.1, 1]
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform
      },
      { duration: 0.8 }
    ],
    [
      ".circle-2",
      {
        scale,
        transform
      },
      { duration: 0.8 }
    ],
    [
      ".circle-3",
      {
        scale,
        transform
      },
      { duration: 0.8 }
    ],
    [
      ".circle-4",
      {
        scale,
        transform
      },
      { duration: 0.8 }
    ],
    [
      ".circle-5",
      {
        scale,
        transform
      },
      { duration: 0.8 }
    ]
  ]

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1
    })
  }, [])
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
      <div className="flex flex-shrink-0 flex-row items-center justify-center gap-2">
        <Container className="circle-1 h-8 w-8">
          <GigaChatLogo className="h-4 w-4" />
        </Container>
        <Container className="circle-2 h-12 w-12">
          <Sber />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="circle-4 h-12 w-12">
          <Bing className="h-6 w-6" />
        </Container>
        <Container className="circle-5 h-8 w-8">
          <YandexGPT className="h-4 w-4" />
        </Container>
      </div>

      <div className="animate-move absolute top-20 z-40 m-auto h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent">
        <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
          <Sparkles />
        </div>
      </div>
    </div>
  )
}
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0]
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group mx-auto w-full max-w-sm rounded-xl border border-[rgba(255,255,255,0.10)] bg-gray-100 p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(40,40,40,0.70)]",
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardTitle = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h3
      className={cn(
        "py-2 text-lg font-semibold text-gray-800 dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  )
}

export const CardDescription = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <p
      className={cn(
        "max-w-sm text-sm font-normal text-neutral-600 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  )
}

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true
}: {
  className?: string
  children: React.ReactNode
  showGradient?: boolean
}) => {
  return (
    <div
      className={cn(
        "z-40 h-[15rem] rounded-xl md:h-[20rem]",
        className,
        showGradient &&
          "bg-neutral-300 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] dark:bg-[rgba(40,40,40,0.70)]"
      )}
    >
      {children}
    </div>
  )
}

const Container = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  )
}

export const GigaChatLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 40 40"
    >
      <path d="M39.0604 13.9249C37.938 10.3547 35.7985 7.12289 32.9224 4.73109C31.461 3.58769 29.5669 3.121 27.7548 3.03933C27.4157 3.03933 27.0416 3.03933 26.7142 3.03933C21.7571 3.28434 17.1156 5.61781 13.1989 8.5463C13.1639 8.56963 13.1639 8.6163 13.1989 8.6513C14.8124 10.4247 16.3322 12.2915 17.8053 14.1933C17.8287 14.2283 17.8755 14.2283 17.8989 14.2049C21.0556 11.9415 24.3526 9.85303 27.8951 8.21961C27.9301 8.20794 27.9652 8.21961 27.9886 8.25462C29.111 10.4364 25.3697 13.9716 23.8381 15.2433C20.4125 18.0435 16.4842 20.7736 11.948 21.1353C11.1179 21.2053 10.2761 21.1003 9.48105 20.902C7.38828 20.3653 5.7398 18.5918 5.07338 16.5734C4.74602 15.535 4.74601 14.4149 4.94477 13.3532C5.31889 11.4281 6.28928 9.57302 7.6338 7.9396C10.6853 3.91438 16.1452 1.2309 22.3884 1.2309C28.6316 1.2309 27.1936 1.65092 29.3097 2.39763C29.3331 2.33929 29.3331 2.36263 29.3682 2.26929C26.7376 0.892547 23.768 0.122506 20.8101 0.00583294C20.167 0.00583294 19.5123 -0.0175002 18.8927 0.029169C8.30022 0.577532 -0.351447 9.66636 0.0109876 20.3069V20.3303V20.3536C0.0109876 20.4586 0.010999 20.5636 0.0226905 20.6686C0.0226905 20.7386 0.0226905 20.8203 0.0226905 20.8786C0.0226905 21.042 0.046079 21.217 0.0577705 21.3803C0.0577705 21.4153 0.0577534 21.462 0.0694448 21.497C0.0694448 21.532 0.0694391 21.5787 0.0928219 21.6137C0.0928219 21.6137 0.0928219 21.6253 0.0928219 21.637C0.396799 26.969 3.2846 31.5542 8.84972 32.3826C10.1709 32.5576 11.5037 32.5459 12.8248 32.4759C19.9215 31.9626 27.3456 28.2174 31.8351 22.6987C33.846 20.1553 35.3308 17.0634 35.5179 13.7966C35.5413 13.5749 35.5296 13.3532 35.5413 13.1432C35.5413 13.1432 35.5413 13.1315 35.5413 13.1199C35.5413 13.0965 35.5646 13.1199 35.5763 13.1199C35.6114 13.1549 35.6582 13.1899 35.6932 13.2249C37.9614 15.7217 39.3644 18.9185 39.6917 22.267C39.7853 22.267 39.7619 22.267 39.8554 22.267C40.1945 19.4552 39.9372 16.5734 39.0838 13.8666L39.0604 13.9249Z" />
      <path d="M18.472 37.3467C13.3746 37.3467 8.66292 35.7716 4.82812 33.0882C8.49924 37.3234 13.9241 39.9952 19.9685 39.9952C29.3918 39.9952 37.2952 33.4848 39.4231 24.7344C35.6117 32.2014 27.6615 37.3467 18.472 37.3467Z" />
    </svg>
  )
}

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}
export const YandexGPT = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <title>file_type_yandex</title>
      <path
        d="M21.88,2h-4c-4,0-8.07,3-8.07,9.62a8.33,8.33,0,0,0,4.14,7.66L9,28.13A1.25,1.25,0,0,0,9,29.4a1.21,1.21,0,0,0,1,.6h2.49a1.24,1.24,0,0,0,1.2-.75l4.59-9h.34v8.62A1.14,1.14,0,0,0,19.82,30H22a1.12,1.12,0,0,0,1.16-1.06V3.22A1.19,1.19,0,0,0,22,2ZM18.7,16.28h-.59c-2.3,0-3.66-1.87-3.66-5,0-3.9,1.73-5.29,3.34-5.29h.94Z"
        style={{
          fill: "#d61e3b"
        }}
      />
    </svg>
  )
}
const Sber = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
      id="Layer_2"
      data-name="Layer 2"
    >
      <path
        className="cls-1"
        d="M38.21,7.85,16,20.62,5.21,14.39M34.34,6.56,16,17.13,7.42,12.25M41.08,9.91,16,24.35,3.85,17.41"
      />
      <path
        className="cls-1"
        d="M43.39,15.46A19.36,19.36,0,0,1,44.5,22a20.25,20.25,0,0,1-1.11,6.64L42.89,30a20.87,20.87,0,0,1-4.38,6.54A20.23,20.23,0,0,1,32,40.87a20.19,20.19,0,0,1-8,1.66,19.93,19.93,0,0,1-8-1.66,21,21,0,0,1-6.49-4.33A19.74,19.74,0,0,1,5.11,30,20.71,20.71,0,0,1,3.5,22V20.64L16,27.73,42.29,12.64Z"
      />
    </svg>
  )
}
export const Bing = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="20"
      width="20"
      version="1.1"
      id="_x32_"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <polygon
          className="st0"
          points="166.685,38.682 52.904,0 52.904,422.118 166.685,321.987  "
        />
        <polygon
          className="st0"
          points="206.501,133.117 253.157,249.166 319.397,270.361 56.324,431.215 170.095,512 459.096,336.78    459.096,216.17  "
        />
      </g>
    </svg>
  )
}
