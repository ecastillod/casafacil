import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  const handleSearch = () => {
    console.log('Searching with:', searchData);
    // Implement search functionality
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Casa moderna de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6 leading-tight">
           BOSQUE REAL TE ESPERA
            <span className="text-secondary font-semibold text-6xl block">ENCUENTRA TU SIGUIENTE HOGAR</span>
          </h1>
          <p className="text-xl md:text-xl text-text-inverse/90 mb-8 leading-relaxed">
            Más de 100 propiedades disponibles para rentar desde hoy en <Button className='font-bold text-xl h-6 bg-secondary hover:bg-secondary text-white'>Bosque Real</Button>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="trust-badge">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Propiedades Verificadas
            </div>
            <div className="trust-badge">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Proceso Transparente
            </div>
            <div className="trust-badge">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Asesoría Gratuita
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
                  <Input
                    placeholder="Ubicación"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                    className="pl-10 search-input"
                  />
                </div>
                
                <Select onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                  <SelectTrigger className="search-input">
                    <Home className="h-5 w-5 bg-background/95 text-text-muted mr-2" />
                    <SelectValue placeholder="Tipo de propiedad" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95">
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="local">Local comercial</SelectItem>
                    <SelectItem value="oficina">Oficina</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="search-input">
                    <DollarSign className="h-5 w-5 text-text-muted mr-2" />
                    <SelectValue placeholder="Precio" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95">
                    <SelectItem value="0-2499000">Hasta $2,499,000</SelectItem>
                    <SelectItem value="2500000-5499000">$2,500,000 - $5,499,000</SelectItem>
                    <SelectItem value="5500000-9000000">$5,500,000 - $9,000,000</SelectItem>
                    <SelectItem value="9000000+">Más de $9,000,000</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={handleSearch} className="btn-primary h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
          <br />
          <p className="text-xl md:text-xl text-text-inverse/90 mb-8 leading-relaxed">
            Powered by <span className="text-white text-bold text-2xl">Grupo B<span className="text-2xl text-archivo text-[#3bb143]">o</span>sque Real</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;