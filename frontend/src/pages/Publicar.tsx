import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/AuthContext';

const API_KEY = 'AIzaSyAp3pxMU9EDN6rWsWVhrNxK4PZHQrnwZE8';

const Publicar = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    descripcion: '',
    tipo: 'casa',
    habitaciones: '',
    banos: '',
    metrosCuadrados: '',
    estacionamientos: '',
    direccion: '',
    colonia: '',
    ciudad: '',
    codigoPostal: '',
    imagenPrincipal: '0',
  });
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [existingImages, setExistingImages] = useState([]);
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const autocompleteInput = useRef(null);

  useEffect(() => {
    if (isEditing) {
      const fetchPropiedad = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:5000/api/propiedad/${id}`);
          const data = await response.json();
          if (response.ok) {
            setFormData({
              titulo: data.titulo,
              precio: data.precio,
              descripcion: data.descripcion,
              tipo: data.tipo,
              habitaciones: data.habitaciones,
              banos: data.banos,
              metrosCuadrados: data.metrosCuadrados,
              estacionamientos: data.estacionamientos,
              direccion: data.direccion,
              colonia: data.colonia,
              ciudad: data.ciudad,
              codigoPostal: data.codigoPostal,
              imagenPrincipal: data.imagenPrincipal,
            });
            setExistingImages(data.imagenes);
          } else {
            setMessage(`Error al cargar la propiedad: ${data.message}`);
          }
        } catch (error) {
          setMessage('Error al conectar con el servidor.');
        } finally {
          setLoading(false);
        }
      };
      fetchPropiedad();
    }
  }, [id, isEditing]);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteInput.current,
        {
          types: ['address'],
          componentRestrictions: { country: ['mx'] },
        }
      );

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.address_components) {
          setMessage('Dirección no válida. Por favor, selecciona una de la lista.');
          return;
        }

        let address = '';
        let colonia = '';
        let city = '';
        let postalCode = '';
        
        for (const component of place.address_components) {
          const componentType = component.types[0];
          switch (componentType) {
            case 'street_number':
              address = `${component.long_name} ${address}`;
              break;
            case 'route':
              address = `${address} ${component.long_name}`;
              break;
            case 'sublocality_level_1':
              colonia = component.long_name;
              break;
            case 'locality':
              city = component.long_name;
              break;
            case 'postal_code':
              postalCode = component.long_name;
              break;
          }
        }
        
        setFormData(prevData => ({
          ...prevData,
          direccion: address.trim(),
          colonia: colonia,
          ciudad: city,
          codigoPostal: postalCode,
        }));
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImagenes(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(isEditing ? 'Actualizando propiedad...' : 'Publicando propiedad...');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    imagenes.forEach(imagen => {
      data.append('imagenes', imagen);
    });

    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(`${formData.direccion}, ${formData.colonia}, ${formData.ciudad}, ${formData.codigoPostal}`)}`;
    data.append('mapUrl', mapUrl);

    const token = getToken();

    try {
      const url = isEditing
        ? `http://localhost:5000/api/propiedad/${id}`
        : 'http://localhost:5000/api/propiedades/publicar';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`✅ Propiedad ${isEditing ? 'actualizada' : 'publicada'} con éxito.`);
        navigate(`/propiedad/${result.propiedad._id}`);
      } else {
        setMessage(`❌ Error: ${result.message}`);
      }

    } catch (error) {
      setMessage('❌ Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(`${formData.direccion}, ${formData.colonia}, ${formData.ciudad}, ${formData.codigoPostal}`)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isEditing ? 'Editar Propiedad' : 'Publicar Propiedad'}
        </h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
            <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Precio:</label>
              <input type="number" name="precio" value={formData.precio} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Tipo de Propiedad:</label>
              <select name="tipo" value={formData.tipo} onChange={handleChange} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="oficina">Oficina</option>
                <option value="local_comercial">Local Comercial</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Recámaras:</label>
              <input type="number" name="habitaciones" value={formData.habitaciones} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Baños:</label>
              <input type="number" name="banos" value={formData.banos} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Estacionamientos:</label>
              <input type="number" name="estacionamientos" value={formData.estacionamientos} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Metros Cuadrados:</label>
              <input type="number" name="metrosCuadrados" value={formData.metrosCuadrados} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" required />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Dirección Completa (buscar en Google Maps):</label>
            <input
              type="text"
              name="direccionCompleta"
              ref={autocompleteInput}
              placeholder="Escribe para buscar una dirección..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="hidden">
              <label className="block text-gray-700 text-sm font-bold mb-2">Dirección:</label>
              <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <div className="hidden">
              <label className="block text-gray-700 text-sm font-bold mb-2">Colonia:</label>
              <input type="text" name="colonia" value={formData.colonia} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <div className="hidden">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ciudad:</label>
              <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <div className="hidden">
              <label className="block text-gray-700 text-sm font-bold mb-2">Código Postal:</label>
              <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
            </div>
          </div>
          
          {formData.direccion && formData.ciudad && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Previsualización en el mapa
              </label>
              <div className="relative w-full h-64 border rounded overflow-hidden">
                <iframe
                  title="Google Maps"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  src={embedUrl}
                ></iframe>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Descripción (máx. 1000 caracteres):</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-32" maxLength={1000} required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Imágenes Existentes:</label>
            <div className="grid grid-cols-3 gap-2">
              {existingImages.map((imgUrl, index) => (
                <div key={index} className="relative">
                  <img src={imgUrl} alt={`Existente ${index}`} className="w-full h-24 object-cover rounded" />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Adjuntar Nuevas Imágenes (máx. 10):</label>
            <input type="file" name="imagenes" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" multiple accept="image/*" />
            <p className="mt-1 text-xs text-gray-500">Subir nuevas imágenes reemplazará a las anteriores.</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? (isEditing ? 'Actualizando...' : 'Publicando...') : (isEditing ? 'Actualizar' : 'Publicar')}
            </button>
          </div>
          {message && <p className="mt-4 text-center text-sm">{message}</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Publicar;