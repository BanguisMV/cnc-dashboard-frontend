import { 
  Flex, 
  Box, 
  HStack, 
  Image,
  Button, 
  Container, 
  IconButton, 
  Icon,
  Avatar,
  useMediaQuery,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Menu,
  Text  
} from "@chakra-ui/react"
import { MdPowerSettingsNew } from "react-icons/md";
import { HamburgerIcon } from '@chakra-ui/icons'
import { Routes } from '../routes/routes'
import Logo from '../assets/images/cnclogo.png'
import { NavLink } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


const AppLayout = ({ children, title } : any) => {

const [Mobile666] = useMediaQuery("(max-width: 667px)")
const user = useSelector((state:any) => state.user)
const dispatch = useDispatch()

useEffect(() => {
  document.title = "CNC | " + title
}, [title])

const Logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('role')
  dispatch({ type: 'LOGIN' })
  window.location.href = '/'
}

const profileIcon = <Avatar size="xs" name="Marky" src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/196499490_2274834015987112_1141050291778223582_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHAbNM6zi1jTEjr4t5GQdkHf0iRcP0qa7d_SJFw_Sprt9Z2FLn7wZ8dEMFyd70PxCvGxPIvNU0kJrKQudBAiMyB&_nc_ohc=xaIIAKkYr0kAX_czwbi&_nc_ht=scontent.fceb1-1.fna&tp=27&oh=f35d679231b49885afca16c565b8c5e8&oe=60CF6C27" />
    return (
        <Flex padding='0' margin='0' flexDirection='column' >
            <Box 
                shadow='sm' 
                px={ Mobile666 ? '0' : '1.5rem'}
                display='flex' 
                alignItems='center'
                justifyContent='space-between'
            >
            <Container maxW="container.lg" >
            {Mobile666 &&  
             <HStack py={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Flex>
                  <Image
                        boxSize="30px"
                        objectFit="cover"
                        src={Logo}
                        alt="Logo"
                  />
                </Flex>
                <Text fontSize='1xl' fontWeight='bold'>
             {title}
                </Text>
            <Menu >
            <MenuButton as={IconButton} 
            colorScheme="gray"
            icon={<HamburgerIcon />}    
            variant="outline"
            aria-label="Options"
            />
            <MenuList>
              {Routes.map((item, index) => (
                  <Fragment key={index}>
                    {item?.role?.includes(user?.role) && (
                      <NavLink key={index} to={item.path}>
                         <MenuItem icon={<item.icon  />}>  {item.name}</MenuItem>
                      </NavLink>
                    )}
                  </Fragment>
                ))}
          
              <MenuDivider />
          
              <MenuItem  onClick={Logout} py={1}>
                  <Icon as={MdPowerSettingsNew} width='100%' w={6} h={6}  color="white" bg='red' borderRadius='5px'  />
              </MenuItem>
            </MenuList>
          </Menu>
              </HStack>
            }
          {!Mobile666 && 
                <HStack py={2} display='flex' alignItems='center' justifyContent='space-between'>
                <div>
                  <Image
                        boxSize="40px"
                        objectFit="cover"
                        src={Logo}
                        alt="Logo"
                  />
                  </div>
              <div>
  
                {Routes.map((item, index) => (
                  <Fragment key={index}>
                    {item?.role?.includes(user?.role) && (
                      <NavLink key={index} to={item.path}>
                        <Button 
                        leftIcon={ item.name.toString() === 'Profile' ? profileIcon : <item.icon  />   }
                        colorScheme="gray" 
                        size="md"  
                        marginLeft='1rem !important'>
                                {item.name}
                        </Button>
                      </NavLink>
                    )}
                  </Fragment>
                ))}
                <IconButton 
                  aria-label="Search database" 
                  marginLeft='3rem !important'
                  colorScheme='red'
                  borderRadius='full'
                  onClick={Logout}
                  shadow='base'
                  icon={<Icon as={MdPowerSettingsNew} />} />
           </div>
          
                </HStack>}
                </Container>
            </Box>
            
         
                <Box   bg='gray.50'>
                  <Container maxW="container.lg" >
                    {children}
                  </Container>
                </Box>
   

        </Flex>
    )
}

export default AppLayout
