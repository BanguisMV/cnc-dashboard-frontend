import { Flex, Spinner  } from "@chakra-ui/react"

const FullWidthSpinner = () => {
    return (
     <Flex color="white" justifyContent='center' alignItems='center' height='100vh'>
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
      </Flex>
    )
}

export default FullWidthSpinner
