import greystarImage from '@/assets/greystar.png';
import amenifyImage from '@/assets/amenify.png'
import livinxxImage from '@/assets/livinxx.png'
import financeImage from '@/assets/finance.png'
import fotoImage from '@/assets/foto.png'
import { Award, BadgeCheck, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Presentation = () => {

return (
<section className="section-padding bg-background">
      <div className="container-max">

        {/* Sección 1 */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Objetivos
          </h2>
          <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>

    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
      Incluir a los inqulinos dentro del pipeline de ventas.
    </h3>
  </div>
  <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>

    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
Fortalecer relación con inquilinos.    </h3>
  </div>
  <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <div className="w-20 h-20 bg-[#f8dc75] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>

    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
      Para 2030 alcanzar 5% de conversión de inquilino a propietario.
    </h3>
  </div>
  </div>
  </div>
        <br />
<br />
  <br />
<br />
        {/* Sección 2 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Oportunidades de corto plazo
          </h2>
          <br />
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">
                Atender Leads
              </h3>
              <p className="text-xl text-text-secondary">
                Perfilarlos y atenderlos con aliados.
                </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">
                Crear BBDD
              </h3>
              <p className="text-xl text-text-secondary">
Incluir todos los inquilinos, actuales y nuevos.              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">
                Identificar inventario total
              </h3>
              <p className="text-xl text-text-secondary">
                Incluyendo todas las propiedades ya rentadas.
              </p>
            </div>
            </div>
            
            <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">
                Conexión con Aliados
              </h3>
              <p className="text-xl text-text-secondary">
                Formalizar relación con brokers e inmobiliarias.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">
                Plan Financiero Boreal
              </h3>
              <p className="text-xl text-text-secondary">
                Definir modelo de negocio con proyección a 5 años.
              </p>
            </div>
          </div>
        </div>
        </div>
<br />
<br />
<br />
<br />

{/* Sección 3 */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
Iniciativas estratégicas          </h2>
          <br />
            <div>
  <div className="bg-secondary rounded-2xl p-8 m-8">
    <h3 className="text-3xl font-semibold text-white mb-3">
      Desarrollar una plataforma inmobiliaria con todo el inventario de rentas.
</h3>
  </div>
  <div className="bg-success rounded-2xl p-8 m-8 text-center">
    <h3 className="text-3xl font-semibold text-white mb-3">
       Fortalecer la BBDD y la estructura de analisis de datos.
</h3>
  </div>
  <div className="bg-primary-hover rounded-2xl p-8 m-8 text-center">
    <h3 className="text-3xl font-semibold text-white mb-3">
Diseñar la estrategia de Marketing con foco en fidelización y conversión.
</h3>
  </div>
  </div>
  </div>

<br />
<br />
 {/* Sección 4 */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Modelo de Negocio
          </h2>
          <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
  <div className="bg-card border border-primary rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
     <br />
  <br />
  <br />
    <div className="w-20 h-20 bg-[#f8dc75] rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign text-white"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
Comisión por renta <br />(media mensualidad).    </h3>
  </div>
  <div className="bg-card border border-primary rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
     <br />
  <br />
  <br />
    <div className="w-20 h-20 bg-[#f8dc75] rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign text-white"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>

    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
Comisión por administración. <br />(2% mensual)  </h3>
  </div>
  <div className="bg-card border border-primary rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
     <br />
  <br />
  <br />
    <div className="w-20 h-20 bg-[#f8dc75] rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign text-white"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
    </div>
    <h3 className="text-2xl font-semibold text-text-primary mb-3">
      Comisión por ventas. 
      <br />
      (4%)
    </h3>
    <br />
  <br />
  <br />
  <br />
  </div>
  
  </div>
  <br />
  <br />

  <br />
  <br />
  <br />
  <br />
   <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            ¿Por qué es atractivo?
          </h2>
          <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <Button className="text-2xl bg-secondary font-semibold text-white mb-3">Propietario</Button>
    <br />
    <br />
    <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Paga menos comisión
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Opción de Property Management
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">
      Acceso a datos del mercado
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">
      Inversión más segura
</p>
  </div>
  </div>
  <div className="rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <Button className="text-2xl bg-secondary font-semibold text-white mb-3">
Inquilino</Button>
<br />
    <br />
    <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Beneficios por compartir información
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Primicias de ventas
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Concierge (6 meses)
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">
      Renta justa
</p>
<br />
<br /><br />
  </div>
  </div>
  <div className="rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
    <Button className="text-2xl bg-secondary font-semibold text-white mb-3">
      Inmobiliaria
    </Button>
    <br />
    <br />
    <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Fuente de leads calificados
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Servicio Property Management
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">Aliado Bosque Real
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
    <p className="text-2xl text-primary">
      Acceso a datos del mercado
</p>
  </div>
  </div>
  </div>
<br />
<br /><br />
  <br />  <br />
  <br />
  </div>
  <h2 className="text-4xl md:text-5xl m-24 font-bold text-text-primary">
            Plan Financiero
          </h2>
         <div>  
  <div className="pl-20 flex mb-6 mx-auto w-[90%]">
    <ul className="text-3xl ml-10 mr-10 space-y-3">
              <li>
                <h2 className="text-left text-secondary font-bold text-5xl">
                  KPIs
                </h2>
              </li>
              <li>
                <h2 className="text-left text-primary font-bold">
                  Renta directa: <span className='text-orange-500'>90%</span>
                </h2>
              </li>
              <li>
                <h2 className="text-left text-primary font-bold">
                  # de usuarios en BBDD: <span className='text-orange-500'>1,813</span>
                </h2>
              </li>
              <li>
                <h2 className="text-left text-primary font-bold">
                  % de conversión a venta: <span className='text-orange-500'>5%</span>
                </h2>
              </li>
              <br />
              <br />
              <li>
                <h2 className="text-left text-secondary font-bold text-5xl">
                  Proyección a 5 años
                </h2>
              </li>
              <li>
                <img
      src={financeImage} 
      alt="finance"
      className="w-[90%] pt-10 pb-10"
    />
              </li>
              </ul>
  </div>
  <h2 className="text-center text-black font-bold text-5xl">
                  241 propiedades vendidas para 2030
                </h2>
                <br />
                <br />
</div>
<a 
    href="https://docs.google.com/spreadsheets/d/1CfJfeMWIXggWzZfMG9eQVpESGtECkp493cxX2CGtjOw/edit?usp=sharing" 
    target="_blank"
    className="block w-[80%] mx-auto" // 'block' para que respete el ancho y 'mx-auto' para centrar
  >
    <Button className="text-xl bg-[#3bb143] w-full">
      Ver detalle en Hoja de Cálculo
    </Button>
  </a>
</div>

        <br />
<br />

<br />
<br />


{/* Sección 5 */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            ¿Cómo aumentar la conversión?
          </h2>
          <br />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
  <div className="rounded-2xl bg-primary-hover p-10 text-center">
    <h3 className="text-3xl font-semibold text-white mb-3">
Analisis de Datos</h3>
<br />
<div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Alimentar Base de Datos
</p>
  </div>
  <br />
              <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Generar insights
</p>
  </div>
  <br />
              <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Herramientas AI
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Sistema de Score
</p>
  </div>
  </div>
    <div className="rounded-2xl bg-secondary p-10 text-center">
    <h3 className="text-3xl font-semibold text-white mb-3">
Comunicación</h3>
<br />
<div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Email / WhatsApp
</p>
  </div>
  <br />
              <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Eventos / Presentaciones
</p>
  </div>
  <br />
              <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Aprovechar espacios OOH
</p>
  </div>
  </div>
    <div className="rounded-2xl bg-success p-10 text-center">
    <h3 className="text-3xl font-semibold text-white mb-3">
Club Boreal</h3>
<br />
<div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Premios/Descuentos
</p>
  </div>
  <br />
              <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Primicias de Ventas
</p>
  </div>
  <br />
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white font-bold flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Financiamiento
</p>
</div>
<br />
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-6 h-6 text-white font-bold flex-shrink-0 mt-1" />
    <p className="text-2xl text-white">Comunicaciones / Noticias
</p>
</div>
  <br /><br />
  <br /><br />
  <br /><br />
  </div>
  </div>
    </div>
  <br />
  <br />
  {/* Sección 6 */}

<div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
Otras plataformas de renta          </h2>
<br />
<br />

<div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <h3 className="text-4xl font-semibold text-primary mb-8">
    Livinnxx
  </h3>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
        <div className="space-y-4">
  
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 font-bold flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Renta tipo coliving.
</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Atienden un nicho muy especifico.</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Incluyen los servicios en el pago.</p>
  </div>

</div>
    <div className="md:col-span-2 h-full min-h-[300px]">
      <img
        src={livinxxImage}
        alt="Livinxx"
        className="w-full h-full object-cover border rounded-xl"
      />
    </div>

  </div>
  <br />
</div>
<br />
<br />
<div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <h3 className="text-4xl font-semibold text-primary mb-8">
    Amenify
  </h3>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
        <div className="space-y-4">
  
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 font-bold flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">App de amenidades y servicios para inquilinos.
</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Utilizan la información para monetizar más.
</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">AI y ML para ofrecer servicios relevantes.</p>
  </div>

</div>
    <div className="md:col-span-2 h-full min-h-[300px]">
      <img
        src={amenifyImage}
        alt="Amenify"
        className="w-full h-full object-cover border rounded-xl"
      />
    </div>

  </div>
  <br />
</div>
<br />
<br />
<div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <h3 className="text-4xl font-semibold text-primary mb-8">
    Greystar
  </h3>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
    
    <div className="space-y-4">
  
  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 font-bold flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Plataforma #1 de Property Management en EEUU.</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Desarrolla, renta y administra.</p>
  </div>

  <div className="flex gap-3 items-start text-left">
    <CircleCheckBig className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />
    <p className="text-xl text-text-primary">Diferentes marcas para diferentes públicos.</p>
  </div>

</div>

    <div className="md:col-span-2 h-full min-h-[300px]">
      <img
        src={greystarImage}
        alt="Greystar Property Management"
        className="w-full h-full object-cover border rounded-xl"
      />
    </div>

  </div>
  <br />
</div>          
          </div>
</div>
<br />
<br />

  {/* Sección 7 */}
<h2 className="text-4xl md:text-5xl font-bold text-center pb-10 text-primary mb-6">
           Eduardo Castillo Díaz
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mb-16">
          <img
      src={fotoImage}
      alt="foto"
      className="w-[100%] pb-0"
    />
          <div>
  <div className="flex gap-3 items-start text-left">
    <BadgeCheck className="w-9 h-9 text-success font-bold flex-shrink-0 mt-1" />
    <p className="text-3xl text-primary font-bold">Liderazgo
</p>
</div>
<br />
<div className="flex gap-3 items-start text-left">
    <BadgeCheck className="w-9 h-9 text-success font-bold flex-shrink-0 mt-1" />
    <p className="text-3xl text-primary font-bold">Experiencia en real estate
</p>
</div>
<br />
<div className="flex gap-3 items-start text-left">
    <BadgeCheck className="w-9 h-9 text-success font-bold flex-shrink-0 mt-1" />
    <p className="text-3xl text-primary font-bold">Experiencia en Marketing y Ventas
</p>
</div>
<br />
</div>
</div>
      


    </section>
         );
    };

    export default Presentation