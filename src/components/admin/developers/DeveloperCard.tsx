import {
    Flex, 
    Text, 
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Divider,
    List,
    ListItem,
    ListIcon,
    useMediaQuery,
    HStack,
    Link,
    SimpleGrid,
    Tag
} from '@chakra-ui/react'
import { Avatar } from "@chakra-ui/react"
import { FaEdit,FaTrashAlt,FaGripVertical,FaCheckCircle,FaFacebookSquare,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


type Contacts = {
    gmail:string;
    facebook:string;
    github:string;
}
type Card = {
    id:string;
    name:string;
    position:string;
    profile:string;
    projects:string[];
    contacts:Contacts
    stack:string[];
}

const ProjectCard = ({name, position, profile,contacts,projects,stack,id }:Card) => {
    const [Mobile666] = useMediaQuery("(max-width: 667px)")
    const [Mobile400] = useMediaQuery("(max-width: 400px)")
    return (
        <Box  p={2} shadow='base' borderRadius='md' m={2} position='relative' overflow='hidden'>
    
                <Flex p={2} alignItems='center' flexDirection={Mobile400 ?  'column' : "row"} mt={2} >
                    <Avatar name={name} src={profile} />

                   <Flex alignItems='start' justifyContent='space-between' width='100%'  flexDirection='column'>
                      <Flex justifyContent={Mobile400 ?  'center' : "start"} width='100%' alignItems='center' textAlign='center'>
                      <Text fontSize={Mobile666 ? 'lg' : '1xl'} ml={2} color='gray.600' fontWeight='bold' > {name} </Text>
            
                        <Box position='absolute' top='0' right='0' zIndex='1' m={1} >
                            <Menu>
                                <MenuButton as={IconButton} aria-label="Options" icon={<FaGripVertical />} variant="none"/>
                                <MenuList>
                                    <MenuItem onClick={() => console.log(id)} icon={<FaEdit />}> Edit  </MenuItem>
                                    <MenuItem onClick={() => console.log(id)} icon={<FaTrashAlt />}> Remove </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                      </Flex>
         
                        <Flex justifyContent='space-between' width='100%' alignItems='center' flexDirection={Mobile400 ?  'column' : "row"} >
                         <Text fontSize='sm' ml={2} color='gray.400' fontWeight='bold'   my={Mobile400 ?  2 : 0 }> {position} </Text>
                         <HStack>
                             <Link href={contacts.facebook} isExternal target='_blank'>
                             <FaFacebookSquare color='blue' />
                             </Link>
                             <Link href={`mailto:${contacts.gmail}`} isExternal target='_blank'>
                             <SiGmail color='orange' />
                             </Link>
                            <Link href={contacts.github} isExternal target='_blank'>
                             <FaGithub  />
                            </Link>
                         </HStack>
                        </Flex>
                   </Flex>

                </Flex>
               
        <Divider mt={3} />
        <Box>

        <Text fontSize='1xl' ml={3} my={3} color='gray.600' fontWeight='bold'> Projects </Text>
        
        <List spacing={1} ml={4}>
            {projects.map((project, index) => (
                <ListItem key={index}>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {project}
                </ListItem>
            ))}
        
        </List>
        <Text fontSize='1xl' ml={3} my={3} color='gray.600' fontWeight='bold'> Stack </Text>
        <List spacing={1} ml={4}>
        <SimpleGrid columns={[2, null, 3]} spacing="5px">
        {stack.map((stack, index) => (
        <Tag key={index}  bg="gray.100" >  <ListItem fontWeight='bold'> {stack} </ListItem> </Tag>
        ))}

        </SimpleGrid>
        </List>
        </Box>
      </Box>
    )
}

export default ProjectCard
