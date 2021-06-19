
import { Box, Text,useMediaQuery,Flex,VStack,Divider,Avatar } from '@chakra-ui/react'

type Dev = {
    name:string;
    profile:string;
    fullName:string;
    current:string;
    id:string;
}
const Developers = ({ dev }:any) => {
        const [Mobile666] = useMediaQuery("(max-width: 667px)")

    return (
           <Box  ml={Mobile666 ? 0 : 5} mt={Mobile666 ? 5 : 0}   width={Mobile666 ? '100%' : '20rem'}  >

            <Box shadow='base' borderRadius='sm' bg='white'  p={1}>
                <Flex justifyContent='space-between' p={2} px={3}>
                    <Text fontSize='sm' fontWeight='bold' color='gray.600' > Developers </Text>
                    {/* <Text fontSize='sm' fontWeight='bold' color='gray.600' > Project </Text> */}
                </Flex>
                <Divider />
             <VStack p={2} px={2} 
              height={Mobile666 ? '50vh':'30.5rem'}  
            overflow='hidden'
              overflowY='scroll' 
              className='customScroll'>
            {dev.map((dev:Dev) => (
                <Flex key={dev.id} p={1} alignItems='center' justifyContent='start'
                        bg='white' 
                        shadow='xs' 
                        width='100%' 
                        borderRadius='sm' 
                        >
                            <Avatar name={dev.name} src={dev.profile} size='md' mr={2} borderRadius='sm'/>

                            <Flex flexDirection='column' mr={2}>
                                <Text fontSize='md' fontWeight='bold' color='gray.600' > {dev.fullName} </Text>
                                <Text fontSize='sm' color='gray.400'> {dev.current} </Text>
                            </Flex>
                        </Flex>
            ))}
        </VStack>
          </Box>
        </Box>
    )
}

export default Developers
