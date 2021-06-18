import {
    Flex, 
    VStack, 
    Text, 
    Button, 
    Box,
    InputGroup,
    InputLeftElement,
    Input,
    Divider,
    useMediaQuery,
    SimpleGrid,
} from '@chakra-ui/react'

import {
    SmallAddIcon, 
    SearchIcon,
} from '@chakra-ui/icons'
import DeveloperCard from './DeveloperCard'
import { developers } from '../../../mock/developers'
const AdminDevelopers = () => {
    const [Mobile666] = useMediaQuery("(max-width: 667px)")

    return (
        <Box>
               <Flex justifyContent='space-between' alignItems='end' mt={5}>
                <VStack align='start' verticalAlign='start'>
                    <Text fontSize={Mobile666 ? "1xl" : '2xl'} fontWeight='bold'> Developers </Text>
                    <Text fontSize="md" color='gray.500'> List </Text>
                </VStack>

                <Button size={Mobile666 ? 'sm' : 'md'} leftIcon={<SmallAddIcon />} colorScheme="blue">
                 New Developer
                </Button>
             </Flex>
         
             <Box  width='100%'  shadow='sm'  mt={2}  bg='white' borderRadius='md' >
                <VStack>
                    <Box width='100%' p={3} >
                    <InputGroup onFocus={() => console.log('focus')}>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="text" size='md' placeholder="Search" width={Mobile666 ? '100%' : '30%'}/>
                    </InputGroup>
                    </Box>
                    <Divider orientation="horizontal" margin='0 !important' />

                    <Box width='100%' p={4}>

                    <SimpleGrid columns={[1, null, 2]} spacing={2} >

                        {developers.map(dev => (
                        <DeveloperCard 
                            key={dev.id}
                            id={dev.id}
                            name={dev.fullName}
                            position={dev.position}
                            profile={dev.profile}
                            projects={dev.projects}
                            contacts={dev.contacts}
                            stack={dev.stack}
                        />
                        ))}
                    
                    </SimpleGrid>
        
                    </Box>
                </VStack>
            </Box> 
        
        </Box>
    )
}

export default AdminDevelopers
