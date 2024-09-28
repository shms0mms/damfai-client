import { CTAWithGithub } from "@/components/blocks/cta"
import { Footer } from "@/components/layout/footer"

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="grid h-full w-full grid-cols-2">
        <CTAWithGithub />
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
