import { Box, Heading} from "@chakra-ui/layout"
import { FC, SetStateAction} from "react"
import AgeSelect from "./AgeSelect"
import SexSelect from "./SexSelect"
interface props {
    age: string | null,
    setage: React.Dispatch<SetStateAction<"น้อยกว่า 12 ปี" | "12 - 17 ปี" | "18 - 25 ปี" | "26 - 30 ปี" | "30 - 40 ปี" | "41 - 50 ปี" | "50 - 60 ปี" | "มากกว่า 60 ปี" | null>>,
    sex: string | null,
    setsex: React.Dispatch<SetStateAction<string | null>>
}
const PreEnter:FC<props> = ({sex,setsex,age,setage})=>{
    
    if(!sex){
        return <Box mt={20} background="#fafafa" boxShadow="lg" p={10} rounded="xl"><SexSelect setsex={setsex} /></Box>
    }
    if(!age){
        return <Box mt={20} background="#fafafa" boxShadow="lg" p={10} rounded="xl"><AgeSelect setage={setage} /></Box>
    }

    return(
       <Heading>Loading</Heading>
    )
}

export default PreEnter