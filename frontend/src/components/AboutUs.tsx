import { Button } from '@/components/ui/button';
import { Award, Users, Target, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="section-padding bg-surface">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              25 años creando 
              <span className="text-primary block"> experiencias de lujo</span>
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Las experiencias residenciales que ofrecemos son únicas en México. Nuestros departamentos de lujo en Ciudad de México se acomodan a las necesidades y exigencias de nuestros clientes. Todos incluyen extraordinarias amenidades que complementan el bienestar y forman parte del estilo de vida Bosque Real.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    MISION CLARA
                  </h3>
                  <p className="text-text-secondary">
Estilo de vida excepcional, ubicación privilegiada y calidad de vida incomparable.                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    EQUIPO EXPERTO
                  </h3>
                  <p className="text-text-secondary">
                    Nuestro equipo de asesores te acompañará en cada 
                    paso, desde la búsqueda hasta la firma.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    CALIDAD GARANTIZADA
                  </h3>
                  <p className="text-text-secondary">
                    Todas nuestras propiedades son verificadas y evaluadas por 
                    profesionales antes de ser listadas.
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-primary text-lg px-8 py-4">
              Conoce Nuestro Equipo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Team Image Placeholder */}
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-8 text-center text-primary-foreground">
                <div className="text-4xl font-bold mb-2">+4,300</div>
                <div className="text-sm opacity-90">Clientes Satisfechos</div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary rounded-2xl p-8 text-center text-secondary-foreground mt-8">
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-sm opacity-90">Años de Experiencia</div>
              </div>
              
              <div className="bg-gradient-to-br from-success to-success rounded-2xl p-8 text-center text-success-foreground -mt-8">
                <div className="text-3xl font-bold mb-2">14 proyectos</div>
                <div className="text-sm opacity-90">Para que vivas el lujo.</div>
              </div>
              
              <div className="bg-card border border-card-border rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-text-secondary">Atención al Cliente</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full"></div>
          </div>
        </div>

        {/* Values Section */}
        
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Nuestros Valores
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Los principios que guían cada decisión y nos han llevado a donde estamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">
                Transparencia
              </h4>
              <p className="text-text-secondary">
                Información clara y honesta de principio a fin.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-success lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg></div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">
                Excelencia
              </h4>
              <p className="text-text-secondary">
                Compromiso con la calidad en cada transacción y atención personalizada.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">
                Confianza
              </h4>
              <p className="text-text-secondary">
                Construimos relaciones duraderas basadas en la confianza y el compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;