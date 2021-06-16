import { Icon,Button } from "@chakra-ui/react"
import { BsFillPersonFill, BsFillUnlockFill,BsLockFill } from "react-icons/bs";

import { 
    Flex, 
    Box, 
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Image,
    Divider,
    HStack,
    Heading,
    useMediaQuery,
    FormControl,
    FormErrorMessage
 } from "@chakra-ui/react"
import{ useState } from "react"
import { MdArrowForward } from "react-icons/md"
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Formik, Form, Field,  } from 'formik';
 import * as Yup from 'yup';

const LOGO = 'https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/133144689_107483951253863_3205074034669199260_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHyuaGk6Kczk7EtNfRqg9vj4m0OF27i0YLibQ4XbuLRgl67yFz_hu5bZmJc4LeKwWmYXLUWlVBeZGo4tyYFqvCi&_nc_ohc=wijA_0DQvGIAX8ecQS6&_nc_ht=scontent.fceb1-1.fna&oh=cc7bbf7260f68c2a0d5b122d28b5fba3&oe=60CE3579'

const Login = () => {

    const [Mobile420] = useMediaQuery("(max-width: 420px)")
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const mockSubmit = (values:any) => {
        console.log(values)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2000)
    }
    const handleClick = () => setShow(!show)

    const loginInputSchema = Yup.object({
            username: Yup.string()
            .max(2, 'Must be 3 characters or more')
            .required('Username is required'),
            password: Yup.string()
            .max(3, 'Must be 3 characters or more')
            .required('Password is required'),
        })
    
    return (
        <Flex justifyContent='center' 
            alignItems='center' 
            height='100vh' 
            bgGradient="linear-gradient(312deg, rgba(80,175,230,1) 50%, rgba(255,255,255,1) 50%)" >
            <Box p={8} shadow='lg' borderRadius='md' bgColor='white'
                style={{  height: Mobile420 ? '100vh' : 'auto', width: Mobile420 ? '100vw' : 'auto',}}>
                <Stack spacing={5} align='center' width='100%' >
                <Image 
                objectFit="cover"
                boxSize="120px"
                src={LOGO} 
                style={{ margin: Mobile420 ? '2.5rem 0' : '' }}
                alt="Cauld And Clark" />

            <Formik 
            initialValues={{ username: "", password:"" }}
                    onSubmit={(values, actions) =>  mockSubmit(values)}
                    validationSchema={loginInputSchema}>
            {(props) => (
                <Form > 
                <Field name="username" >
                    {({ field, form }:any) => (
                                <FormControl isInvalid={form.errors.username && form.touched.username} width='100%' >
                                    <InputGroup size="lg" >
                                    <InputLeftElement 
                                        pointerEvents="none" 
                                        children={<Icon as={BsFillPersonFill} 
                                        color="gray.400"  /> }/>
                                        <Input {...field} id="username" placeholder="Username" focusBorderColor='gray.400'/>
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                </FormControl>
                    )}                
                    </Field>

                    <Field name="password">
                        {({ field, form }:any) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password} width='100%' mt='1rem'>
                        <InputGroup size="lg" >
                        <InputLeftElement pointerEvents="none" children={ show ? 
                                    <Icon as={BsFillUnlockFill} color="gray.400" /> :
                                    <Icon as={BsLockFill} color="gray.400" /> } />
                                    <Input {...field} id="password" placeholder="Password" 
                                        focusBorderColor='gray.400'
                                        pr="4.5rem" 
                                        type={show ? "text" : "password"} 
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                            </InputGroup>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                        )}                
                    </Field> 
                        <Button mt='1rem' isLoading={loading} 
                            loadingText='Wait..' 
                            colorScheme='blue' 
                            width='100%' 
                            size='md'  
                            type="submit"
                            rightIcon={<MdArrowForward />} >
                            Login
                        </Button>                
                </Form>
                )}
            </Formik>
        </Stack>

                     <HStack  my='1rem'>
                        <Divider  />
                        <Heading as="h6" size="xs" color='gray.500'> or </Heading>
                        <Divider  />
                      </HStack>

                     <HStack >
                        <Button 
                        isLoading={loading}
                        loadingText='Wait..'
                        onClick={mockSubmit}
                        width='50%' size='md' colorScheme="facebook" leftIcon={<FaFacebook />}>
                            Facebook
                        </Button>
                        <Button 
                        isLoading={loading}
                        loadingText='Wait..'
                        onClick={mockSubmit}
                        width='50%' size='md' bgColor='color.600' leftIcon={<FaGithub />}>
                            Github
                        </Button>
                    </HStack>

                </Box>
        </Flex>
    )
}

export default Login
