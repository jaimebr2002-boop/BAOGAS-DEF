/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { Instagram, Star, ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

const reserveLink = "https://www.google.com/maps/reserve/v/dine/c/27V4s_unpXY?source=pa&opi=79508299&hl=es-ES&gei=lm6kadLjII-ikdUP6MC9iAo&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Des%26gl%3Des%26pb%3D!1m16!1s0xd6048b622581f9f:0x2424aee08615cec6!3m11!1m3!1d3!2d-0.3680811!3d39.4659812!2m2!1f0!2f90!3m2!1i1920!2i919!4f75!4m2!3d39.4661955!4d-0.3680774!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1sTG6kaaTjMbGskdUPoMPY0AE!7e81!15m113!1m31!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m20!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!27m1!1b0!28b0!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!14m1!3b0!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!21m28!1m6!1m2!1i0!2i0!2m2!1i958!2i919!1m6!1m2!1i1870!2i0!2m2!1i1920!2i919!1m6!1m2!1i0!2i0!2m2!1i1920!2i20!1m6!1m2!1i0!2i899!2m2!1i1920!2i919!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i768!39sBAGOAS%2BGastro%2B%2526%2BDrinks%2B-%2BRestaurante%26q%3DBAGOAS%2BGastro%2B%2526%2BDrinks";

const reviews = [
  { name: "Ismael Sanchis", text: "Buen servicio y comida espectacular. Una joya en la zona de Cánovas con una relación calidad-precio excelente. Sin duda fue una decisión acertadísima venir." },
  { name: "Génesis Rivas", text: "Descubrimos el restaurante paseando y fue un acierto total. Comida con mucho sabor, atención excelente y un espacio muy agradable. El postre de helado de limón fue espectacular. Muy recomendable." },
  { name: "Raquel Vidal Pastor", text: "Fuimos en pareja y tanto la comida como el servicio fueron 10/10. Volveremos sin duda." },
  { name: "Verónica", text: "Me encanta todo: la atención, el servicio y sobre todo la cocina. Pescados, carnes y arroces siempre en su punto. Las croquetas y la merluza, perfectas." },
  { name: "Ricardo Ernesto Gonzalez Nassar", text: "Excelente restaurante, alta calidad en los platos, personal amable y terraza muy agradable. Especialistas en carne a la brasa." },
  { name: "Cristina Magro", text: "Sitio brutal, céntrico y con tapas súper ricas. Trato inmejorable y servicio rápido. Sin duda, tu sitio para cenar en Valencia." },
  { name: "Alejandro Fernandez Cortes", text: "Tras vivir 3 años en Valencia puedo decir que es mi restaurante de referencia. Carne de calidad fabulosa y menú del día con gran relación calidad-precio." },
  { name: "Carmen H", text: "Local agradable y bien decorado. La comida excelente, especialmente los arroces y los postres. Muy recomendable." },
  { name: "Mai Pascual", text: "Entramos por casualidad y fue un descubrimiento maravilloso. Calidad extraordinaria tanto en vinos como en comida. Repetiremos seguro." },
  { name: "Miguel José Conde Navarro", text: "Servicio rápido, ambiente tranquilo y carta variada. Ventresca de atún y salmón con verduras excelentes. Muy recomendable." },
  { name: "Alejandro Baraza", text: "Menú del día variado, precios asequibles y cantidades generosas. Servicio muy amable. Recomiendo la ensalada caprese y los rigatoni." },
  { name: "Alba", text: "Menú del día a buen precio y calidad excelente. Todo riquísimo desde el entrante hasta el postre. El arroz con gambón, exquisito." },
  { name: "Olivia Márquez", text: "Trato inmejorable y comida muy buena. Gambones a la plancha y solomillo con puré de trufa espectaculares. Precio perfecto." },
  { name: "Elba Ferrer", text: "Totalmente recomendable. Todo buenísimo y trabajadores súper atentos." },
  { name: "Xavier Fonoll", text: "De los mejores sitios para comer en Valencia. Personal cercano, buena comida y buen precio. Repetiría una y otra vez." },
  { name: "Kenneth Murphy", text: "Menú de mediodía con buenas opciones, buenas porciones y excelente atención. Recomendable." },
  { name: "INGENIERIA Y ARQUITECTURA RMN", text: "Lugar agradable y tranquilo. Servicio fenomenal y comida excelente. Un sitio para repetir." },
  { name: "Jose", text: "Descubrimos el restaurante por Cánovas y fue todo un acierto. Atención muy amable y comida excelente. Volveremos." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('comida'); // 'comida', 'bebida', 'galeria'
  const [reviewPage, setReviewPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroContentY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/95 backdrop-blur px-10 py-4">
          <div className="flex items-center gap-4 text-white group">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400459/496538986_17846532513470522_6319577124225671169_n._qvzdrd.jpg" 
              alt="BAGOAS Logo" 
              className="h-10 w-10 rounded-full object-cover border border-white/20 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              referrerPolicy="no-referrer"
              onClick={() => setSelectedImage("https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400459/496538986_17846532513470522_6319577124225671169_n._qvzdrd.jpg")}
            />
            <a href="#inicio">
              <h2 className="text-white text-xl font-black leading-tight tracking-wider hover:text-primary transition-colors">BAGOAS</h2>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-9">
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#inicio">Inicio</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#sobre-nosotros">Sobre Nosotros</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#carta">Carta</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#resenas">Reseñas</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#visitanos">Visítanos</a>
            </div>
            <a 
              href={reserveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-red-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20"
            >
              <span className="truncate">Reservar Mesa</span>
            </a>
          </div>
          <button 
            className="lg:hidden text-white p-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <main className="flex flex-col flex-1">
          {/* Hero Section */}
          <div id="inicio" className="relative w-full h-[85vh] min-h-[600px] flex overflow-hidden bg-black">
            {/* Accordion Panels */}
            <div className="absolute inset-0 flex w-full h-full">
              {[
                "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401995/497759784_17847920847470522_8586696392397759317_n._ukbukg.jpg",
                "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/500592548_17849008095470522_322289810184476938_n._e2dooz.jpg",
                "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400557/872aa4a3-7dd6-49ca-abf7-3888bccb0f6d_cff4au.avif",
                "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/499610205_17848460121470522_3603788597864515737_n._wf67ly.jpg"
              ].map((src, idx) => (
                <div 
                  key={idx}
                  className="relative flex-1 h-full transition-all duration-[1500ms] ease-in-out hover:flex-[2] group overflow-hidden border-r border-white/10 last:border-r-0"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1500ms] ease-in-out"
                    style={{ backgroundImage: `url("${src}")` }}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-[1500ms] ease-in-out" />
                </div>
              ))}
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
              <motion.div 
                className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto"
                style={{ y: heroContentY }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-16 h-1 bg-primary mb-4 rounded-full"></div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] uppercase drop-shadow-xl flex flex-col items-center gap-2">
                  <span className="text-primary">BAGOAS</span>
                  <span className="text-white">Gastro & Drinks</span>
                </h1>
                <h2 className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl italic drop-shadow-md">
                  “Gastronomía mediterránea y carnes a la brasa en el corazón de Valencia.”
                </h2>
                <div className="flex flex-wrap gap-4 justify-center mt-8 pointer-events-auto">
                  <a 
                    href={reserveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-red-700 text-white text-base font-bold transition-all duration-300 shadow-xl shadow-primary/30"
                  >
                    <span>Reservar Mesa</span>
                    <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a 
                    href="#carta"
                    className="group flex items-center justify-center rounded-full h-12 px-8 border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-base font-bold transition-all duration-300"
                  >
                    <span>Ver Carta</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Icons Bottom Right */}
            <div className="absolute bottom-10 right-10 hidden md:flex flex-col gap-4 z-20">
              <a 
                href="https://www.instagram.com/restaurantebagoas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@restaurante.bagoa?_t=ZN-90g6E5F63QU&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnCpIgvzb8mfeI2fJqvQOO32_0EKnI8A9vm02X3tvfqyedbBsl9z1IjJTqXI0_aem_IfKG9iAKS855FYs_wC70Kw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
              <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
            </div>
          </div>

          {/* About / Essence Section */}
          <div id="sobre-nosotros" className="px-6 py-20 lg:px-20 lg:py-32 bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div 
                  className="flex flex-col gap-8 order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-primary"></span>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Sobre Nosotros</span>
                  </div>
                  <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                    La Esencia de <br/><span className="text-slate-500">Lo Exclusivo.</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    BAGOAS Gastro & Drinks es un espacio gastronómico en Valencia donde se fusiona cocina creativa, coctelería y un ambiente moderno pensado para disfrutar tanto de día como de noche.
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    Nuestro concepto combina desayunos, comidas, cenas y noches con música y buen ambiente. Apostamos por producto de calidad y una experiencia que va más allá del plato.
                  </p>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  className="relative order-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative w-full aspect-[4/5] flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400556/0da24f30-c2c7-4a01-bd9b-1133ca0d2415_feugwm.avif" 
                      alt="BAGOAS Interior"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <motion.div 
            id="carta" 
            className="px-6 py-20 bg-surface-dark min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Nuestra Oferta</span>
                <h2 className="text-white text-3xl md:text-4xl font-black mb-8">La Carta</h2>
                
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <button 
                    onClick={() => setActiveTab('comida')}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'comida' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-transparent text-slate-400 border border-white/10 hover:text-white hover:border-white/30'}`}
                  >
                    Comida
                  </button>
                  <button 
                    onClick={() => setActiveTab('bebida')}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'bebida' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-transparent text-slate-400 border border-white/10 hover:text-white hover:border-white/30'}`}
                  >
                    Bebida
                  </button>
                  <button 
                    onClick={() => setActiveTab('galeria')}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'galeria' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-transparent text-slate-400 border border-white/10 hover:text-white hover:border-white/30'}`}
                  >
                    Galería
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in-up">
                {activeTab === 'comida' && (
                  <div className="space-y-16">
                    {/* Entrantes y tapas */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Entrantes y tapas</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Croquetas (ud)" price="2,5 €" description="Jamón, rabo de toro, chipirón, boletus" />
                        <MenuItem title="Anchoas del cantábrico con tomate, aguacate y ajo en tostada (ud)" price="2,5 €" />
                        <MenuItem title="Hummus con aguacate sobre tostas" price="8 €" />
                        <MenuItem title="Ensaladilla rusa" price="8 €" />
                        <MenuItem title="Patatas bravas con alioli, mayonesa y salsa brava" price="8 €" />
                        <MenuItem title="Pulpo a la gallega con base de patatas y pimiento picante" price="20 €" />
                        <MenuItem title="Patita de pulpo a la brasa con base de patatas y pimiento picante" price="22 €" />
                        <MenuItem title="Gambas al ajillo" price="14 €" />
                        <MenuItem title="Huevos rotos con jamón ibérico sobre patatas" price="14 €" />
                        <MenuItem title="Calamares" price="13 €" />
                        <MenuItem title="Puntillitas a la andaluza" price="12 €" />
                        <MenuItem title="Tellinas" price="12 €" />
                        <MenuItem title="Torrezno de soria" price="12 €" />
                        <MenuItem title="Corazón de alcachofas con gambas y virutas de jamón" price="15 €" />
                        <MenuItem title="Parrillada de verduras" price="10 €" />
                        <MenuItem title="Revuelto de ajos tiernos con gambas y esparragos" price="12 €" />
                        <MenuItem title="Berenjena rellena de carne" price="12 €" />
                        <MenuItem title="Ajoarriero con nueces y huevo duro" price="12 €" />
                        <MenuItem title="Tabla de jamón ibérico con almendras y dátiles" price="20 €" />
                        <MenuItem title="Tabla de quesos variados con higos secos y nueces" price="17 €" />
                        <MenuItem title="Esgarraet con mojama de atún y huevo duro sobre tosta" price="12 €" />
                        <MenuItem title="Tartar de atún base de aguacate, huevos de trucha, sesamo y salsa bagoas" price="18 €" />
                        <MenuItem title="Calamar playa con salsa verde" price="17 €" />
                        <MenuItem title="Sepia a la plancha con salsa verde" price="17 €" />
                        <MenuItem title="Tosta de patata cocida chafada y calamar plancha" price="16 €" />
                      </div>
                    </section>

                    {/* Principales */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Principales</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Lomo de salmón plancha con verduras" price="20 €" />
                        <MenuItem title="Lubina a la espalda con verduras" price="20 €" />
                        <MenuItem title="Ventresca de atún con verdura" price="22 €" />
                        <MenuItem title="Solomillo de ternera con patata" price="25 €" />
                        <MenuItem title="Entrecot de ternera con patatas,pimiento padrón y tomate cherry" price="22 €" />
                        <MenuItem title="Chuletas de cordero con patatas, pimiento padrón y tomate cherry" price="21 €" />
                        <MenuItem title="Hamburguesa bagoas cebolla caramelizada, queso cheddar nueces, lechuga y tomate" price="14 €" />
                        <MenuItem title="Hamburguesa kentucky lechuga ,tomate, bacon, queso chedar" price="14 €" />
                        <MenuItem title="Fingers de pollo con patatas fritas y salsa de la casa" price="12 €" />
                      </div>
                    </section>

                    {/* Ensaladas */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Ensaladas</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Caprese" price="12 €" description="Tomate valenciano, olivas negras, queso burrata y salsa de albahaca" />
                        <MenuItem title="Ventresca de atún o aguacate" price="12 €" description="Tomate valenciano ,olivas y cebolla morada" />
                        <MenuItem title="César" price="12 €" description="Pechuga pollo, picatostes, lechuga, bacon, queso, cebolla crujiente" />
                        <MenuItem title="Valenciana" price="12 €" description="Lechuga ,tomate, cebolla, zanahoria, maíz, esparragos, huevo duro" />
                      </div>
                    </section>

                    {/* Postres */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Postres</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Fruta temporada" price="4,5 €" />
                        <MenuItem title="Tarta de queso con arandanos" price="5 €" />
                        <MenuItem title="Helados chocolate, vainilla, mango, fresa y stratacciatella (bola)" price="3 €" />
                        <MenuItem title="Tarta muerte de chocolate" price="5 €" />
                        <MenuItem title="Flan de huevo" price="4 €" />
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'bebida' && (
                  <div className="space-y-16">
                    {/* Gastro & drinks */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Gastro & drinks</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Ginebras" description="Larios rose, beefeater, seagram's, puerto indias, xoriguer, bulldog, shappire, nordés, tanqueray, martin millers, g-vine, roku, hendrick's, monkey, brockman's, gin mare" />
                        <MenuItem title="Ron" description="Brugal, matusalem, legendario, malibú, santa teresa, bacardí, barcelò, arehucas, havana, matusalem, diplomatico, barceló imperial, zacapa" />
                        <MenuItem title="Vodka" description="Smirnoff, absolut, belvedere, grey goose, ciroc." />
                        <MenuItem title="Whisky" description="Cutty sark, jb, ballantines, red / white label, jameson, four roses, jack daniels, black label, chivas cardhu, monkey shoulder, glenrothes, maker's mark, macallan, lagavulin" />
                        <MenuItem title="Cervezas" description="Barril y tercios, sangría, tinto de verano, aperol spritz" />
                        <MenuItem title="Licores & aperitivos" description="Chupito don julio" />
                      </div>
                    </section>

                    {/* Cocktelería - vodka */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Cocktelería - vodka <span className="text-sm font-normal text-slate-400">(todos con triple seco)</span></h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Martini caribeño" price="10 €" />
                        <MenuItem title="Serpiente" price="10 €" />
                        <MenuItem title="Cosmopolitan" price="10 €" />
                        <MenuItem title="Espresso martini" price="10 €" />
                        <MenuItem title="Martini maracuya" price="10 €" />
                        <MenuItem title="San francisco" price="10 €" />
                        <MenuItem title="Sex on the beach" price="10 €" />
                        <MenuItem title="Bloody mary" price="10 €" />
                        <MenuItem title="Long iced tea" price="10 €" />
                        <MenuItem title="Dejavu" price="10 €" />
                        <MenuItem title="Moscow mule" price="10 €" />
                      </div>
                    </section>

                    {/* Cocktelería - ron */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Cocktelería - ron</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Daiquiri" price="10 €" />
                        <MenuItem title="Piña colada" price="10 €" />
                        <MenuItem title="Mojito" price="10 €" />
                        <MenuItem title="Mojito de sabor" price="10 €" />
                      </div>
                    </section>

                    {/* Cocktelería - tequila */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Cocktelería - tequila</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Margarita" price="10 €" />
                        <MenuItem title="Tequila sunrise" price="10 €" />
                      </div>
                    </section>

                    {/* Cocktelería - licores */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Cocktelería - licores</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Negroni" price="10 €" />
                        <MenuItem title="Orgasmo" price="10 €" />
                        <MenuItem title="June bug" price="10 €" />
                        <MenuItem title="Americano" price="10 €" />
                        <MenuItem title="Psico sour" price="10 €" />
                      </div>
                    </section>

                    {/* Cocktelería - whisky / bourbon */}
                    <section>
                      <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Cocktelería - whisky / bourbon</h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <MenuItem title="Manhattan" price="10 €" />
                        <MenuItem title="Old fashioned" price="10 €" />
                        <MenuItem title="Agua de valencia" price="10 €" />
                        <MenuItem title="Caipirinha" price="10 €" />
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'galeria' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                    {[
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400489/499495995_17848359378470522_149601069942344103_n._q5bwlc.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400557/872aa4a3-7dd6-49ca-abf7-3888bccb0f6d_cff4au.avif",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401995/497759784_17847920847470522_8586696392397759317_n._ukbukg.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401995/498244453_17847920838470522_8127359769324699174_n._qn0mgx.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/499610205_17848460121470522_3603788597864515737_n._wf67ly.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/499831330_17848359396470522_8754533909868233146_n._ccdmef.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/500769545_17848607223470522_5500381446912563900_n._fdfp0d.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401995/498193390_17847920865470522_2599653731536814802_n._efuk0x.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772401996/500592548_17849008095470522_322289810184476938_n._e2dooz.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772402001/504148699_17850134976470522_3776641100296073597_n._ooohkb.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772402002/608215503_17873170215470522_1116161322545017192_n._ct52hv.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772402002/504274410_17850134388470522_1034204791162107565_n._uapauy.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772402006/Con_cada_almeja_una_ola_de_sabor_con_cada_copa_un_suspiro_del_Mediterr%C3%A1neo._As%C3%AD_se_saborea_Va_sn8ub6.jpg",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400556/175ffe5d-ff10-4b5e-ba89-24f281326238_wjejq4.avif",
                      "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772402708/Captura_de_pantalla_2026-03-01_181213_dbadxb.jpg"
                    ].map((src, idx) => (
                      <div 
                        key={idx} 
                        className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img 
                          src={src} 
                          alt={`Galería BAGOAS ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Reseñas Section */}
          <motion.div 
            id="resenas" 
            className="px-6 py-20 bg-background-dark"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Lo que dicen de nosotros</span>
                <h2 className="text-white text-3xl md:text-4xl font-black mb-6">Reseñas</h2>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-4xl font-black">4,2</span>
                    <Star className="w-8 h-8 fill-primary text-primary" />
                  </div>
                  <p className="text-slate-400">Valoración en Google: 4,2 / 5</p>
                </div>
              </div>

              <div className="relative">
                <div className="grid md:grid-cols-3 gap-6">
                  {reviews.slice(reviewPage * 3, (reviewPage + 1) * 3).map((review, idx) => (
                    <div key={idx} className="bg-surface-dark p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                      </div>
                      <p className="text-slate-300 font-light leading-relaxed mb-6 flex-1">"{review.text}"</p>
                      <div className="mt-auto">
                        <p className="text-white font-bold">{review.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-blue-400 text-sm">verified</span>
                          <p className="text-slate-500 text-xs">Reseña verificada en Google</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-6 mt-12">
                  <button 
                    onClick={() => setReviewPage(p => Math.max(0, p - 1))}
                    disabled={reviewPage === 0}
                    className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center text-white hover:bg-primary transition-colors disabled:opacity-50 disabled:hover:bg-surface-dark"
                  >
                    <ChevronLeft />
                  </button>
                  <button 
                    onClick={() => setReviewPage(p => Math.min(Math.ceil(reviews.length / 3) - 1, p + 1))}
                    disabled={reviewPage === Math.ceil(reviews.length / 3) - 1}
                    className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center text-white hover:bg-primary transition-colors disabled:opacity-50 disabled:hover:bg-surface-dark"
                  >
                    <ChevronRight />
                  </button>
                </div>

                {/* Leave a Review Button */}
                <div className="flex justify-center mt-12">
                  <a 
                    href="https://www.google.com/maps/place/BAGOAS+Gastro+%26+Drinks+-+Restaurante/@39.4661955,-0.370647,17z/data=!4m8!3m7!1s0xd6048b622581f9f:0x2424aee08615cec6!8m2!3d39.4661955!4d-0.3680774!9m1!1b1!16s%2Fg%2F1hd__k42n?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-full h-12 px-8 border-2 border-primary text-white hover:bg-primary/10 text-base font-bold transition-all duration-300"
                  >
                    <span>Deja tu reseña aquí</span>
                    <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">rate_review</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visítanos Section */}
          <motion.div 
            id="visitanos" 
            className="px-6 py-20 bg-surface-dark"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Encuéntranos</span>
                <h2 className="text-white text-3xl md:text-4xl font-black">Visítanos</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-3">Dirección</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Carrer del Comte d'Altea, 17<br />
                        L'Eixample, 46005 València, Valencia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-white text-xl font-bold mb-4">Horario</h3>
                      <div className="grid grid-cols-2 gap-y-2 text-slate-400 max-w-xs">
                        <span>Lunes:</span> <span>9:00–17:00</span>
                        <span>Martes:</span> <span>9:00–17:00</span>
                        <span>Miércoles:</span> <span>9:00–1:30</span>
                        <span>Jueves:</span> <span>9:00–1:30</span>
                        <span>Viernes:</span> <span>9:00–1:30</span>
                        <span>Sábado:</span> <span>9:00–1:30</span>
                        <span>Domingo:</span> <span>12:00–19:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <iframe 
                    src="https://maps.google.com/maps?q=BAGOAS+Gastro+%26+Drinks+-+Restaurante&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Reserva Mesa Section */}
        <motion.div 
          className="px-6 py-24 bg-primary text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-black mb-6">¿Listo para vivir la experiencia?</h2>
            <p className="text-white/90 text-lg mb-10">Reserva tu mesa ahora y disfruta de la mejor gastronomía en el corazón de Valencia.</p>
            <a 
              href={reserveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full h-14 px-10 bg-white text-primary text-lg font-bold hover:bg-slate-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Reservar Mesa Ahora
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="bg-background-dark border-t border-white/5 pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Info */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-black text-xl mb-4">BAGOAS Gastro & Drinks - Restaurante</h3>
              <p className="text-slate-400 mb-2">Carrer del Comte d'Altea, 17, L'Eixample<br/>46005 València, Valencia</p>
              <p className="text-slate-400 mb-2">
                <a href="tel:+34625433344" className="hover:text-primary transition-colors">+34 625 43 33 44</a>
              </p>
              <p className="text-slate-400">
                <a href="mailto:info@bagoasgastro.com" className="hover:text-primary transition-colors">info@bagoasgastro.com</a>
              </p>
            </div>
            
            {/* Column 2: Horario */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Horario</h3>
              <ul className="text-slate-400 space-y-1 text-sm">
                <li><span className="inline-block w-20">Lunes:</span> 9:00–17:00</li>
                <li><span className="inline-block w-20">Martes:</span> 9:00–17:00</li>
                <li><span className="inline-block w-20">Miércoles:</span> 9:00–1:30</li>
                <li><span className="inline-block w-20">Jueves:</span> 9:00–1:30</li>
                <li><span className="inline-block w-20">Viernes:</span> 9:00–1:30</li>
                <li><span className="inline-block w-20">Sábado:</span> 9:00–1:30</li>
                <li><span className="inline-block w-20">Domingo:</span> 12:00–19:00</li>
              </ul>
            </div>
            
            {/* Column 3: Redes */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/restaurantebagoas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@restaurante.bagoa?_t=ZN-90g6E5F63QU&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnCpIgvzb8mfeI2fJqvQOO32_0EKnI8A9vm02X3tvfqyedbBsl9z1IjJTqXI0_aem_IfKG9iAKS855FYs_wC70Kw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto text-slate-600 text-xs text-center border-t border-white/5 pt-8">
            <p>© 2026 BAGOAS Gastro & Drinks - Restaurante. Todos los derechos reservados.</p>
            <p className="mt-1">Empresa registrada en España</p>
          </div>
        </footer>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <img 
            src={selectedImage} 
            alt="Vista ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background-dark flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-4 text-white">
                <img 
                  src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772400459/496538986_17846532513470522_6319577124225671169_n._qvzdrd.jpg" 
                  alt="BAGOAS Logo" 
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                />
                <h2 className="text-white text-xl font-black tracking-wider">BAGOAS</h2>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
                { name: 'Carta', href: '#carta' },
                { name: 'Reseñas', href: '#resenas' },
                { name: 'Visítanos', href: '#visitanos' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-black hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={reserveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 flex items-center justify-center rounded-full h-14 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20"
              >
                Reservar Mesa
              </a>
            </nav>

            <div className="mt-auto flex gap-6 justify-center">
              <a href="https://www.instagram.com/restaurantebagoas/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@restaurante.bagoa" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuItem({ title, price, description }: { title: string, price?: string, description?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-baseline gap-4">
        <h4 className="text-white font-bold text-lg">{title}</h4>
        {price && (
          <>
            <div className="flex-1 border-b border-dashed border-white/20 relative -top-1"></div>
            <span className="text-primary font-bold whitespace-nowrap">{price}</span>
          </>
        )}
      </div>
      {description && <p className="text-slate-400 text-sm font-light leading-relaxed">{description}</p>}
    </div>
  );
}
