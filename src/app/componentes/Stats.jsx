export default function Stats({stat}){
    return(
    <div className="contenedor-stat">
            <h2 className="titulo-stat" >{stat.titulo}:</h2>
            <span className="contador-stat">{stat.contador}</span>
          </div>
    )
};