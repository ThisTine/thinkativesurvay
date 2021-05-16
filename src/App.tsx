import { Box, Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import FormSelect from './components/FormSelect';
import PreEnter from './components/PreEnter';

function App() {
  const [sex, setsex] = useState<null|"ชาย"|"หญิง"|string>(null);
  const [age, setage] = useState<null|"น้อยกว่า 12 ปี"|"12 - 17 ปี"|"18 - 25 ปี"|"26 - 30 ปี"|"30 - 40 ปี"|"41 - 50 ปี"|"50 - 60 ปี"|"มากกว่า 60 ปี">(null);

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
