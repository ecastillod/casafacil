import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/AuthContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo con el ícono de casa */}
          <div className="flex items-center space-x-2">
            <Home className="h-10 w-10 text-primary fill-primary" />
            <Link to="/" className="text-3xl font-bold text-black">
              Boreal
              <br />
              <p className="text-sm md:text-sm text-black leading-relaxed">
            by <span className="text-bold text-sm">Grupo B<span className="text-archivo text-[#3bb143]">o</span>sque Real</span>
          </p>
            </Link>
          </div>

          {/* Opciones del menú y botones (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/propiedades" className="text-primary font-bold py-2 px-4 rounded-lg border border-primary hover:bg-orange-500 hover:text-white hover:border-white transition-colors font-medium">
              <b>Ver todas las propiedades</b>
            </Link>

            {user ? (
              <>
                {/* Opciones después de iniciar sesión */}
                <Link to="/publicar" className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500">
                  Publicar
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-800 font-semibold">{user.nombreCompleto}</span>
                  <div className="w-8 h-8 rounded-full bg-[#717779] text-white flex items-center justify-center font-bold">
                    {user.nombreCompleto.charAt(0)}
                  </div>
                  <Button onClick={logout} 
                          className="flex items-center space-x-2 text-primary border border-primary bg-white hover:bg-primary hover:text-white">
                    <LogOut className="h-4 w-4" />
                    <span>Salir</span>
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Opciones antes de iniciar sesión */}
                <Link to="/login">
                  <Button variant="ghost" className="text-white font-bold bg-primary hover:bg-orange-500 hover:text-white">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-primary text-white font-bold bg-orange-500">
                    Publicar una propiedad
                  </Button>
                </Link>
              </>
            )}
            {/* Botón de WhatsApp - Siempre visible */}
            <a href="https://wa.me/525580190233?text=Hola,%20quisiera%20informacion%20sobre%20una%20propiedad" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#3bb143] hover:bg-primary text-white font-bold py-2 px-4 rounded">
                Contáctanos
              </Button>
            </a>
          </div>

          {/* Botón de menú para móviles */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-surface">
              <Link
                to="/propiedades"
                className="block px-3 py-2 text-orange-500 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Propiedades
              </Link>

              {user ? (
                <>
                  <Link
                    to="/publicar"
                    className="block px-3 py-2 text-[#2b7cee] hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Publicar
                  </Link>
                  <div className="px-3 py-2 border-t border-border flex flex-col space-y-2">
                    <span className="text-gray-800 font-semibold">{user.nombreCompleto}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#2b7cee] text-white flex items-center justify-center font-bold">
                        {user.nombreCompleto.charAt(0)}
                      </div>
                      <Button onClick={logout} 
                              className="flex items-center space-x-2 text-orange-500 border border-orange-500 bg-white hover:bg-orange-500 hover:text-white w-full justify-center">
                        <LogOut className="h-4 w-4" />
                        <span>Salir</span>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registro
                  </Link>
                </>
              )}
              {/* Botón de WhatsApp - Siempre visible en el móvil */}
              <div className="px-3 py-2 border-t border-border mt-2">
                <a href="https://wa.me/525580190233?text=Hola,%20quisiera%20informacion%20sobre%20una%20propiedad" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#3bb143] hover:bg-primary text-white font-bold py-2 px-4 rounded w-full">
                    Contáctanos
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;