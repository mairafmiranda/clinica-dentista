import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório').max(100),
  phone: z.string().min(10, 'Telefone inválido').max(15),
  email: z.string().email('Email inválido'),
  subject: z.string().min(2, 'Assunto é obrigatório'),
  message: z.string().min(10, 'A mensagem deve ter no mínimo 10 caracteres'),
})

export default function Contact() {
  const { search } = useLocation()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  // Pre-fill subject if passed via query param (e.g., from Services page)
  useEffect(() => {
    const params = new URLSearchParams(search)
    const subjectParam = params.get('assunto')
    if (subjectParam) {
      form.setValue('subject', subjectParam)
    }
  }, [search, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log(values)
    setIsSubmitting(false)
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Nossa equipe entrará em contato em breve.',
    })
    form.reset()
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-accent/30 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground animate-fade-in-up">
          Agende sua Consulta
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
          Estamos prontos para atender você. Preencha o formulário abaixo ou utilize nossos canais
          diretos.
        </p>
      </div>

      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up delay-200">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Av. Paulista, 1000 - Cj 52
                      <br />
                      Bela Vista, São Paulo - SP
                      <br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefones</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Fixo: (11) 3333-4444
                      <br />
                      WhatsApp: (11) 99999-9999
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground text-sm mt-1">contato@sorrisolimpo.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Segunda a Sexta: 08h às 19h
                      <br />
                      Sábados: 08h às 13h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 animate-fade-in-up delay-300">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Envie uma mensagem</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(11) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Assunto (Interesse)</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Clareamento Dental" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Como podemos ajudar?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
