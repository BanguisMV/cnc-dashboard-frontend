import { Box, Text,useMediaQuery,Flex } from '@chakra-ui/react'
import { developers } from '../../../mock/developers'
import Developers from './Developers'
import Overview from './Overview'

const AdminDashboard = () => {
    const [Mobile666] = useMediaQuery("(max-width: 667px)")

    return (
        <Box  p={Mobile666 ? 2 : 3} >
            <Text fontSize={Mobile666 ? "1xl" : '2xl'} fontWeight='bold' color='gray.600' my={5}> Overview </Text>
            <Flex flexDirection={Mobile666 ? "column" : "row"} overflow='hidden' height='100%'>
                <Overview />
                <Developers dev={developers} />
            </Flex>
        </Box>
    )
}

export default AdminDashboard
