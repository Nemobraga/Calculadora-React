import Input from "./components/Input";

import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [sinal, setSinal] = useState('');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnClear = () =>{
      setCurrentNumber('0')
      setFirstNumber('0')
  }
  const handleAddNumber = (num) =>{
      setCurrentNumber(prev =>`${prev ==='0' ? '':prev}${num}`)
  }   

  const handleSumNumbers = (num) =>{
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(currentNumber)
      setSinal("+")
      
    }else{
      const sum = Number(firstNumber)+ Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setSinal("
      ")
    }
  }
  return (
    <Container>
      <Content>
      <Input value={currentNumber + sinal}/>
 
      <Row>
      <Button label="x" onClick={() => handleAddNumber('')}/>
      <Button label="/" onClick={() => handleAddNumber('')}/>
      <Button label="C" onClick={handleOnClear}/>
      <Button label="X" onClick={() => handleAddNumber('')}/>
      </Row>

      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="-" onClick={() => handleAddNumber('')}/>
      </Row>

      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="+" onClick={handleSumNumbers}/>
      </Row>

      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
      <Button label="2" onClick={() => handleAddNumber('2')}/>
      <Button label="3" onClick={() => handleAddNumber('3')}/>
      <Button label="=" onClick={() => handleAddNumber('=')}/>
      </Row>

      </Content>
      
    </Container>
  );
}

export default App;
