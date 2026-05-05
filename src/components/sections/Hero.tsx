import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-accent/50 px-3 py-1 text-sm text-primary font-medium">
                <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                Avaliação 5 estrelas em estética
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                Transforme seu Sorriso, <br className="hidden md:block" />
                <span className="text-primary">Renove sua Confiança</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Especialistas em tratamentos estéticos, clareamento avançado e reabilitação oral.
                Conquiste o sorriso perfeito em um ambiente moderno e acolhedor.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link to="/contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                <Link to="/servicos">Conhecer Tratamentos</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src={`https://img.usecurling.com/ppl/thumbnail?seed=${i}`}
                    alt="Paciente feliz"
                  />
                ))}
              </div>
              <p>
                Mais de <strong className="text-foreground">2.000</strong> sorrisos transformados
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[500px] items-center justify-center lg:max-w-none animate-fade-in-up delay-200">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] shadow-elevation">
              <img
                src="https://img.usecurling.com/p/800/600?q=woman%20beautiful%20smile%20dentist"
                alt="Paciente com sorriso perfeito"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
