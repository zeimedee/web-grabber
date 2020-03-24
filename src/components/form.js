import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import Axios from 'axios';



const useStyles = makeStyles(theme => ({
    root:{ '& > *':{
        margin: theme.spacing(1),
        width: '25ch',
    },
},

}));

function Form() {
    const [url, SetUrl] = useState('');
    const [name, SetName] = useState('');

    const handleSubmit = (e) =>{
            e.preventDefault();
        const grab = {
            url: url,
            name: name
        }
        Axios.post('http://localhost:4000/grab',grab)
             .then(res => console.log(res.data))
             .catch(err => console.log(err))
             

       SetUrl('');
       SetName('');

    }

    const classes = useStyles();
    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete='off'>
                <div>
                <TextField name='url' value={url} onChange={e =>{SetUrl(e.target.value)}} id='outlined-basic' label='URL' variant='outlined' />
                </div>
                <div>
                <TextField name='name' value={name} onChange={e =>{SetName(e.target.value)}} id='outlined-basic' label='name' variant='outlined'/>
                </div>
                <div>
                <Button type='submit' color='primary' variant='outlined'>Grab</Button>
                </div>
            </form>
            
        </div>
    )
}

export default Form;
