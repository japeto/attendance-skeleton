import {useEffect, useState } from 'react';
import './styles.css';

import {
  Box,
  Flex
} from 'rebass'

import {
  Label,
  Input,
  Select,
  Radio,
  Checkbox,
} from '@rebass/forms'

function StAttendance() {
  return (
    <div className="App">
      <header className="App-header">
      <Box as='form'
        onSubmit={e => e.preventDefault()}
        py={2}>
        <Flex mx={-2} mb={3}>
          <Box width={1} px={1}>
            <Input
              id='code'
              name='code'
              defaultValue=''
            />
          </Box>
        </Flex>
      </Box>
      </header>
    </div>
  );
}

export default StAttendance;
