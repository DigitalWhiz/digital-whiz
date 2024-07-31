"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define la interfaz para los datos del perfil
interface UserProfile {
  name: string;
  email: string;
  status: string;
  image: string;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserProfile>({
    name: "",
    email: "",
    status: "",
    image: "",
  });
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    // Función para obtener los datos del perfil desde la base de datos
    const fetchUserData = async () => {
      if (session) {
        try {
          const response = await fetch('/api/user/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [session]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('status', userData.status);
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData);
        alert('Perfil actualizado exitosamente');
      } else {
        alert('Error actualizando el perfil');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error actualizando el perfil');
    }
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (!session) {
    return <div>Necesitas estar autenticado para ver esta página.</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Encabezado */}
      <header className="bg-zinc-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Perfil</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </button>
      </header>

      {/* Contenido Principal */}
      <div className="flex flex-1">
        {/* Barra Lateral */}
        <aside className="w-64 bg-zinc-700 text-white p-4">
          <nav>
            <ul className="flex flex-col gap-y-4">
              <li><a href="/" className="block p-2 rounded hover:bg-zinc-600">Inicio</a></li>
              <li><a href="/dashboard" className="block p-2 rounded hover:bg-zinc-600">Panel de Control</a></li>
              <li><a href="/dashboard/profile" className="block p-2 rounded hover:bg-zinc-600">Perfil</a></li>
              <li><a href="#settings" className="block p-2 rounded hover:bg-zinc-600">Configuraciones</a></li>
              <li><a href="#analytics" className="block p-2 rounded hover:bg-zinc-600">Analíticas</a></li>
              <li><a href="#notifications" className="block p-2 rounded hover:bg-zinc-600">Notificaciones</a></li>
              <li><a href="#messages" className="block p-2 rounded hover:bg-zinc-600">Mensajes</a></li>
            </ul>
          </nav>
        </aside>

        {/* Área de Contenido */}
        <main className="flex-1 bg-zinc-100 p-8">
          <section id="profile">
            <h2 className="text-2xl font-bold mb-4">Perfil</h2>
            <div className="bg-white p-4 rounded shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Status</label>
                  <input
                    type="text"
                    name="status"
                    value={userData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Subir Imagen</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                {image && (
                  <div className="mb-4">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="Profile"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                )}
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded">
                  Guardar Cambios
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
