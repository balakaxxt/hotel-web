

function App() {
  

  return (
    <div className="container  h-screen w-screen mx-auto flex items-center justify-center">
     <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800
     py-4 px-6 rounded-md">
     <div className="flex flex-row items-center">
      <img 
      className="w-24 rounded-full"
      alt="user avatar"
      src="../public/Eu.byDem.jpeg"
      />
      <div className="ml-4">
        <h3 className="font-semibold text-xl text-white">
          Demison OLV
        </h3>
        <h4 className="text-indigo-300 pt-1">
          Front-end Developer
        </h4>

      </div>
      </div>
     </div>
    </div>
  )
}

export default App
