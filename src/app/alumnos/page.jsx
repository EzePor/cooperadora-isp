

export default async function AlumnosPage () {
  
   const respuesta = await fetch('https://dummyjson.com/users');
   const {users} = await respuesta.json();
   console.log(users)
   return <div className="h-auto">
    <table className="min-w-full divide-y divide-gray-200  ">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-4 py-1  text-lg font-semibold text-gray-500 w-auto "
            >
            ID
            </th>
            <th
              scope="col"
              className="px-4 py-1  text-lg font-semibold text-gray-500"
            >
              NOMBRE Y APELLIDO
            </th>
            <th
              scope="col"
              className="px-4 py-1  text-lg font-semibold text-gray-500 "
            >
              EDAD
            </th>
            <th
              scope="col"
              className="px-4 py-1  text-lg font-semibold text-gray-500 "
            >
             DIRECCIÓN
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr className="bg-white" key={item.id}>
              <th className="  text-sm lg:text-xl border-b-2   whitespace-nowrap">
                {item.id}
              </th>
              <th className=" text-sm lg:text-xl border-b-2  whitespace-nowrap">
                {`${item.lastName} ${item.firstName}`}
              </th>
              <th className=" text-sm lg:text-xl border-b-2  whitespace-nowrap">
                {item.age}
              </th>
              <th className=" text-sm lg:text-xl border-b-2  whitespace-nowrap">
                {item.address.address}
              </th>
              <th className=" text-sm lg:text-xl border-b-2  whitespace-nowrap">
                <button
                  className="bg-[--jungle-green] hover:bg-[--jungle-greenHover] text-white font-bold py-1 px-2   rounded"
                  //onClick={}
                >
                  Editar
                </button>
               </th>
               <th className=" text-sm lg:text-xl border-b-2  whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6  rounded"
                  //onClick={}
                >
                  Ver
                </button>
              </th>
              
            </tr>
          ))}

        </tbody>
        </table>
    
   </div>


  
}


