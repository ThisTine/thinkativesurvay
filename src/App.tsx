import { Box, Heading } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import FormSelect from './components/FormSelect';
import PreEnter from './components/PreEnter';
import {
  useLocation,
  useHistory
} from "react-router-dom";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function App() {
  let history = useHistory();
  let query = useQuery()
  const [sex, setsex] = useState<null|"ชาย"|"หญิง"|string>(null);
  const [age, setage] = useState<null|"น้อยกว่า 12 ปี"|"12 - 17 ปี"|"18 - 25 ปี"|"26 - 30 ปี"|"30 - 40 ปี"|"41 - 50 ปี"|"50 - 60 ปี"|"มากกว่า 60 ปี">(null);
  useEffect(() => {
    if(query){
    const pramage = query.get("age")
    const pramsex = query.get("gender")
    if(pramage){
    if(pramage === "น้อยกว่า 12 ปี" || pramage === "12 - 17 ปี"|| pramage === "18 - 25 ปี"|| pramage === "26 - 30 ปี"||pramage === "30 - 40 ปี"||pramage === "41 - 50 ปี"||pramage === "50 - 60 ปี"|| pramage === "มากกว่า 60 ปี"){
      setage(pramage)
    }}
    if(pramsex){
      setsex(pramsex)
    }
    if(!pramage&&!pramsex&&sex !== null && age !== null){
      setsex(null)
      setage(null)
    }
  }
    
  }, [query,sex,age])
  useEffect(() => {
    if(sex&&age){
      history.replace(`/?age=${age}&gender=${sex}`)
    }
  }, [sex,age,history])
  return (
    <>
          <Box w="100%" bg="yellow.400" d="flex" justifyContent="center" >
        <Heading>THINKATIVE-</Heading>
      </Box>
    <Box bg="rgb(118, 170, 183)" pb={10} w="100vw" d="flex" justifyContent="center">
      <Box w={["90%","75%","75%","75%"]} >
      {!sex || !age ? <PreEnter age={age} setage={setage} sex={sex} setsex={setsex} /> : null}
      {sex && age ? <FormSelect sex={sex} age={age}/> : null}
      </Box>
    </Box>
    </>
  );
}

export default App;
