import { Microscope, ShieldPlus, HeartHandshake, Clock } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const FEATURES = [
  {
    icon: Microscope,
    title: 'Tecnologia de Ponta',
    desc: 'Equipamentos modernos e scanner intraoral 3D para diagnósticos precisos e tratamentos mais rápidos.',
  },
  {
    icon: ShieldPlus,
    title: 'Biossegurança',
    desc: 'Rigorosos protocolos de esterilização e limpeza para garantir um ambiente 100% seguro em todas as consultas.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    desc: 'Ambiente preparado para reduzir a ansiedade, com equipe atenciosa focada no seu conforto.',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    desc: 'Respeitamos seu tempo. Agendamentos organizados para garantir que você seja atendido no horário marcado.',
  },
]

export function ClinicalExcellence() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-primary text-white" ref={ref}>
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Excelência Clínica</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
              Nosso compromisso vai além da estética. Construímos uma infraestrutura completa para
              oferecer o mais alto padrão em odontologia moderna.
            </p>
            <img
              src="https://img.usecurling.com/p/600/400?q=clean%20modern%20dental%20office"
              alt="Consultório moderno"
              className="rounded-xl shadow-2xl mt-6 border border-white/10"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className={`space-y-3 transition-all duration-700 delay-[${idx * 150}ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <feat.icon size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">{feat.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
