import React from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
function RadioExample() {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row' className='radio'>
          <Radio value='male'>Male</Radio>
          <Radio value='female'>Female</Radio>
          <Radio value='unisex'>Unisex</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export default RadioExample;