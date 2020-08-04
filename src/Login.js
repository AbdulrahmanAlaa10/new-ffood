/*import React from 'react';
import fire from './config/fire';
class Login extends React.Component {
  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }
  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }
  render() {
    return (
      <div>
        <div>
          <p><input className="w3-input w3-padding-16" id="email" type="text" placeholder="Enter Email" required name="Email" /></p>
        </div>
        <div>
          <p><input  className="w3-input w3-padding-16" id="password" type="text" placeholder="Enter password.." required name="password" /></p>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

{/*        <div className="Appp">
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
        </div>
*/ }
export default Login;
*/
