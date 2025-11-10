import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

// Si no tienes react-icons, puedes usar un botón de texto
// npm install react-icons

const Buscador = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSearch} className="flex items-center justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por ubicación, título o descripción..."
          className="w-full max-w-xl p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white p-3 rounded-r-md hover:bg-primary-dark transition-colors"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Buscador;