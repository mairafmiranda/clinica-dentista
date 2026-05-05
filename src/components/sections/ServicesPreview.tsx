import { Link } from 'react-router-dom'
import { Sparkles, Diamond, ShieldCheck, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Clareamento Dental',
    desc: 'Técnicas avançadas a laser e caseiras para um sorriso visivelmente mais branco e iluminado de forma segura.',
    link: '/servicos#clareamento',
  },
  {
    icon: Diamond,
    title: 'Estética Dental',
    desc: 'Lentes de contato e facetas em porcelana que corrigem cor, forma e alinhamento para o sorriso dos sonhos.',
    link: '/servicos#estetica',
  },
  {
    icon: ShieldCheck,
    title: 'Prótese e Reabilitação',
    desc: 'Soluções modernas e imperceptíveis para recuperar a funcionalidade e a estética completa da sua mastigação.',
    link: '/servicos#protese',
  },
]

export function ServicesPreview() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            Especialidades Premium
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos tratamentos de ponta focados na estética e harmonia facial, utilizando
            materiais de altíssima qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <Link key={idx} to={service.link} className="group h-full">
              <Card
                className={cn(
                  'h-full transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 bg-white border-border/50',
                  isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0',
                )}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-4">
                    {service.desc}
                  </CardDescription>
                  <span className="text-sm font-medium text-primary flex items-center group-hover:underline underline-offset-4">
                    Saiba mais{' '}
                    <ArrowRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
