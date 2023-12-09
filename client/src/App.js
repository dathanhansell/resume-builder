import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react"

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from server when component mounts
    fetch('http://localhost:5000/message')
      .then(res => res.json())
      .then(data => setMessage(data.text))
      .catch(e => console.error(e));
  }, []);
    return (
        <Box p="6" bg="tomato" color="white">
            {message}
        </Box>
    );
}

export default App;
