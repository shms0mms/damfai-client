export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-full items-center justify-center px-4">
      {children}
    </div>
  )
}
