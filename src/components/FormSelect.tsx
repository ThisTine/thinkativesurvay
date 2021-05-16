import { Grid, Heading, Link } from "@chakra-ui/layout"
import { Box, Button, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
interface linkobj {
    img:string,
    link: string,
    name: string,
    sex: string | undefined,
    age: string | undefined
}

const FormSelect:React.FC<{sex:string,age:string}> = ({sex,age})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const formarr:linkobj[] = [
        {
            img:'https://image.freepik.com/free-vector/people-using-online-translation-app_74855-7800.jpg',
            link: "https://docs.google.com/forms/d/e/1FAIpQLSc46TMbEx6P3DY0gPiL34JaSbYmhDhHD6uEpiu1W1Jjk0krLA/viewform",
            name: "แบบสำรวจเกี่ยวกับภาษาต่างประเทศ",
            sex: "entry.219928614",
            age: "entry.840866081"
        },
        {
            img:'https://image.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg',
            link: "https://docs.google.com/forms/d/e/1FAIpQLScBHDGYGrGoZCEz6tggeRMJtN3UZbiMQIpY-JU8eOl_qCPOpg/viewform",
            name: "แบบสำรวจเกี่ยวกับการรับประทานอาหาร",
            sex: "entry.937070580",
            age: "entry.1536166713"
        },
        {
            img:'https://image.freepik.com/free-vector/people-standing-store-queue_23-2148594615.jpg',
            link: "https://docs.google.com/forms/d/e/1FAIpQLSe2PVbKIDzSWGpnZiyleJXJHBIYSA5dPGM14vF1y0PzoXh9eQ/viewform",
            name: "แบบสำรวจเกี่ยวกับร้านขายส่งสินค้า",
            sex: undefined,
            age: undefined
        }
    ]

    return(
    <>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>คุณคือ ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link isExternal href="https://docs.google.com/forms/d/e/1FAIpQLScrMf3Rs96Jnxb_6ddTY6vUPTPx3n8nkeZXCj10SrwTXOed-g/viewform">
            <Button size="lg" w="100%" mb={10} colorScheme="yellow"> ผู้ใช้บริการ</Button>
            </Link>
            <Link isExternal href="https://docs.google.com/forms/d/e/1FAIpQLScrMf3Rs96Jnxb_6ddTY6vUPTPx3n8nkeZXCj10SrwTXOed-g/viewform">
            <Button size="lg" colorScheme="teal" w="100%"> ผู้ประกอบการ</Button>
            </Link>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} mt={10} gap={5} >
        {formarr.map(item=>{
            return(
                <Link href={item.sex && item.age ? sex === "ชาย" || sex === "หญิง" ?  `${item.link}?usp=pp_url&${item.sex}=${sex}&${item.age}=${age}` 
                : `${item.link}?usp=pp_url&${item.sex}=__other_option__&${item.sex}.other_option_response=${sex}&${item.age}=${age}` : item.link} isExternal={true} _hover={{textDecoration:"none"}} key={item.link} >
                <Box w="100%" bg="white" rounded="3xl" d="flex" flexDir="column"  boxShadow="lg" minH="xs" h="100%"  _hover={{boxShadow:"xl"}} > 
                <Box bg={`url(${item.img})`}  roundedTop="xl"  bgSize="cover" minH="50px" h="40%" w="100%"></Box>
                    <Heading p={5} h="fit-content" w="fit-content">{item.name}</Heading>
                </Box>
                </Link>

            )
        })}
        
        <Box w="100%" onClick={onOpen} bg="white" rounded="3xl" d="flex" flexDir="column"  boxShadow="lg" minH="xs" h="100%"  _hover={{boxShadow:"xl"}} cursor="pointer" > 
                <Box bg={`url("https://image.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg")`}  roundedTop="xl"  bgSize="cover" minH="50px" h="40%" w="100%"></Box>
                    <Heading p={5} h="fit-content" w="fit-content">แบบสำรวจการสั่งอาหารออนไลน์</Heading>
        </Box>


    </Grid>
    </>)
}

export default FormSelect 