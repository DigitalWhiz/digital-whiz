// "use client";
// import { useSession, signOut } from "next-auth/react";

// export default function Dashboard() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <div>Cargando...</div>;
//   }

//   if (!session) {
//     return <div>Necesitas estar autenticado para ver esta página.</div>;
//   }

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Encabezado */}
//       <header className="bg-zinc-800 text-white p-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Panel de Control</h1>
//         <button
//           className="bg-red-500 px-4 py-2 rounded"
//           onClick={() => signOut()}
//         >
//           Cerrar sesión
//         </button>
//       </header>

//       {/* Contenido Principal */}
//       <div className="flex flex-1">
//         {/* Barra Lateral */}
//         <aside className="w-64 bg-zinc-700 text-white p-4">
//           <nav>
//             <ul className="flex flex-col gap-y-4">
//               <li><a href="/" className="block p-2 rounded hover:bg-zinc-600">Inicio</a></li>
//               <li><a href="/dashboard" className="block p-2 rounded hover:bg-zinc-600">Panel de Control</a></li>
//               <li><a href="/dashboard/profile" className="block p-2 rounded hover:bg-zinc-600">Perfil</a></li>
//               <li><a href="#settings" className="block p-2 rounded hover:bg-zinc-600">Configuraciones</a></li>
//               <li><a href="#analytics" className="block p-2 rounded hover:bg-zinc-600">Analíticas</a></li>
//               <li><a href="#notifications" className="block p-2 rounded hover:bg-zinc-600">Notificaciones</a></li>
//               <li><a href="#messages" className="block p-2 rounded hover:bg-zinc-600">Mensajes</a></li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Área de Contenido */}
//         <main className="flex-1 bg-zinc-100 p-8">
          
//           <section id="settings" className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Configuraciones</h2>
//             <div className="bg-white p-4 rounded shadow">
//               <p>El contenido de configuraciones va aquí...</p>
//             </div>
//           </section>

//           <section id="analytics" className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Analíticas</h2>
//             <div className="bg-white p-4 rounded shadow">
//               <p>El contenido de analíticas va aquí...</p>
//             </div>
//           </section>

//           <section id="notifications" className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Notificaciones</h2>
//             <div className="bg-white p-4 rounded shadow">
//               <p>El contenido de notificaciones va aquí...</p>
//             </div>
//           </section>

//           <section id="messages" className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Mensajes</h2>
//             <div className="bg-white p-4 rounded shadow">
//               <p>El contenido de mensajes va aquí...</p>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

