export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-[calc(100vh-var(--header-size))] items-center justify-center px-4">
      {children}
    </div>
  )
}
