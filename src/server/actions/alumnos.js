// esta función StudientFormActionHandler se utiliza para enviar datos de un formulario
// de estudiante a una API en un servidor Next.js, esperar la respuesta del servidor y
// devolverla.

"use server";

export const StudientFormActionHandler = async (formData) => {
  // Aquí, se están recopilando los datos del formulario
  // ( utilizando el método formData.get()) y se almacenan en un objeto data.
  const data = {
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    dni: formData.get("dni"),
    direccion: formData.get("direccion"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    fechaNacimiento: formData.get("fechaNacimiento"),
    fechaIngreso: formData.get("fechaIngreso"),
  };

  // Luego, se usa la función fetch para enviar una solicitud POST
  // a la URL http://localhost:3000/api/alumnos, que
  // es la ruta de una API del servidor .
  // La solicitud POST incluye los datos recopilados del formulario,
  // que se convierten en una cadena JSON utilizando JSON.stringify(data)
  // y se pasan como el cuerpo de la solicitud.
  const response = await fetch("http://localhost:3000/api/alumnos", {
    method: "POST",
    body: JSON.stringify(data), // mandamos los datos del formulario
  });

  // Se espera la respuesta del servidor y
  // se convierte en un objeto JSON utilizando el método response.json().
  //  Finalmente, se devuelve esta respuesta JSON.
  const result = await response.json();
  return result;
};
