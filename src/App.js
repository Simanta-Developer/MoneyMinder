
import './App.css';
import {Typography, styled, Box, IconButton} from '@mui/material'
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import TransactionDetail from './components/TransactionDetail';
import { useState } from 'react';
import {createGlobalStyle} from "styled-components"
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes"
import SwitchButton from './components/SwitchButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const GlobalStyles = createGlobalStyle`
  body {
    height : 100 vh ;
    border : 2px solid green ;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
` 
// const HeadContainer = styled(Box)`
// Display : flex ;
// justify-content : center; 

// ` 
const Header = styled(Typography)`
font-size: 40px;
margin-bottom: 10px;
font-weight: bold;
& > button{
  position : absolute ;  
  right : 0px ;
  margin-top : 10px ;
}
`
// const TopRightSwitch = styled(SwitchButton)`
// position: relative; 
// margin-top: 20px ;
// margin-right: 0px ;
// `
const Component = styled(Box)`
Display : flex ;
min-height: 200px;
width : 70% ;
padding : 10px;
margin : auto ;
border : 1px solid grey ;
border-radius : 5px;
&>div {
  height : 75vh ;
  margin : 10px ;
  padding: 10px ;
}
`
function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const [transactions, setTransactions] = useState([
    {id : 1, text : 'Bugarti', amount : 20},
    {id : 2, text : 'Audi', amount : 30},
    {id : 3, text : 'Mercedes', amount : 40},
    {id : 4, text : 'Tesla', amount : 50}
  ]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <Box className="App" id={theme}>        
         <Header>
            Money Minder  
            <IconButton sx={{ ml: 1 }} onClick={themeToggler} color="inherit">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
           {/* <SwitchButton checked={theme === 'dark'} onChange={themeToggler} /> */}
            {/* <IconButton sx={{ ml: 1 }} onClick={themeToggler} color="inherit">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}
         </Header> 
          {/* <SwitchButton checked={theme === 'dark'} onClick={themeToggler} /> */}               
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
          <Component className = "Component_Box">
            <Box className = "Component_left">
              <Balance/>
              <IncomeExpense/>
              <AddTransaction/>
            </Box>  
            <Box>
              <TransactionList transactions = {transactions}/>          
            </Box>  
          </Component>
        </Box> 
      </>  
    </ThemeProvider>     
     
  )
}    

export default App ;
