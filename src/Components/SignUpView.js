import React from "react";
import logo from "../log.svg"
import { Form, FormControl, Button} from 'react-bootstrap'
import { withRouter } from "react-router";
import config from "../fireBase"
import Imgs from "./img";



class SignUpView extends React.Component {
    handleLogIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await config
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/welcome");
        } catch (error) {
          alert(error);
        }
    }
        render(){
            return (
                <>
                <center>
                 <div style={{width:"30%", display:"inline-block", marginTop:130}}>
                     <h1>Create an Account</h1>
                     <br/>
                     <Form onSubmit={this.handleLogIn}>
                 <FormControl type="email" name="email" placeholder="Email" required autoComplete="email" style={{borderRadius:3}} className="mr-sm-2" />
                        <br/>
                        <FormControl type="password" name="password" placeholder="Password" required autoComplete="password" style={{borderRadius:3}} className="mr-sm-2" />
                        <br/>
                        <Button type="submit" onClick={()=>console.log("works")} variant="outline-primary">Sign Up</Button>
                        </Form>
                 </div>
                 </center> 
                </>
            )
            }

}
export default withRouter(SignUpView);


