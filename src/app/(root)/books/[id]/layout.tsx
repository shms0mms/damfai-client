export default function BookLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-size))] items-center justify-center">
      {children}
    </div>
  )
}
