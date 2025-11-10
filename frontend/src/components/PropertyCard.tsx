import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  status?: 'available' | 'sold' | 'reserved';
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  featured = false,
  status = 'available'
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-success text-success-foreground';
      case 'sold':
        return 'bg-destructive text-destructive-foreground';
      case 'reserved':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-success text-success-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'sold':
        return 'Vendido';
      case 'reserved':
        return 'Reservado';
      default:
        return 'Disponible';
    }
  };

  return (
    <div className="property-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title}
          className="property-image w-full h-full object-cover"
        />
        
        {/* Status Badge */}
        <Badge className={`absolute top-4 left-4 ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </Badge>

        {/* Featured Badge */}
        {featured && (
          <Badge className="absolute top-4 right-14 bg-secondary text-secondary-foreground">
            Destacada
          </Badge>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-text-muted'}`}
          />
        </button>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button className="btn-outline bg-background/90">
            Ver Detalles
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="price-highlight mb-3">
          {formatPrice(price)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-text-muted mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}m²</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="btn-primary flex-1">
            Contactar
          </Button>
          <Button className="btn-outline">
            Ver Más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;