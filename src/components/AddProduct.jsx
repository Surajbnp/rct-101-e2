import React from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import RadioExample from "./Radio"
import "./styles.css";




function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>Add New Product</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <form className="form">
              <label>Title</label>
              <br></br>
              <input type="text" />
              <br></br>
              <label>Catagory</label>
              <br></br>
              <select >
              <option value="shirt"></option>
                <option value="shirt">Shirt</option>
                <option value="pant">Pant</option>
                <option value="t-shirt">T-shirt</option>
              </select>
              <br></br>
               <RadioExample  />
               <br></br>
               <label>Price</label>
              <br></br>
              <input type="number" />
            </form>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={0}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InitialFocus;