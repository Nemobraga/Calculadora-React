import Input from "./components/Input";

import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const[ operation, setOperation]=useState('')
  const [inputmostre, setInputMostre] = useState('');
  const [total, settotal] = useState('');
  const [firstNumber, setFirstNumber] = useState('');

  const handleOnClear = () =>{
      setCurrentNumber('');
      setFirstNumber('');
      setOperation('');
      setInputMostre('');
      settotal('0');
  }
  const handleAddNumber = (num) =>{
      setCurrentNumber(prev =>`${prev ==='' ? '':prev}${num}`)
  }   

  const handleSumNumbers = (num) =>{
    if (firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setInputMostre(String(currentNumber)+'+')
      setCurrentNumber('');  
      setOperation('+');
    }else{
      const sum = Number(firstNumber)+ Number(currentNumber);
      setCurrentNumber(String(sum)); 
      setFirstNumber('');
    }
  }

  const handleMinusNumbers = (num) =>{
    if (firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setInputMostre(String(currentNumber)+'-') 
      setCurrentNumber(''); 
      setOperation('-');
    }else{
      const sum = Number(firstNumber)- Number(currentNumber);
      setCurrentNumber(String(sum)); 
      setFirstNumber('');
    }
  }

  const handleDivNumbers = (num) =>{
    if (firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setInputMostre(String(currentNumber)+'/')
      setCurrentNumber('');  
      setOperation('/');
    }else{
      const sum = Number(firstNumber)/ Number(currentNumber);
      setCurrentNumber(String(sum)); 
      setFirstNumber('');
    }
  }

  const handleMultNumbers = (num) =>{
    if (firstNumber === ''){
      setFirstNumber(Number(currentNumber));
      setInputMostre(String(currentNumber)+'x') 
      setCurrentNumber(''); 
      setOperation('x');
    }else{
      const sum = Number(firstNumber)* Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }



   const handleEquals = () =>{

    if(firstNumber !== '' && operation != '' && currentNumber != '' ){
      switch (operation){
        case '+':
          handleSumNumbers();
          setInputMostre('')
          break;
        case '-':
            handleMinusNumbers();
            setInputMostre('')
            break;
        case 'x':
            handleMultNumbers();
            setInputMostre('')
            break;
        case '/':
           handleDivNumbers();
           setInputMostre('')
            break;   
        default:
          break; 
      }
    }


  }

  return (
    <Container>
      <Content>
      <Input value={inputmostre + currentNumber }/>
 
   

      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="-" onClick={handleMinusNumbers}/>
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
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      </Row>

      <Row>
      <Button label="x" onClick={ handleMultNumbers}/>
      <Button label="/" onClick={handleDivNumbers}/>
      <Button label="c" onClick={handleOnClear}/>
      <Button label="." onClick={() => handleAddNumber('.')}/>
      </Row>
      <Row>
      <Button label="=" style="background-color:#74ad5e; " onClick={handleEquals}/>
      </Row>
      </Content>
      
    </Container>
  );
}

export default App;
