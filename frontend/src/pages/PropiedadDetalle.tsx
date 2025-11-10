import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/AuthContext';

const PropiedadDetalle = () => {
  const { id } = useParams(); // ✅ Aquí se obtiene el ID
  const navigate = useNavigate();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, getToken } = useAuth();

  useEffect(() => {
    const fetchPropiedad = async () => {
      try {
        // ✅ Aquí se usa la variable 'id' para construir la URL
        const response = await fetch(`http://localhost:5000/api/propiedades/${id}`);
        const data = await response.json();
        if (response.ok) {
          setPropiedad(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Error al conectar con el servidor.");
      } finally {
        setLoading(false);
      }
    };
    fetchPropiedad();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta propiedad?")) {
      const token = getToken();
      try {
        const response = await fetch(`http://localhost:5000/api/propiedades/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          alert("Propiedad eliminada con éxito.");
          navigate('/propiedades');
        } else {
          const result = await response.json();
          alert(`Error al eliminar: ${result.message}`);
        }
      } catch (err) {
        alert("Error al conectar con el servidor.");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error || !propiedad) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 py-8 text-center">
          <p className="text-red-500 font-bold">{error || "Propiedad no encontrada."}</p>
        </main>
        <Footer />
      </div>
    );
  }

  const isOwner = user && propiedad.creador?._id === user.id;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{propiedad.titulo}</h1>
          {isOwner && (
            <div className="flex gap-4 mb-4">
              <Link to={`/editar-propiedad/${propiedad._id}`}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Editar Propiedad
                </button>
              </Link>
              <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Eliminar Propiedad
              </button>
            </div>
          )}
          <p className="text-xl text-blue-500 font-semibold mb-4">${propiedad.precio.toLocaleString('es-MX')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col space-y-4">
              {propiedad.imagenes && propiedad.imagenes.length > 0 && (
                <img
                  src={propiedad.imagenPrincipal || propiedad.imagenes[0]}
                  alt={`Imagen principal de ${propiedad.titulo}`}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {propiedad.imagenes.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Detalles</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-medium">Tipo:</span> {propiedad.tipo}</li>
                  <li><span className="font-medium">Habitaciones:</span> {propiedad.habitaciones}</li>
                  <li><span className="font-medium">Baños:</span> {propiedad.banos}</li>
                  <li><span className="font-medium">Metros Cuadrados:</span> {propiedad.metrosCuadrados} m²</li>
                  <li><span className="font-medium">Estacionamientos:</span> {propiedad.estacionamientos}</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Ubicación</h2>
                <p className="text-gray-600">{propiedad.ubicacion}</p>
                {propiedad.mapUrl && (
                  <div className="mt-4 relative w-full h-64 border rounded overflow-hidden">
                    <iframe
                      title="Google Maps Location"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      src={propiedad.mapUrl}
                    ></iframe>
                  </div>
                )}
                {propiedad.mapUrl && (
                  <a
                    href={propiedad.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-500 hover:underline"
                  >
                    Ver en Google Maps
                  </a>
                )}
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Descripción</h2>
                <p className="text-gray-600">{propiedad.descripcion}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
                {propiedad.creador && (
                  <>
                    <p><span className="font-medium">Creador:</span> {propiedad.creador.nombreCompleto}</p>
                    <p><span className="font-medium">Teléfono:</span> {propiedad.creador.telefono}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropiedadDetalle;