import React from 'react'
export default class Forms extends React.Component{
    state = {
        valorInputGraduação:"",
        valorInputComplementar:"",
       
    }

    onChangeInputNome = (event) =>{
        console.log(" :", event.target.value);
        this.setState({valorInputGraduação:event.target.value});
    }
    onChangeInputIdade = (event) =>{
        console.log("Unidade de Ensino :", event.target.value);
        this.setState({valorInputComplementar:event.target.value});
    }


    render(){
        return (
            <div className="Form">
                <h3>
                ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
                </h3>
               <div>
                   <p>7. Por que você não terminou um curso de graduação?
</p>
                   <input
                   value={this.state.valorInputGraduação} onChange={this.onChangeInputGraduação} />
                        
               </div>
               <div>
                   <p>8. Você fez algum curso complementar?</p>
                   <input
                   value={this.state.valorInputComplementar} onChange={this.onChangeInputComplementar} />
                        
               </div>
            </div>
        )
        
    }
}