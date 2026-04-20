const container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-300 mx-auto w-full">
        {children}
    </section>
  )
}

export default container