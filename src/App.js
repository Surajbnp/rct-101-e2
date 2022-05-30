import React from "react";
import Products from './components/Products';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return <ChakraProvider>
  <div>
    <Products />
  </div>;
    </ChakraProvider>
};

export default App;
