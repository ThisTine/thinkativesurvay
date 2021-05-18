import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Heading, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useHistory } from "react-router"

const InfoBox:React.FC<{age:string,sex:string}> = ({age,sex})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>
    let history = useHistory()

    return(
        <>
              <AlertDialog
              leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              รีเซ็ทข้อมูล
            </AlertDialogHeader>

            <AlertDialogBody>
              ข้อมูลของคุณ (อายุ และ เพศ) จะถูกลบ
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={()=>{onClose(); history.replace("/") }} ml={3}>
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      
        <Box bg="yellow.300" p={10} rounded="2xl" mt={5} boxShadow="md" onClick={onOpen} _hover={{boxShadow:"xl"}} cursor="pointer">
        <Heading> คุณ </Heading>
        <Heading> อายุ: {age} </Heading>
        <Heading> เพศ: {sex} </Heading>

      </Box>
      </>
    )
}

export default InfoBox