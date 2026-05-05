import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14',
        'bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600',
        'transition-transform hover:scale-110 duration-300 animate-float',
      )}
      aria-label="Fale conosco no WhatsApp"
    >
      <Phone size={28} className="fill-current" />
    </a>
  )
}
