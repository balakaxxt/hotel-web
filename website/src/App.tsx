
function App() {
  

  return (
   
<>

 {/* logo navbar*/}

  <div>
  <div className="container mx-auto px-4 h-24 flex items-center">
    
    <div className=" px-3 font-black">
    Paradise Eden

    </div>
  {/* Navbar- menu*/}
    <ul className=" flex items-center ml-auto ">
        <li>
        <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a>
        </li>


        <li>
          <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline"  >Sobre nós</a>
        </li>


        <li>
           <a href=""  className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
        </li>
        
       <li>
        <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline" >Contato</a>
       </li> 
       
    </ul>

    </div> 
  {/* Navbar- menu*/}
    </div>
  
  
  {/* logo navbar*/}



  {/* banner do site */}

  <div className="banner">
      
      <div className="container inline-flex items-center  mx-auto px-4 h-full justify-center">
      <div>


  {/* banner do site */}

  
  
  {/* elementos acima da imagem do banner */}

  <div className="text-center">
        <h1 className="text-white">Seja bem vindo Onde vc quer ir? </h1>
        <p className="text-green-100">Escolha melhores Hoteis com uma bela vista ao mar.</p>
      </div>

      <div className="mt-7">

       <form className="space-x-4">


         <select className="bg-grey-8 py-2 px-3 borde-gray-300 rounded text-gray-500">

          <option value="">escolha estado</option>

         </select>
         
         <select className="
         bg-grey-8 py-2 px-3 borde-gray-300 rounded text-gray-500">

            <option value="">escolha a cidade</option>



         </select>


         <button className="cima inline-flex items-center  text-yellow-800  bg-yellow-400 font-medium  py-1 px-4  rounded">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      
        Pesquisa Hospedagem 
        </button>
        
       </form>

     
      
      </div>
      </div>
      </div>



   
    </div>

   

 
  

    
</>

    
  )
}

export default App
