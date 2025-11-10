import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom'; // ✅ Importa el componente Link

interface Propiedad {
  _id: string;
  titulo: string;
  precio: number;
  ubicacion: string;
  imagenes: string[];
  imagenPrincipal: string;
}

const Listing = () => {
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPropiedades = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/propiedades');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de propiedades.');
        }
        const data = await response.json();
        setPropiedades(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPropiedades();
  }, []);

  if (loading) return <div className="text-center py-10">Cargando propiedades...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Propiedades Disponibles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {propiedades.map((propiedad) => (
            // ✅ Usa el componente Link para envolver cada tarjeta de propiedad
            <Link key={propiedad._id} to={`/propiedad/${propiedad._id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={propiedad.imagenPrincipal} alt={propiedad.titulo} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{propiedad.titulo}</h2>
                  <p className="text-gray-600 text-sm mb-1">{propiedad.ubicacion}</p>
                  <p className="text-2xl font-bold text-primary mt-2">${propiedad.precio.toLocaleString('es-MX')}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listing;