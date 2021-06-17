import { Flex, Button, Image  } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useLocation, useHistory } from 'react-router-dom'

const NotFoundPage = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(history)
    return (
        <Flex justifyContent='center' alignItems='center' height='100vh' flexDirection='column'>
            <Image src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg" alt="Page Not Found" />
         
            <Button 
            leftIcon={<ArrowBackIcon />} 
            colorScheme="blue" 
            variant="solid"
            onClick={() => history.goBack()}
            >
                Back
            </Button>
        </Flex>
    )
}

export default NotFoundPage
