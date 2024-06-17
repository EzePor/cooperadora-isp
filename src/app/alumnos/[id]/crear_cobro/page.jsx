// components/Alumnos/CrearCobro.js
import React from 'react';
import CobroCuota from '@/app/componentes/CobroCuota';

function CrearCobroPage({alumno,periodo, monto, fechaPago}) {
  
  return  (
    <div>
    <h1 className='titulo-PagoCuota'>Pago de Cuota Escolar</h1>
    <CobroCuota alumno={alumno} periodo={periodo} monto={monto} fechaPago={fechaPago} />
  </div>
  )
}

export default CrearCobroPage;
