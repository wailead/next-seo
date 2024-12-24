function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full primary:w-primary">{children}</div>
    </div>
  )
}

export default SectionLayout
