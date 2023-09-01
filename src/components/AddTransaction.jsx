import { Box, Typography, styled, TextField, Button } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Container = styled(Box)`

Display : flex ;
flex-direction : column ;

border : 2px solid red ;
& > h5, & > div, & > button {
    margin-top : 10px;

}
`
const InputField = styled(TextField)`
margin : 5px
`

const AddTransaction = () => {
    return(
        <Container>
            <Typography variant='h5'>Add Transaction</Typography>
            <Box>
                <InputField id="AmountField" label="Enter Amount" placeholder="Ex: 2000" variant="outlined" />
                <InputField id="CategoryField" label="Enter Category"  placeholder="Ex: stationary" variant="outlined" />
            </Box>            
            <Box>
            <FormControl>
                <FormLabel>Expense Type</FormLabel>
                    <RadioGroup row>
                        <FormControlLabel value="Expense" control={<Radio />} label="Income" />
                        <FormControlLabel value="Income" control={<Radio />} label="Expense" />                        
                    </RadioGroup>
            </FormControl>             
            </Box> 
            <Button variant='contained'> ADD TO TRANSACTION HISTORY </Button>                   
        </Container>
    )
}

export default AddTransaction ;