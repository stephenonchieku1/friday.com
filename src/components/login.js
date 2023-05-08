import React,{useState} from 'react'; 
import {Box,Button,MenuItem,Card,Typography} from '@mui/material';
import TextField from '@mui/material/TextField'
const defaultValues = {
    headline: "",
    DatePosted: Date(),
     CareNeeded: "",
    loation: "",
    schedule: "",
  };
  const CareNeeded=[{
    label :"BabySitter",
    value:"BS"
  },
  {
    label:"Nanny",
    value:"NN"
  },
  {
    label:"special needs care",
    value:"SNC"
  },
   {
    label:"companion care",
    value:"CC"
  }
  ]; 
  
  
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  const [CareNeed, setCareNeed] = React.useState("BS");
  const handleChange = (event) => {
    setCareNeed(event.target.value);
  };
  return(
    <form onSubmit={handleSubmit}>
         <Box
        component="form"
        sx={ {width:'100px',height:'10px',
          '& .MuiTextField-root': { m: 5, width: '25ch'  },
            
        }}>
          <Card>
        <Typography sx={{ mt: 2, mb: 2 }} variant='h4' color='blue'>Login Into Account</Typography>
        
      
        <div>
          <TextField
            type="text"
            required
            id="outlined-required"
            label="Headline"
            value={formValues.Headline}
            onChange={handleInputChange}
          />
          <TextField
           id="name-input"
            name="name"
           label="Name"
           type="text"
           value={formValues.name}
           onChange={handleInputChange}
         />
           
          <TextField
            required
            id="outlined-required"
            label="Location"
            value={formValues.Loation}
            onChange={handleInputChange}
          />
          <TextField
            required
            id="outlined-required"
            label="DatePosted"
            value={formValues.DatePosted}
            onChange={handleInputChange}
          />
        
           <TextField
          id="outlined-select-currency"
          select
          label="Care-needed"
          value={CareNeed}
          onChange={handleChange}
          helperText="Please select the care you need"
        >
          {CareNeeded.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
            required
            id="outlined-required"
            label="Schedule"
            value={formValues.schedule}
            onChange={handleInputChange}
          />
         
        </div>
        <Box>
      <Button  onClick={handleSubmit}  variant="contained" color="primary" type="submit" >
          Submit
        </Button>
        
      </Box>
        </Card>
      </Box>
      
    
  
  </form>
  );
}
  
export default Form     
    