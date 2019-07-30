import React from "react";
import logo from "../log.svg"
import { Form, FormControl, Button} from 'react-bootstrap'
import { withRouter } from "react-router";
import config from "../fireBase"
import {Link} from "react-router-dom"



class Logins extends React.Component {
    handleLogIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await config
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/tracks");
        } catch (error) {
          alert(error);
        }
    }
        render(){
            return (
                <>
                 <div style={{width:"20%", display:"inline-block", marginLeft:100, marginTop:130}}>
                     <Form onSubmit={this.handleLogIn}>
                 <FormControl type="email" name="email" placeholder="Email" required autoComplete="email" style={{borderRadius:3}} className="mr-sm-2" />
                        <br/>
                        <FormControl type="password" name="password" placeholder="Password" required autoComplete="password" style={{borderRadius:3}} className="mr-sm-2" />
                        <br/>
                        <Button type="submit" onClick={()=>console.log("works")} variant="outline-secondary">Login</Button>
                        </Form>
                        <p>Not signed up yet? Then register <Link to="/signup">here</Link></p>
                 </div> 
                </>
            )
            }

}
export default withRouter(Logins);


