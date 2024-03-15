export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex">
      <div className="flex-1 h-screen bg-neutral-900 text-white flex flex-col justify-between">
        <div className="p-6 font-semibold text-xl">
          Fast Admin
        </div>
        <div className="p-6 text-base font-medium">
          An admin dashboard template powered by Vite, React, and Tailwind CSS.
        </div>
      </div>
      <div className="flex-1 h-screen">
        {children}
      </div>
    </div>
  )
}
