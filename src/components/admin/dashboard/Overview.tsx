import { Box, 
    Text,
    useMediaQuery,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    SimpleGrid,
    Stack,
     } from '@chakra-ui/react'
import { activities } from '../../../mock/activities'

import { FaGripVertical } from "react-icons/fa";

const Overview = () => {
    const [Mobile666] = useMediaQuery("(max-width: 667px)")
    const [Mobile400] = useMediaQuery("(max-width: 400px)")

    return (
    <Stack spacing="20px" flex="1" >
        <Box >
            <SimpleGrid columns={[1,2, null, 3]} spacing="20px">
                <Box p={Mobile400 ? 1 : 2} bg='white' shadow='base'  borderRadius='sm'>
                    <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'sm' : '1xl'}>
                     Total Projects
                    </Text>
                      <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'md' : '2xl'} my={2}>
                       8
                    </Text>
                    <Text fontWeight='bold' fontSize={Mobile400 ? 'xs' : 'xs'} textAlign='center'  color='gray.400' >
                        2 Upcoming
                    </Text>
                </Box>
                <Box p={2}  bg='white' shadow='base'  borderRadius='sm'>
                    <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'sm' : '1xl'}>
                        Ongoing Projects
                    </Text>
                      <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'md' : '2xl'} my={2}>
                       3
                    </Text>
                    <Text fontWeight='bold' fontSize={Mobile400 ? 'xs' : 'xs'} textAlign='center'  color='gray.400' >
                        3 Under Maintainance
                    </Text>
                </Box>
                <Box p={2} bg='white' shadow='base'  borderRadius='sm' >
                    <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'sm' : '1xl'}>
                       Total Developers
                    </Text>
                      <Text fontWeight='bold' textAlign='center' fontSize={Mobile400 ? 'md' : '2xl'} my={2}>
                     22
                    </Text>
                    <Text fontWeight='bold' fontSize={Mobile400 ? 'xs' : 'xs'} textAlign='center'  color='gray.400' >
                        4 Under Training
                    </Text>
                </Box>           
            </SimpleGrid>
        </Box>

        <Box p={1}  bg='white' shadow='base'  borderRadius='sm' >
            <Flex justifyContent='space-between' alignItems='center' >
                <Text fontSize='md' fontWeight='bold' color='gray.600' m={2}> Recent Activies </Text>
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<FaGripVertical />} variant="none"/>
                        <MenuList>
                            <MenuItem onClick={() => console.log('Hello')} > This Week  </MenuItem>
                            <MenuItem onClick={() => console.log('Hello')} > This Month </MenuItem>
                        </MenuList>
                    </Menu>
            </Flex>
             <Flex p={2}  bg='gray.50' shadow='xs'  borderRadius='sm' width='100%' my={1} justifyContent='space-between'>
                  <Text fontWeight='bold' fontSize='xs'   color='gray.400'>
                    Title
                    </Text>
                    <Text fontWeight='bold' fontSize='xs'   color='gray.400'>
                        Status
                    </Text>
                </Flex>
            <Flex 
            justifyContent='space-between' 
            alignItems='center' 
            flexDirection='column' 
            height={Mobile666 ? '50vh': '20rem'}  
            overflow='hidden' 
            overflowY='scroll' 
            className='customScroll'
            >
               {activities.map((activity:any) => (
                <Flex key={activity.id} p={2}  bg='white' shadow='base'  borderRadius='sm' width='100%' my={1} justifyContent='space-between'>
                    <Text fontWeight='bold' fontSize='xs'  color='gray.400'>
                       {activity.title} ( {activity.date} )
                    </Text>
                    <Text fontWeight='bold' fontSize='xs'  color={activity.status === 'Done' ? 'green.400' : 'yellow.400'}>
                       {activity.status}
                    </Text>
                </Flex>
               ))}
            
            </Flex>

         </Box>

    
     </Stack>
    )
}

export default Overview
