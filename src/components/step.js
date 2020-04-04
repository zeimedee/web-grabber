import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Step from '@material-ui/core/Step'
import Stepper from '@material-ui/core/Stepper'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme)=>({
        root: {
            width: '100%',
        },
        backButton:{
            marginRight: theme.spacing(1)
        },
        instruction:{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
}));

let url = 'Enter the URL';
let name = 'Enter a name for your screenshot';
let click= 'Grab your screenshot';

 function getSteps(){
 return [ url,name,click]
 }

 function getStepContent(index){
     switch(index){
         case 0:
             return 'enter url';
         case 1:
             return 'enter name' ;
         case 2:
             return 'click on grab';
         default:
             return 'Unknown index'; 
     }
 }



 function Steps() {
     const classes = useStyles();
     const [activeStep, setActiveStep] = useState(0)
     const steps = getSteps();
     
     const handleNext = ()  => {
         setActiveStep((prevActiveStep) => prevActiveStep + 1)
     };
     const handleBack = ()  => {
        setActiveStep((prevActiveStep)=> prevActiveStep - 1)
     };
     const handleReset = () => {
         setActiveStep(0)
     };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label)=>( 
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
                
             <div>
                 {activeStep === steps.length ? (
                     <div>
                         <Typography className={classes.instruction}>All steps completed</Typography>
                         <Button onClick={handleReset}>Restart</Button>
                     </div>
                  ) : (
                      <div>
                          <Typography className={classes.instruction}>{getStepContent(activeStep)}</Typography>
                          <div>
                              <Button 
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.backButton}
                              >Back
                              </Button>
                              <Button variant='contained' color='primary' onClick={handleNext}>
                                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                              </Button>

                          </div>
                      </div>
                  )}
             </div>                        
        </div>
    )
}
export default Steps;