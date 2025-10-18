'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import Card from '../ui/personalizados/card-text';
import CardImage from '../ui/personalizados/card-image';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const [dogImage, setDogImage] = useState<string>("");

  const [chuckJoke, setChuckJoke] = useState<string>("");

  useEffect(() => {
    // este sera para el producto aleatorio
    const randomProductId = Math.floor(Math.random() * 20) + 1;
    fetch(`https://fakestoreapi.com/products/${randomProductId}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setImage(data.image);
      })
      .catch(() => {
        setTitle("Error");
        setDescription("No se pudo obtener la descripción.");
        setImage("/fallback.jpg");
      });

    // este sera para el suario aleatorio
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
      .then(res => res.json())
      .then(data => {
        setUserName(data.name);
        setUserEmail(data.email);
      })
      .catch(() => {
        setUserName("Usuario desconocido");
        setUserEmail("Correo no disponible");
      });

    // esta sera para la imagen aleatoria de perro
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDogImage(data.message))
      .catch(() => setDogImage("/fallback.jpg"));

    // esta sera para el chiste de Chuck Norris
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setChuckJoke(data.value))
      .catch(() => setChuckJoke("No se pudo obtener un chiste."));
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="w-full flex flex-row items-start gap-4 p-4 pt-10 flex-wrap">

        {/* Producto */}
        <Card title="Título del producto" text={title} />
        <Card title="Descripción" text={description} />
        <CardImage title="Imagen del producto" image={image} />

        {/* Usuario */}
        <Card title="Usuario" text={userName} />
        <Card title="Correo" text={userEmail} />

        {/* Imagen de perro */}
        <CardImage title="Un perro aleatorio" image={dogImage} />

        {/* Chiste de Chuck Norris */}
        <Card title="Chiste de Chuck Norris" text={chuckJoke} />

      </div>
    </div>
  );
}
