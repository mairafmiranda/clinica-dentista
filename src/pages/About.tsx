import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Award, BookOpen, HeartPulse } from 'lucide-react'

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal()
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal()

  return (
    <div className="bg-background">
      {/* Hero */}
      <div className="bg-accent/30 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in-up">
          Sobre a Clínica
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
          Unindo ciência, arte e acolhimento para oferecer a melhor experiência em odontologia
          estética.
        </p>
      </div>

      <div className="container px-4 py-16 md:py-24">
        {/* Profile Section */}
        <div
          ref={textRef}
          className={`grid md:grid-cols-2 gap-12 items-center mb-24 transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://img.usecurling.com/ppl/large?gender=female&seed=45"
              alt="Dra. Responsável"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-6 text-white">
              <h3 className="text-2xl font-bold">Dra. Camila Mendes</h3>
              <p className="text-white/80">Especialista em Dentística e Prótese</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Nossa História & Filosofia</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O Consultório Sorriso Limpo nasceu do desejo de transformar a ida ao dentista em uma
              experiência leve e positiva. Acreditamos que um sorriso bonito e saudável tem o poder
              de mudar vidas, elevando a autoestima e abrindo portas.
            </p>
            <div className="grid gap-6 mt-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Excelência Comprovada</h4>
                  <p className="text-muted-foreground">
                    Mais de 10 anos de experiência clínica com milhares de casos de sucesso em
                    reabilitação oral e estética.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Atualização Constante</h4>
                  <p className="text-muted-foreground">
                    Participação contínua em congressos internacionais e domínio das técnicas e
                    materiais mais modernos do mercado.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Foco no Paciente</h4>
                  <p className="text-muted-foreground">
                    Tratamentos personalizados, escuta ativa e controle total de dor para pacientes
                    com fobia de dentista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          ref={galleryRef}
          className={`transition-all duration-1000 delay-300 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Conheça Nosso Espaço</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um ambiente projetado exclusivamente para o seu conforto, combinando design moderno,
              higiene rigorosa e equipamentos de última geração.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <img
              src="https://img.usecurling.com/p/600/600?q=clean%20reception%20dental%20office"
              alt="Recepção"
              className="rounded-xl w-full h-48 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="https://img.usecurling.com/p/600/600?q=modern%20dentist%20chair"
              alt="Sala Clínica"
              className="rounded-xl w-full h-48 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="https://img.usecurling.com/p/600/600?q=dental%20equipment%20close"
              alt="Equipamentos"
              className="rounded-xl w-full h-48 md:h-64 object-cover md:col-span-1 col-span-2 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
