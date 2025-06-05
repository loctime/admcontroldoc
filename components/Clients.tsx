export default function Clients() {
  const clients = ["TechCorp", "InnovateLab", "FutureSync", "DataFlow", "CloudMax", "NextGen"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">Confían en nosotros</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-gray-900/30 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-lg font-semibold text-gray-400 hover:text-cyan-400 transition-colors">{client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
