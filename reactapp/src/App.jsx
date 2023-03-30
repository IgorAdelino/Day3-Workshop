// import HelloWorld from "./components/HelloWorld";
// import Usuario from "./components/Usuario/Usuario";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  
  const [imagem, setImagem]=useState()

  useEffect(()=>{
    //executar a função
    getImagem()
  }, [])

  const getImagem = async ()=>{
    const response = await fetch("https://dog.ceo/api/breeds/image/random") 
    const data = await response.json()
//response é u objeto entao transformamos em json 
    setImagem(data)
  }
  
  return (
    
    
   <div className="App">
     {typeof(imagem)==='undefined'?
      <Loader/>:
        <img src={imagem.message}></img>}
     
    </div>
  );
}

export default App;
// onChange={(e)=> setNome(e.target.value)

// so retorna um elemento pai
    // utilizando classname ao inves de class
    // aceita tag vazia

    /* <HelloWorld texto="Olá, Mundo!" /> */
    // com o mesmo nome que importa, exporta e coloca na tag

    // <Usuario
    //    nome = "Gustavo" idade ="19" 
    //    foto="data:image/png;base64,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" 
    //    cargo="Front-End"/>

    // const elementos = [1,2,3,4]
    // {
    //   (elementos.length===0?
    //     <p>Este array está vazio</p>
    //   :<p>{elementos.map((valor,index)=>
    //     (<p>key = {index} valor = {valor}</p>)
    //     )}</p>
    //   )

  //   const [nome, setNome] = useState() usado para fazer um input

  // useEffect(()=>{
  //   console.log(1+1)
  // }, [] ) 
  //   <input type={"text"} onChange={(e)=> setNome(e.target.value)   }></input>
  //   <p>Nome: {nome}</p>
