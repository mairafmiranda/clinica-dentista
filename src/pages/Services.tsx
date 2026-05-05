import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const SERVICES_DATA = [
  {
    id: 'clareamento',
    title: 'Clareamento Dental Avançado',
    description:
      'Recupere o branco natural dos seus dentes de forma segura e indolor. Oferecemos opções de clareamento a laser no consultório (resultados imediatos) e clareamento caseiro supervisionado.',
    features: [
      'Resultados visíveis na 1ª sessão',
      'Produtos que previnem sensibilidade',
      'Acompanhamento profissional contínuo',
    ],
    image: 'https://img.usecurling.com/p/800/600?q=tooth%20whitening%20dentist',
  },
  {
    id: 'estetica',
    title: 'Estética com Lentes de Contato',
    description:
      'Transformação completa do sorriso com procedimentos minimamente invasivos. As facetas e lentes de porcelana corrigem imperfeições de cor, formato e pequenos desalinhamentos.',
    features: [
      'Design digital do sorriso (Mockup)',
      'Materiais ultra resistentes e finos',
      'Aparência 100% natural',
    ],
    image: 'https://img.usecurling.com/p/800/600?q=dental%20veneers%20smile',
  },
  {
    id: 'protese',
    title: 'Próteses e Reabilitação',
    description:
      'Devolva a função mastigatória e a estética com próteses modernas sobre dentes ou implantes. Trabalhamos com materiais metal-free que imitam perfeitamente a translucidez do dente natural.',
    features: [
      'Coroas em zircônia e porcelana',
      'Reabilitação total com protocolo',
      'Ajuste perfeito e conforto garantido',
    ],
    image: 'https://img.usecurling.com/p/800/600?q=dental%20implant%20prosthesis',
  },
]

function ServiceSection({
  service,
  reversed,
}: {
  service: (typeof SERVICES_DATA)[0]
  reversed: boolean
}) {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      id={service.id}
      className={cn(
        'grid md:grid-cols-2 gap-12 items-center py-16 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      )}
    >
      <div className={cn('space-y-6', reversed ? 'md:order-2' : '')}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="text-primary shrink-0" size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to={`/contato?assunto=${encodeURIComponent(service.title)}`}>
              Eu quero esse tratamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg',
          reversed ? 'md:order-1' : '',
        )}
      >
        <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Nossos Tratamentos
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Soluções personalizadas em estética dental e reabilitação para construir o sorriso que
          você sempre sonhou.
        </p>
      </div>

      {/* Content */}
      <div className="container px-4 py-12">
        <div className="flex flex-col space-y-12 md:space-y-24 divide-y divide-border/50">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className={index > 0 ? 'pt-12 md:pt-24' : ''}>
              <ServiceSection service={service} reversed={index % 2 !== 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
