export default function AlumnosLayout ({children}){
    return (
      <div>
      <h1 className='layout-titulo'>Alumnos</h1>
    <div className='page-wrapper'>
      {children}
    </div>
    </div>
    )
}