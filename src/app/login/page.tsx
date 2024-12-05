"use client";

import { SyntheticEvent, useState } from "react";

export default function LoginPage() {
  const [nombre, setNombre] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // Accede al formulario actual
    const form = e.currentTarget as HTMLFormElement;

    // Usa form.elements para obtener los valores
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      ?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    setNombre(username);
    console.log("Contraseña: ", password);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="m-2">Hola {nombre}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          className="text-black border-emerald-500 p-2 rounded"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="text-black p-2 rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
