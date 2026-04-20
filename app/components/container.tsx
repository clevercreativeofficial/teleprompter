const container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-300 mx-auto">
        {children}
    </section>
  )
}

export default container