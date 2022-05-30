import React from "react";
import "./styles.css";

import { Button } from '@chakra-ui/react'
const Pagination = () => {

  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0)
  const [todos, setTodos] = useState([]);



  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos?_page=${page}&_limit=${5}`)
      .then((res) => {
        setTodos(res.data);
        setTotal(res.headers["x-total-count"])
      });
  }, [page]);

  return (
    <div className="pagin">
         <Button colorScheme='grey' variant='link'>First</Button>
         <Button colorScheme='grey' variant='link'>Previous</Button>
         <select >
          <option >3</option>
          <option >6</option>
          <option >9</option>
          </select>
          <Button colorScheme='grey' variant='link'>Next</Button>
          <Button colorScheme='grey' variant='link'>Last</Button>
      </div>
  );
};

export default Pagination;
