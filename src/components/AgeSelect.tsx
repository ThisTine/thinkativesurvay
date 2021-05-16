import { Button } from "@chakra-ui/button"
import { Box, Heading } from "@chakra-ui/layout"
import { useState } from "react"



const AgeSelect:React.FC<{setage: React.Dispatch<React.SetStateAction<"น้อยกว่า 12 ปี" | "12 - 17 ปี" | "18 - 25 ปี" | "26 - 30 ปี" | "30 - 40 ปี" | "41 - 50 ปี" | "50 - 60 ปี" | "มากกว่า 60 ปี" | null>>}> = ({setage})=>{
    const [temage, settemage] = useState<"น้อยกว่า 12 ปี" | "12 - 17 ปี" | "18 - 25 ปี" | "26 - 30 ปี" | "30 - 40 ปี" | "41 - 50 ปี" | "50 - 60 ปี" | "มากกว่า 60 ปี" | null>(null);
    const agearr = ["น้อยกว่า 12 ปี" , "12 - 17 ปี" , "18 - 25 ปี" , "26 - 30 ปี" , "30 - 40 ปี" , "41 - 50 ปี" , "50 - 60 ปี" , "มากกว่า 60 ปี"]
    return(
        <Box w="100%" d="flex" flexDir="column">
        <Box w="100%" d="flex" flexDir="column" alignItems="center" >
           <Heading>อายุของคุณ</Heading>
           <Box d="flex" w="fit-content" flexWrap="wrap" mt={10} direction={["column","column","row","row"]}>
               {agearr.map((item:any)=>
               <Button size="lg" w={["100%","100%","fit-content","fit-content"]} key={item} colorScheme={temage === item ? "orange" : "gray"} m={5} ml={[0,0,5,5]} mr={[0,0,5,5]} onClick={()=>settemage(item)} >{item}</Button>)}
           </Box>
       </Box>
       <Button ml="auto" colorScheme="green" mt={20} size="lg" isDisabled={temage ? false : true} onClick={()=>setage(temage)} mb={10}> Next </Button>

   </Box>
    )
}
export default AgeSelect