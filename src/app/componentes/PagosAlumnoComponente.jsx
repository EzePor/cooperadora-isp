import { useEffect, useState } from "react";
import { formatNumberToCurrency } from "@/utils/format-helpers";
import Swal from "sweetalert2";
import Link from "next/link";

export default function PagosAlumnoComponente({ pagos, params }) {
  const { id: alumnoId } = params;
  const [alumno, setAlumno] = useState(null);
  const [pagosState, setPagosState] = useState(pagos);

  useEffect(() => {
    const fetchAlumno = async () => {
      try {
        const response = await fetch(`/api/alumnos/${alumnoId}`);
        const data = await response.json();
        console.log("Alumno fetched:", data);
        setAlumno(data);
      } catch (error) {
        console.error("Error fetching alumno:", error);
      }
    };
    fetchAlumno();
    setPagosState(pagos);
  }, [pagos, alumnoId]);

  const efectuarPago = (pagoId) => {
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: `Estas por abonar el pago. ¿Desea continuar?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar pago",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/api/pagos", {
          method: "PUT",
          body: JSON.stringify({
            id: pagoId,
          }),
        })
          .then((respuesta) => respuesta.json())
          .then((data) => {
            setPagosState((prevPagos) =>
              prevPagos.map((pago) =>
                pago._id === data._id ? { ...pago, pagado: true } : pago
              )
            );
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <>
      {pagosState.lenght == 0 ? (
        <div className="text-center my-4">
          <h2 className="text-xl font-bold text-red-500">
            El alumno no tiene ningún cobro
          </h2>
          <Link href={`/alumnos/${alumnoId}/crear_cobro`}>
            <button className="bg-[--jungle-green] hover:bg-[--jungle-greenHover] text-white font-bold py-1 px-2 rounded mt-4">
              CREAR OTRO COBRO
            </button>
          </Link>
        </div>
      ) : (
        <>
          <table className="menuTabla">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-800 text-white rounded-tl-xl">
                  COBROS REALIZADOS
                </th>
                <th className="py-2 px-4 bg-gray-800 text-center text-white">
                  IMPORTE
                </th>
                <th className="py-2 px-4 bg-gray-800 text-center text-white rounded-tr-xl">
                  PAGADO / NO PAGADO
                </th>
              </tr>
            </thead>
            <tbody>
              {pagosState.map((pago) => (
                <tr key={pago._id}>
                  <td className="border text-slate-700 px-4 py-2">
                    {pago.cobro_id.titulo}
                  </td>
                  <td className="border text-center text-slate-700 px-4 py-2">
                    {formatNumberToCurrency(pago.cobro_id.monto)}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {pago.pagado ? (
                      <div>
                        <span className="text-green-500 font-bold">
                          ABONADO
                        </span>
                        <Link
                          href={`/alumnos/${alumnoId}/pagos/${pago._id}/recibo`}
                        >
                          <button className="bg-blue-500 text-white px-2 py-1 ml-6 rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
                            RECIBO
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <span className="text-red-500 font-bold">
                          PENDIENTE
                        </span>
                        <button
                          disabled={pago.pagado}
                          className="bg-green-500 text-white px-2 py-1 ml-6 rounded-md hover:bg-green-600 transition duration-150 ease-in-out"
                          onClick={() => efectuarPago(pago._id)}
                        >
                          ABONAR
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
