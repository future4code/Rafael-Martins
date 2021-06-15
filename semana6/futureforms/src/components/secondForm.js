import React from 'react'
export default class Forms extends React.Component{
    state = {
        valorInputCurso:"",
        valorInputUnidadeDeEnsino:"",
       
    }

    onChangeInputNome = (event) =>{
        console.log("Curso :", event.target.value);
        this.setState({valorInputCurso:event.target.value});
    }
    onChangeInputIdade = (event) =>{
        console.log("Unidade de Ensino :", event.target.value);
        this.setState({valorInputUnidadeDeEnsino:event.target.value});
    }


    render(){
        return (
            <div className="Form">
                <h3>
                ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
                </h3>
               <div>
                   <p>5. Qual curso?</p>
                   <input
                   value={this.state.valorInputCurso} onChange={this.onChangeInputCurso} />
                        
               </div>
               <div>
                   <p>6. Qual a unidade de ensino?</p>
                   <input
                   value={this.state.valorInputUnidadeDeEnsino} onChange={this.onChangeInputComplementar} />
                        
               </div>
            </div>
        )
        
    }
}
