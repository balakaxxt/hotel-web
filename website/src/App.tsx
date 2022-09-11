
function App() {
  

  return (
   
<>

 {/* logo navbar*/}

  <div>
  <div className="container mx-auto px-4 h-24 flex items-center">
    
    <div className="font-black text-bold h-5">
    Paradise Eden
    </div>
  {/* Navbar- menu*/}
    <ul className="flex items-center ml-auto space-x-3">
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
    </div>
  {/* Navbar- menu*/}



  {/* banner do site */}

  <div className="banner">
      <div className="container mx-auto h-full px-4  flex items-center justify-center">
      {/* div abaixo esta dentro d d cima */}
      <div id="div-conteiner">

      <div className="text-center">
        <h1 className="text-white text-3xl mb-3">Seja bem vindo Onde vc quer ir? </h1>
        <p className="text-green-100">Escolha melhores Hoteis com uma bela vista ao mar.</p>
      </div>

      <div className="mt-8">

        <form className="space-x-4">

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              escolha estado
            </option>
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              escolha cidade
            </option>
          </select>

          <button className=" inline-flex  items-center text-yellow-900 bg-yellow-500 font-medium py-2 px-3 rounded">

          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Pesquisa hotel</button>

        </form>

      </div>




      </div>
      
      </div>
 





      <div/>





   
  </div>

  {/* banner do site */}


  {/* conteudo hoteis*/}
  <div>
    <div className="container mx-auto px-4 py-10">
    
      <div className="flex">

        <div className="pr-10">
          <div className="text-sm text-gray-400  font-medium">Hotel em destaque</div>

          <div className="text-2xl text-gray-600">Praia de boa viagem</div>

          <div className="text-sm text-gray-400 font-medium mt-2" >Praia de candeias</div>

          <div className="text-sm text-gray-400 font-medium mt-4">

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptates soluta obcaecati reprehenderit itaque alias nisi eos, corporis asperiores. Enim perferendis exercitationem natus? Illo quisquam veritatis perferendis possimus quibusdam aliquam?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptates soluta obcaecati reprehenderit itaque alias nisi eos, corporis asperiores. Enim perferendis exercitationem natus? Illo quisquam veritatis perferendis possimus quibusdam aliquam?
            </p>




          <div className="mt-4">
          <a href="" className=" inline-flex  items-center text-yellow-900 bg-yellow-500 font-medium py-2 px-3 rounded">
            Solicitar Reservar 
            
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

            </a>
          </div>
          
          </div>

          
        </div>

        <div className="flex-shrink-0 ml-auto ">
        <img src="../public/hotelconteudo.jpq"width="364" alt=""/>
         
          
       


        </div>

      </div>



    </div>
  </div>   
{/* conteudo hoteis*/}
 
  

    
</>

    
  )
}

export default App
