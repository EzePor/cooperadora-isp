
import React, { useState } from 'react';

function AgregarAlumno() {
  // Definimos el estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [carrera, setCarrera] = useState('');
  const [anioCursado, setAnioCursado] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    //  podríamos enviar los datos del alumno al backend o realizar otra acción
    console.log({
      nombre,
      apellido,
      direccion,
      telefono,
      carrera,
      anioCursado
    });
    // Limpia el formulario después de enviar
    setNombre('');
    setApellido('');
    setDireccion('');
    setTelefono('');
    setCarrera('');
    setAnioCursado('');
  };

  return (
    <div className="my-4">
    <h2 className="text-center text-4xl text-slate-700 font-extrabold my-4">Inscripción alumno</h2>
    <form onSubmit={handleSubmit} className=" max-w-md mt-4 bg-[--tropical-indigo] mx-auto  p-8  rounded-lg border-2 border-violet-400 shadow-lg ">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-white font-bold mb-2">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="apellido" className="block text-white font-bold mb-2">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="direccion" className="block text-white font-bold mb-2">Dirección:</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telefono" className="block text-white font-bold mb-2">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="carrera" className="block text-white font-bold mb-2">Carrera:</label>
        <input
          type="text"
          id="carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="anioCursado" className="block text-white font-bold mb-2">Año de cursado:</label>
        <input
          type="text"
          id="anioCursado"
          value={anioCursado}
          onChange={(e) => setAnioCursado(e.target.value)}
          className="shadow appearance-none border rounded w-full  hover:border-blue-800  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div >
      <div className="flex items-center justify-center">
      <button type="submit" className="bg-blue-500 mt-4   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</button>
      </div>
    </form>
    </div>
  );
}

export default AgregarAlumno;
