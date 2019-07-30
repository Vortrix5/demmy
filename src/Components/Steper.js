import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactP from "./React"
import Stepp from './Stepp';
import {Link} from "react-router-dom"
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    float: "right"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

  },
}));

function getSteps() {
  return ['Create a React App', 'Create a Navbar', 'Create a Landing Page', 
  'Set up your firebase login', 'Create a Footer','Deploy your project' ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ReactP/>
    case 1:
      return <Stepp 
      sub="2. Create a Navbar" 
      desc="Let's create our header which is going to be the Navbar! And for that we are going to create a new compenent file in our components folder called Navbar using:" 
      cod=" mkdir components
      cd components
      touch Navbar.js"  
      desc2="Now we're going to install the library that we will use which is Material-UI using:" 
      cod2=" npm install @material-ui/core @material-ui/icons"  
      desc3="Now choose which Navbar Style we are going to use:" 
      but="Configure your Navbar"
      heit1="80px"
      wid1="400px"
      heit2="53px"
      wid2="300px"
      butt/>
    case 2:
      return <Stepp sub="3. Create a Landing Page" 
      desc="Now we are going to create our first landing page, the page that the user will see when first entering our website, so let's create our Home component:"
      cod=" cd components
          touch Home.js" 
      but="Configure your carousel"
      wid1="350px"
      desc2="Then, we are going to install the required library using:"
      cod2="npm install mdbreact"
      wid2="300px"
      heit2="30px"
      desc3="And finally let's configure our carousel, which is going to be our main element in the landing page:"
      butt/>;
    case 3:
      return <center>
      <Container>
      <h1 style={{fontFamily:"Poppins", 
      width: "50%", 
      backgroundColor:"#ed2b48",
      color:"white",
      padding:130,
      boxShadow: "-6px 13px 5px -3px rgba(0,0,0,0.41)"}}>
        Coming soon...
        </h1>
      </Container>
    </center>  
    case 4: 
    return <Stepp sub="5. Create a Footer"
                  desc="Now that almost everything is done, all we need to create a footer for our website which will contain a last description, links, copyrights or references. So we will need to create a footer component using:"
                  cod=" cd components
                      touch Footer.js"
                  heit1="53px"
                  wid1="400px"
                  desc2="Then we are going to install MDBoostrap which is the library we will be using for this:"
                  cod2="npm install mdbreact"
                  wid2="300px"
                  heit2="30px"
                  desc3="And finally, let's set up our footer and give it some style: "
                  but="Configure your Footer"
                  butt
                  />  
    case 5:
      return <Stepp sub="6. Deploy your project to Netlify"
                    desc="Finally, now that our project is done, we just need to deploy it! So, first we will need to upload it to Github, so start by creating an account: 
                    https://github.com/, then we will excute some commands in te terminal in order to push the project:"
                    cod=" git init
                    git add .
                    git commit"
                    desc2="You’ve now got a local git repository. You can use git locally, like that, if you want. But if you want the thing to have a home on github, you have to create a new github repository then click on 'Push an existing repository...', now go back to your terminal and type this:"
                    cod2=" git remote add origin git@github.com:username/new_repo
                     git push -u origin master"
                     wid1="300px"
                     heit1="80px"
                     wid2="500px"
                     heit2="60px"
                     desc3="All you have to do now is create a new Netlify account and deploy your github project there by following this simple guide : "
                     butt
                     but="Follow these steps"/>
       
    default:
      return 'Uknown stepIndex';
  }
}

export default function Steper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root} >

      <Stepper activeStep={activeStep}  alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   
      <div>
        {activeStep === steps.length ? (
          <div>
            <center>
            <Container className={classes.instructions}>
            <h1 style={{fontFamily:"Didact Gothic", 
            width: "50%", 
            backgroundColor:"#2E7BDF",
            color:"white",
            padding:130,
            boxShadow: "-6px 13px 5px -3px rgba(0,0,0,0.41)"}}>
              Et Voila! You have built your first React project! Isn't that AMAZING!
              <Link to="/done"><Button variant="contained" color="secondary">
                Check what you've built
                  </Button></Link>
              </h1>

            </Container>
          </center>
            <Button style={{float:"right"}}onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button variant="contained" color="primary" style={{float:"right"}} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
 );
}