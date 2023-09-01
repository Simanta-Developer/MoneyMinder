import { Typography, Box, styled, Divider, List } from "@mui/material";

const TransactionListText = styled(Typography)`
font-size : 20px;
font-color:black;
font-weight : bold;
margin-bottom : 20px;
`


const TransactionList = ({transactions}) => {
    return(
        <TransactionListText>
            <TransactionListText> Transaction History </TransactionListText>
            <Divider/>
            <List>
                {
                    transactions.map(transactions => (
                        <p>Hello</p>
                    ))
                }
            </List>
        </TransactionListText>
    )
}

export default TransactionList ;