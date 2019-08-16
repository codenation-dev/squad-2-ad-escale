// pagina de perfil de usuario

import React from 'react';

export default class UserProfile extends React.Component {
  
  state =  {  }; //nao está errado
  
  handleChangeInput = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    this.setState({
      userprofile: [{name:this.state.name, email:this.state.email, password: this.state.password, phone: this.state.phone}]
    })
  }
  
  componentWillMount(){
    
    
    this.setState({
      
    })


  }
  
  
  render() {
    
    return (
      <>
        <h1>
          <h2>User Profile</h2>
        </h1>
        <form onSubmit ={ e=>{this.handleSubmit(e)} }>
          <input name="name" type="text" placeholder="Seu Nome" value={this.state.name} onChange = {(e) => {this.handleChangeInput(e)}} />
          <input name="lastname" type="text" placeholder="Seu Sobrenome" value={this.state.lastname} onChange = {(e) => {this.handleChangeInput(e)}}/>
          <input name="phone" type="tel" placeholder="Seu Telefone" value={this.state.phone} onChange = {(e) => {this.handleChangeInput(e)}} />
          <input name="email" type="email" placeholder="Seu e-mail" value={this.state.email} onChange = {(e) => {this.handleChangeInput(e)}} />
          <input name="password" type="password" placeholder="Senha Atual" value={this.state.password} onChange = {(e) => {this.handleChangeInput(e)}} />
          <input name="newpassword" type="password" placeholder="Nova Senha" value={this.state.newpassword} onChange = {(e) => {this.handleChangeInput(e)}} />
          <input name="confirmnewpassword" type="password" placeholder="Confirmar Nova Senha" value={this.state.confirmnewpassword} onChange = {(e) => {this.handleChangeInput(e)}} />

          <button type="submit">Salvar Alterações</button>
        </form>
      </>
    );
  }
}
