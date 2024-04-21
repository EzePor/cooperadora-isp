


function VerAlumno({ alumnoId }) {
  //  alumnoID para cargar los datos del alumno

  return (
    <div>
      <h1>Detalles del alumno: {alumnoId}</h1>
      {/* Contenido de la página */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { alumnoId } = params;

  //LOGICA ...

  return {
    props: {
      alumnoId,
    },
  };
}

export default VerAlumno;
