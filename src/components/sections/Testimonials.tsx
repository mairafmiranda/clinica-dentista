import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const TESTIMONIALS = [
  {
    name: 'Mariana Silva',
    role: 'Paciente de Lentes de Contato',
    content:
      'O resultado das minhas lentes de contato ficou incrivelmente natural. A equipe é super atenciosa e o consultório passa muita tranquilidade.',
    seed: '10',
  },
  {
    name: 'Carlos Mendes',
    role: 'Paciente de Clareamento',
    content:
      'Fiz o clareamento a laser e em poucas sessões já notei uma diferença absurda. Sem dor e com um atendimento impecável do início ao fim.',
    seed: '22',
  },
  {
    name: 'Ana Beatriz',
    role: 'Reabilitação Oral',
    content:
      'Voltei a sorrir com confiança depois do meu tratamento. A precisão e o cuidado da Dra. foram fundamentais. Recomendo de olhos fechados!',
    seed: '35',
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            O que dizem nossos pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Histórias reais de pessoas que transformaram suas vidas ao renovarem seus sorrisos
            conosco.
          </p>
        </div>

        <div
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-border/50 h-full bg-background shadow-subtle">
                    <CardContent className="p-6 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex text-yellow-400 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                        <img
                          src={`https://img.usecurling.com/ppl/thumbnail?seed=${testimonial.seed}`}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
