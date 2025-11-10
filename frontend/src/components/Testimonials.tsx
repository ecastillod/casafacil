import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jesús Martínez',
      location: 'Sky View',
      rating: 5,
      text: 'Rente un departamento y me gustó tanto vivir aquí que acabé comprandolo.',
      propertyType: 'Departamento de 3 habitaciones'
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      location: 'Bosque Real',
      rating: 5,
      text: 'La asesoría fue excepcional. Me ayudaron no solo a encontrar la propiedad perfecta, sino también con toda la documentación legal.',
      propertyType: 'Casa familiar'
    },
    {
      id: 3,
      name: 'Ana Casellas',
      location: 'Ciento Ochenta',
      rating: 5,
      text: 'Después de buscar por meses en otras plataformas, aquí encontré lo que necesitaba en solo 2 semanas. Muy recomendable.',
      propertyType: 'Departamento con terraza'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'fill-secondary text-secondary' : 'text-border'
        }`}
      />
    ));
  };

  return (

        <div className="mt-20 pt-16 border-t border-border">
          <p className="text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Miles de familias han encontrado su hogar ideal con nosotros
          </p>
          <br />
          <br />          
          <br />
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-text-primary text-lg">
                  {testimonial.name}
                </div>
                <div className="text-text-muted text-sm">
                  {testimonial.location}
                </div>
                <div className="text-primary text-sm font-medium mt-1">
                  Compró: {testimonial.propertyType}
                </div>
              </div>
            </div>
          ))}
        </div>
                <div className="mt-20 pt-16 border-t border-border">
                </div>
                </div>
                
        );
    };

    export default Testimonials;