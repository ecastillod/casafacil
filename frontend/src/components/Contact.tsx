import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            ¿Listo para encontrar tu próxima propiedad?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y da el primer paso hacia tu nueva vida. 
            <br/>Te acompañamos en todo el proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-card-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Nombre completo
                  </label>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="search-input"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Teléfono
                  </label>
                  <Input
                    placeholder="+52 55 9876 4321"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="search-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="search-input"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary mb-2 block">
                  ¿En qué te podemos ayudar?
                </label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="search-input">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comprar">Quiero comprar una propiedad</SelectItem>
                    <SelectItem value="vender">Quiero vender mi propiedad</SelectItem>
                    <SelectItem value="alquilar">Busco rentar</SelectItem>
                    <SelectItem value="informacion">Información general</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Cuéntanos más detalles sobre lo que buscas..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="search-input min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button type="submit" className="btn-primary w-full text-lg py-4">
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8">
              Información de contacto
            </h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Teléfono</h4>
                  <p className="text-text-secondary">+52 55 8019 0233</p>
                  <p className="text-text-muted text-sm">Lunes a Viernes, 9:00am - 7:00pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-text-secondary">info@boreal.mx</p>
                  <p className="text-text-muted text-sm">Respuesta en 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Oficina</h4>
                  <p className="text-text-secondary">Blvrd. Bosque Real, Bosque Real, 52770</p>
                  <p className="text-text-secondary">Huixquilucan, Edo de México.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Horarios</h4>
                  <p className="text-text-secondary">Lunes - Viernes: 9:00am - 7:00pm</p>
                  <p className="text-text-secondary">Sábados: 10:00am - 2:00pm</p>
                  <p className="text-text-secondary">Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-12 p-6 bg-primary-light rounded-2xl">
              <h4 className="font-semibold text-primary mb-3">¿Necesitas ayuda urgente?</h4>
              <p className="text-primary/80 mb-4">
                Nuestro equipo de emergencias está disponible 24/7 para situaciones urgentes.
              </p>
             <a href="https://wa.me/525580190233?text=Hola,%20necesito%20ayuda" target="_blank">
              <Button className="bg-[#3bb143] w-full">
                  WhatsApp
                </Button>
              </a>
              </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            ¡Empieza tu búsqueda hoy!
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Regístrate para acceder a propiedades exclusivas y recibir alertas personalizadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Tu email"
              className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;