import {Flex, VStack, Text, Button, Box,
    InputGroup,
    InputLeftElement,
    Input,
    Divider,
    useMediaQuery,
    SimpleGrid,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import {
    SmallAddIcon, 
    SearchIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
} from '@chakra-ui/icons'
import { BsThreeDots } from "react-icons/bs";
import { FaEdit,FaTrashAlt,FaCheckCircle,FaGripVertical } from "react-icons/fa";

const AdminProject = () => {
    const [Mobile666] = useMediaQuery("(max-width: 667px)")

    return (
        <Box>
            <Flex justifyContent='space-between' alignItems='end' mt={2}>
                <VStack align='start' verticalAlign='start'>
                    <Text fontSize={Mobile666 ? "1xl" : '2xl'} fontWeight='bold'> Project</Text>
                    <Text fontSize="md" color='gray.500'> Lists </Text>
                </VStack>

                <Button size={Mobile666 ? 'xs' : 'md'} leftIcon={<SmallAddIcon />} colorScheme="blue">
                 New Project
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

                    <SimpleGrid columns={[1, null, 3]} spacing={2}>

                    <Box  p={2} shadow='base' borderRadius='md' m={2} >
                    <Flex justifyContent='space-between'>
                     <Text fontSize='2xl' ml={2} color='gray.600' fontWeight='bold'>
                        Campaign Tracker
                     </Text>
                        <Menu>
                                <MenuButton as={IconButton} aria-label="Options" icon={<FaGripVertical />} variant="none"/>
                                <MenuList>
                                <MenuItem icon={<FaEdit />}> Edit  </MenuItem>
                                <MenuItem icon={<FaTrashAlt />}> Remove </MenuItem>
                                <MenuItem icon={<FaCheckCircle />}>  Done </MenuItem>
                             </MenuList>
                        </Menu>
                    </Flex>
                   <Flex justifyContent='space-between' flexDirection='column'>
                     <Text fontSize='md' width='80%' ml={2} my={3}>
                     A Campaign Tracker app built with React and Node Js
                    </Text>
                        <Flex justifyContent='space-between' mx={2}>
                                <AvatarGroup size="sm" max={5}>
                                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                                </AvatarGroup>
                            <Text fontSize='sm'> Due Date <br/> 12-23-2020</Text>
                        </Flex>
                    </Flex>
                  </Box>

 <Box  p={2} shadow='base' borderRadius='md' m={2} >
                    <Flex justifyContent='space-between'>
                     <Text fontSize='2xl' ml={2} color='gray.600' fontWeight='bold'>
                        Campaign Tracker
                     </Text>
                        <Menu>
                                <MenuButton as={IconButton} aria-label="Options" icon={<FaGripVertical />} variant="none"/>
                                <MenuList>
                                <MenuItem icon={<FaEdit />}> Edit  </MenuItem>
                                <MenuItem icon={<FaTrashAlt />}> Remove </MenuItem>
                                <MenuItem icon={<FaCheckCircle />}>  Done </MenuItem>
                             </MenuList>
                        </Menu>
                    </Flex>
                   <Flex justifyContent='space-between' flexDirection='column'>
                     <Text fontSize='md' width='80%' ml={2} my={3}>
                     A Campaign Tracker app built with React and Node Js
                    </Text>
                        <Flex justifyContent='space-between' mx={2}>
                                <AvatarGroup size="sm" max={5}>
                                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                                </AvatarGroup>
                            <Text fontSize='sm'> Due Date <br/> 12-23-2020</Text>
                        </Flex>
                    </Flex>
                  </Box>

                  
              
                    </SimpleGrid>
        
                    </Box>
                </VStack>
            </Box> 

        </Box>
    )
}

export default AdminProject
