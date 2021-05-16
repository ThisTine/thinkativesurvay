import { Button } from "@chakra-ui/button"
import { CheckIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Box, Heading, HStack, Stack } from "@chakra-ui/layout"
import { useState } from "react"
const SexSelect:React.FC<{setsex:React.Dispatch<React.SetStateAction<string | null>>}> = ({setsex})=>{
    const [sexstate, setsexstate] = useState<null|"male"|"female"|"other">(null);
    const [inputcontrol,setinputcontrol] = useState<string>()
    const setnewsex = ()=>{
        if(sexstate === "male"){
            return setsex("ชาย")
        }
        if(sexstate === "female"){
            return setsex("หญิง")
        }
        if(sexstate === "other"){
            if(inputcontrol){
            return setsex(inputcontrol)}
        }
    }
    return(
        <Box w="100%" d="flex" flexDir="column">
        <Box w="100%" d="flex" flexDir="column" alignItems="center" >
           <Heading>เพศของคุณ</Heading>
           <Stack w="fit-content" mt={10} spacing={5} direction={["column","column","row","row"]}>
               <Button size="lg"  colorScheme={sexstate === "male" ? "orange" : "gray"} onClick={()=>setsexstate("male")} >ชาย</Button>
               <Button size="lg"  colorScheme={sexstate === "female" ? "orange" : "gray"} onClick={()=>setsexstate("female")} >หญิง</Button>
               <Button size="lg" colorScheme={sexstate === "other" ? "orange" : "gray"} onClick={()=>setsexstate("other")} > 
               <HStack spacing={10} w="100%"> <CheckIcon/> <Input bg="gray.200" onChange={(e)=>setinputcontrol(e.target.value)} value={inputcontrol ? inputcontrol : ''} placeholder="อื่น ๆ" color="black" /></HStack> </Button>
           </Stack>
       </Box>
       <Button ml="auto" colorScheme="green" mt={20} size="lg" isDisabled={sexstate ? sexstate === "other" ? inputcontrol ? false : true : false : true} onClick={()=>setnewsex()}> Next </Button>

   </Box>
    )
}

export default SexSelect