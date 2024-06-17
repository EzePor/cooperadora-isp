import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="text-center" >
      <h1 className="text-center font-extrabold text-gray-700 m-6 text-3xl">Página de Inicio</h1>
      <Link  href="http://isp20.edu.ar/nuevo/#">
      <img className="m-auto" src="./logo-isp.png" width={250} height={250}/>
     </Link>
     <div className="m-8 text-center text-blue-700">
    <h1 className="">Bienvenido</h1>
    <p>visítame → <a href="http://isp20.edu.ar/nuevo/#">carreras e información</a></p>
</div>


      </div>

    
    </>
  );
}
