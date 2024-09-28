import { CTAWithGithub } from "@/components/blocks/cta";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full grid grid-cols-2">
        <CTAWithGithub />
        <div className="flex w-full h-full items-center justify-center relative z-10 ">
          {children}
        </div>
      </div>
    </>
  );
}
