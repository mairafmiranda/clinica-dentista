import { Link } from 'react-router-dom'
import {
  Stethoscope,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Stethoscope size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Sorriso Limpo
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando sorrisos com excelência, tecnologia e um atendimento humanizado focado
              no seu bem-estar.
            </p>
            <div className="flex gap-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-accent text-primary hover:bg-primary hover:text-white"
              >
                <Instagram size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-accent text-primary hover:bg-primary hover:text-white"
              >
                <Facebook size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-accent text-primary hover:bg-primary hover:text-white"
              >
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary transition-colors">
                  Nossos Tratamentos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Sobre a Clínica
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Especialidades</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Clareamento Dental</li>
              <li>Lentes de Contato</li>
              <li>Próteses Modernas</li>
              <li>Implantes Dentários</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contato@sorrisolimpo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Consultório Sorriso Limpo. Todos os direitos
            reservados.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-muted-foreground hover:text-primary"
          >
            Voltar ao topo <ArrowUp size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
