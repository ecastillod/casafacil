import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: '1',
      title: 'Departamento Moderno en renta',
      location: 'Torre Augusta, Bosque Real',
      price: 35000,
      bedrooms: 3,
      bathrooms: 3,
      area: 164,
      image: property1,
      featured: true,
      status: 'available' as const
    },
    {
      id: '2',
      title: 'Departamento Totalmente Nuevo en Renta',
      location: 'Core 31, Bosque Real',
      price: 55000,
      bedrooms: 3,
      bathrooms: 3,
      area: 171,
      image: property2,
      featured: true,
      status: 'available' as const
    },
    {
      id: '3',
      title: 'Casa con vista al campo de Golf',
      location: 'Boulevard Bosque Real, Huixquilucan',
      price: 320000,
      bedrooms: 4,
      bathrooms: 4,
      area: 1000,
      image: property3,
      featured: true,
      status: 'reserved' as const
    }
  ];

  return (
    <section id="propiedades" className="section-padding bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-text-primary mb-6">
            DEPARTAMENTOS DE LUJO EN RENTA
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Nuestra selección de propiedades más atractivas para rentar hoy.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/propiedades">
              <Button className="btn-primary text-lg px-8 py-4">
                  Ver Todas las Propiedades
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">+120</div>
            <div className="text-primary">Propiedades disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-primary">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">25</div>
            <div className="text-primary">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-primary">Atención al Cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;