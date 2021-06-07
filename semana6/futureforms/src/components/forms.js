import React from 'react'
export default class Forms extends React.Component{
    state = {
        valorInputNome:"",
        valorInputEmail:"",
        valorInputIdade:"",
        valorInputEscolaridade:"",
    }

    onChangeInputNome = (event) =>{
        console.log("nome", event.target.value);
        this.setState({valorInputNome:event.target.value});
    }
    onChangeInputIdade = (event) =>{
        console.log("Idade", event.target.value);
        this.setState({valorInputIdade:event.target.value});
    }
    onChangeInputEmail = (event) =>{
        console.log("Email", event.target.value);
        this.setState({valorInputEmail:event.target.value});
    }
    onChangeInputEscolaridade = (event) =>{
        console.log("Escolaridade", event.target.value);
        this.setState({valorInputEscolaridade:event.target.value});
    }


    render(){
        return (
            <div className="Form">
                <h3>
                    ETAPA 1 - DADOS GERAIS
                </h3>
               <div>
                   <p>1. Digite Seu nome</p>
                   <input
                   value={this.state.valorInputNome} onChange={this.onChangeInputNome} />
                        
               </div>
               <div>
                   <p>2. Digite Sua idade</p>
                   <input
                   value={this.state.valorInputIdade} onChange={this.onChangeInputIdade} />
                        
               </div>
               <div>
                   <p>3. Digite Seu Email</p>
                   <input
                   value={this.state.valorInputEmail} onChange={this.onChangeInputEmail} />
                        
               </div>
               <div>
               <label>
         <p>4. Qual a sua escolaridade?</p>
          <select value={this.state.valorInputEscolaridade} onChange={this.onChangeInputEscolaridade}>
          <option value="Ensino médio incompleto">Ensino médio incompleto</option><option value="Ensino médio completo">Ensino médio completo</option><option value="Ensino superior incompleto">Ensino superior incompleto</option><option value="Ensino superior completo">Ensino superior completo</option>
          </select>
        </label>
                        
               </div>
               
          
            </div>
        )
        
    }
}




