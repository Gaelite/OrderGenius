"use client";

import { useState } from 'react';
import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';

export default function ControlledInputForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Input value:', inputValue);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="input">Your Input:</FormLabel>
      <Input
        id="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <Button onClick={handleSubmit} mt={4}>
        Submit
      </Button>
    </FormControl>
  );
}

