import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-text-inverse">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-secondary mb-4">
              Boreal
            </div>
            <p className="text-text-inverse/80 mb-6 leading-relaxed">
              Bosque Real ofrece un estilo de vida excepcional con residenciales y departamentos de lujo. Su ubicación es privilegiada y gracias a esta, la calidad de vida aquí es incomparable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-text-inverse/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-text-inverse/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-text-inverse/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-text-inverse/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Compra de propiedades
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Venta de propiedades
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Renta de propiedades
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Asesoría legal
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Financiación
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ubicaciones</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Maison Furnished by Elie Saab Maison
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  The Residences by Roche Bobois
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Sky View
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Ivy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Blue
                </a>
              </li>
              <li>
                <a href="#" className="text-text-inverse/80 hover:text-secondary transition-colors">
                  Ver todos los proyectos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-text-inverse/80">+52 55 8019 0233</p>
                  <p className="text-sm text-text-inverse/60">Lun - Vie, 9:00am - 7:00pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-text-inverse/80">info@boreal.mx</p>
                  <p className="text-sm text-text-inverse/60">Respuesta en 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <p className="text-text-inverse/80">Blvrd. Bosque Real, Bosque Real, 52770</p>
                  <p className="text-text-inverse/80">Huixquilucan, Edo de México.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-text-inverse/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-inverse/60 text-sm mb-4 md:mb-0">
              © 2024 Boreal. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-text-inverse/60 hover:text-secondary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-text-inverse/60 hover:text-secondary transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-text-inverse/60 hover:text-secondary transition-colors">
                Cookies
              </a>
              <a href="#" className="text-text-inverse/60 hover:text-secondary transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;