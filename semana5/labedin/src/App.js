import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import Rafael from './images/rafael.jpeg';
import Ambev from './images/ambev.jpg'
import System from './images/sistemas_info.png'
import Email from './images/email.jpg'
import Endereço from './images/endereço.png'




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Rafael}
          nome="Rafael Soares Martins" 
          descricao="Oi, eu sou o Rafael. Sou Estudade Full Stack Na labenu
          é amante de tecnologia é desenvolvimento em sí , atualmente estou no primeiro período de Sistema De Informação :)."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div className ="page-section-container">
    <CardPequeno
    nome="Email: "
    imagem={Email}
    descricao=" RafaelSoares7l@gmail.com "
    />
    <CardPequeno
    nome="Endereço"
    imagem={Endereço}
    descricao="Rua : Virginia Gonçalves Pires , Sete Lagoas MG"
    />

    
    </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Ambev}
          nome="Ambev S.A Nova Minas"
          descricao="Tive meu primeiro contato com Desenvolvimento atuando como aprendiz na ambev" 
        />
        
        
        <CardGrande 
          imagem={System}
          nome="Sistemas De Informação" 
          descricao="Graduando em Sistemas De Informação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
