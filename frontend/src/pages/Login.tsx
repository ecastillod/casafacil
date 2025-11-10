import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Iniciando sesión...');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Inicio de sesión exitoso. Redirigiendo...');
        login(result.token, { nombreCompleto: result.user.nombreCompleto, id: result.user._id });
        navigate('/');
      } else {
        setMessage(`❌ Error: ${result.message}`);
      }

    } catch (error) {
      setMessage('❌ Error al conectar con el servidor.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar Sesión
            </button>
          </div>
          {message && <p className="mt-4 text-center text-sm">{message}</p>}
        </form>
        <div className="mt-6 text-center text-sm">
          ¿Aún no tienes una cuenta? <Link to="/register" className="text-blue-500 hover:underline">Regístrate</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;