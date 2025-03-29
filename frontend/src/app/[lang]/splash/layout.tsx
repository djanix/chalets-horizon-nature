export default function layout({ children }: { children: React.ReactNode }) {
  return <main className="dark:bg-black dark:text-gray-100 min-h-screen">{children}</main>;
}
