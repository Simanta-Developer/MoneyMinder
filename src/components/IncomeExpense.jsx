import { Box, Card, CardContent, Typography, styled} from '@mui/material'

const Container = styled(Box)`
Display : flex ;
 
& > div{
    flex : 1;
    background-color: ${({ theme }) => theme.body};
}
#IncomeCard {
    margin : 5px ;
}
#ExpenseCard {
    margin : 5px ;
}
`
// const CustomCard = styled('Card')`
// margin : auto ;
// background-color: ${({ theme }) => theme.cardBackground};
// `

const IncomeExpense = () => {
    return(
        <Container>
            <Card id = "IncomeCard" variant="outlined">
                <CardContent><Typography>Income</Typography></CardContent>
                <CardContent><Typography>0</Typography></CardContent>                
            </Card >
            <Card  id = "ExpenseCard" variant="outlined">
                <CardContent><Typography>Expense</Typography></CardContent>
                <CardContent><Typography>0</Typography></CardContent>                
            </Card >           
        </Container>
    )
}

export default IncomeExpense ;