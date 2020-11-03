import {Component} from 'react'
import './form.css'

const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

class Form extends Component{
  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      keepMeSignedIn: false,
      error: []
    };
  }

  onSubmit = (event) => {
    event.preventDefault()
    const errors = [];
    if (!mailRegex.test(this.state.email)) {
      errors.push('Email not valid')
    } 

    if (this.state.password.length < 3) {
      errors.push('Password not valid')
    }

    if (!this.state.keepMeSignedIn) {
      errors.push('Checkbox is required')
    }

    this.setState({error: errors})
    if (errors.length === 0) {
      console.log(this.state)
    }
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox (event) {
    this.setState({keepMeSignedIn: event.target.checked})
  }

  render () {
    return (
      <div className="form">
        <h2>SIGN IN TO YOUR ACCOUNT</h2>
        <form onSubmit={this.onSubmit} className='form-block'>
          <input onChange={this.onChangeEmail} value={this.state.email}/>
          <input type='password' onChange={this.onChangePassword} value={this.state.password}/>
          <input onChange={this.onChangeCheckbox.bind(this)} checked={this.state.keepMeSignedIn}  type="checkbox" />
          <div>
            {this.state.error.map((err) => {
              return <span key={err}>{err}</span>
            })}
          </div>
          <button type='submit'>SIGN IN</button>
        </form>
        <a href="#">Forgot your password?</a>
      </div>
    );
  }
}

export default Form;
