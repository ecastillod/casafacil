import React from 'react';

// Define la estructura de una propiedad
interface Propiedad {
  _id: string; // MongoDB usa _id para el identificador
  titulo: string;
  precio: number;
  ubicacion: string;
  habitaciones: number;
  banos: number;
  metrosCuadrados: number;
  descripcion: string;
  imagenes: string[];
}

// 1. Define las propiedades que el componente puede recibir
interface PropiedadesListadoProps {
  propiedades: Propiedad[];
}

// 2. El componente ahora acepta las propiedades
const PropiedadesListado: React.FC<PropiedadesListadoProps> = ({ propiedades }) => {
  // Ya no necesita lógica de fetch, la recibe desde el componente padre (Listing.tsx)

  if (!propiedades || propiedades.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No se encontraron propiedades.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Propiedades Destacadas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {propiedades.map((propiedad) => (
          <div key={propiedad._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={propiedad.imagenes[0] || 'https://via.placeholder.com/400x250.png?text=Sin+Imagen'} 
              alt={propiedad.titulo} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{propiedad.titulo}</h3>
              <p className="text-gray-600 mt-1">{propiedad.ubicacion}</p>
              <p className="text-2xl font-bold text-primary mt-2">${propiedad.precio.toLocaleString('es-MX')}</p>
              <div className="mt-3 text-sm text-gray-700">
                <p>{propiedad.habitaciones} hab. | {propiedad.banos} baños | {propiedad.metrosCuadrados} m²</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropiedadesListado;