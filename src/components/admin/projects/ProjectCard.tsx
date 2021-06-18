import {Flex, Text, Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { FaEdit,FaTrashAlt,FaCheckCircle,FaGripVertical } from "react-icons/fa";


type Developer = {
    name:string;
    avatar:string;
}
type Project = {
   id:string;
   name:string;
   description:string;
   status:string;
   developers:Developer[]
}

type Card = {
    project:Project
}
const ProjectCard = ({ project }:Card) => {

    let statusColor
    if(project.status === 'Ongoing') {
        statusColor = 'blue.400'
    } else if (project.status === 'Maintainance') {
        statusColor = 'orange.400'
    } else if (project.status === 'Upcoming') {
        statusColor = 'red.400'
    } else if (project.status === 'Done') {
        statusColor = 'green.400'
    }
    
    return (
        <Box  p={2} shadow='base' borderRadius='md' m={2} >
        <Flex justifyContent='space-between'>
            <div>
            <Text fontSize='2xl' ml={2} color='gray.600' fontWeight='bold'>
             {project.name} 
            </Text>
            <Text fontSize='sm' ml={2} color={statusColor} fontWeight='bold'>
                {project.status}
            </Text>
            </div>
         
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
        {project.description}
        </Text>
            <Flex justifyContent='space-between' mx={2}>
                    <AvatarGroup size="sm" max={3}>
                     {project.developers.map(( dev, index ) => ( <Avatar key={index} name={dev.name} src={dev.avatar} /> ))}
                    </AvatarGroup>
                <Text fontSize='sm'> Due Date <br/> 12-23-2020</Text>
            </Flex>
        </Flex>
      </Box>
    )
}

export default ProjectCard
