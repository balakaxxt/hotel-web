
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


  {/* Main=Conteudo , hoteis*/}
  <div>
    <div className="container mx-auto px-4 py-20">
    
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
            
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

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

{/* conteudo abaixo com grip */}

<div>
  <div className="containr mx-auto px-4">
    <h3 className="text-xl text-gray-500 text-center font-semibold">
      Conheça mais hoteis
    </h3>
      <h4 className="text-center mb-8">
        com belas vista ao mar.
      </h4>
{/* componetes  inicio gripo */}

      <div className="grid grid-cols-4 grid-rows-2 gap-6">

            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">

            <div className="relative w-full h-full object-cover fotogrip1">.
            <img src="../public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                beach park resort
                
              </div>
            </div>
              
              
              
            </div>

            <div className="col-span-2 h-30 rounded-lg overflow-hidden">
              <div className=" relative fotogrip2 w-full h-full object-cover z-10">
                 <img src="../public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                beach park resort
                
              </div>
              
              </div>  

              
             
            </div>

            <div className="  rounded-lg overflow-hidden">
            <div className="relative fotogrip3
            w-full h-full object-cover">
              <img src="../public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                beach park resort
                
              </div>

               
            </div>



            </div>

            <div className="rounded-lg overflow-hidden">
              
            <div className="relative fotogrip4 w-full h-full object-cover">
              <img src="../public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                beach park resort
                
              </div>


            </div>


            </div>

      </div>

  </div>
</div>

{/* conteudo abaixo com grip */}


{/* Footer Seach-Buscador*/}

<div className="py-20">
  <div className="container mx-auto px-4 flex justify-center">
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


{/* Footer Seach-Buscador */}




{/* Footer-informaçoes finais - Fish */}
<div className="borde-t border-gray-200">
  <div className="container mx=auto px-4 flex items-center justify-between">


  <div className="text=gray=400 font-black">
    Paradise Eden

    </div>
{/* REDE SOCIAL - links - icones */}
    <div>
      
    <a></a>
    
    <a></a>

    <a></a>
    
    
    </div>




  </div>




</div>
{/* Footer informaçoes finais - Fish */}




  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    
</>

    
  )
}

export default App
