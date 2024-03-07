import Input from "./components/Input";

import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import React ,{ useState } from 'react';
import styled from 'styled-components';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const[ operation, setOperation]=useState('')
  const [arrayObjetos, setArrayObjetos] = useState([]);
  const [total, settotal] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
 

  const [formData, setFormData] = useState({
    nome: '',
    idade: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Cria um novo objeto com os dados do formulário
    const novoObjeto = {
      nome: formData.nome,
      idade: formData.idade
    };

    // Adiciona o novo objeto ao array
    setArrayObjetos([...arrayObjetos, novoObjeto]);

    // Limpa o formulário
    setFormData({ nome: '', idade: '' });
  };
  


  const handleOnClear = () =>{
      setCurrentNumber('');
      setFirstNumber('');
      setOperation('');
      setArrayObjetos([]);
      settotal('0');
  }
  const handleAddNumber = (num) =>{
      setCurrentNumber(prev =>`${prev ==='' ? '':prev}${num}`)
  }   


  const handleSumNumbers = (num) =>{
  
    // if (firstNumber === ''){
      
      setFirstNumber(String(currentNumber));
       

      const novoObjeto = {
        num: String(currentNumber),
        opr: '+',
       };
      
      setArrayObjetos([...arrayObjetos, novoObjeto]);
      
      setCurrentNumber('');  
    
       console.log(arrayObjetos)
    // }else{
    //   const sum = Number(firstNumber)+ Number(currentNumber);
      
    //   setCurrentNumber(String(sum)); 

    //   const novoObjeto = {
    //     nome: String(currentNumber),
    //     idade: operation
    //   };
    //   setArrayObjetos([...arrayObjetos, novoObjeto]);
    //   // setFirstNumber('');

    //   // setInputMostre(prevState => ({...prevState, currentNumber}));


      
    //   console.log(arrayObjetos)
    // }
  }


  const handleOperation = (op) => {
    console.log(op)
    
    setOperation(op)

    switch(op){
      case '+':
        handleSumNumbers();
        break;
        default:
          break; 
      }
    
    
    
  };


  const handleMinusNumbers = (num) =>{
    if (firstNumber === ''){
      setFirstNumber(String(currentNumber));
      // setInputMostre(String(currentNumber)+'-') 
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
      // setInputMostre(String(currentNumber)+'/')
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
      // setInputMostre(String(currentNumber)+'x') 
      setCurrentNumber(''); 
      setOperation('x');
    }else{
      const sum = Number(firstNumber)* Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }

   const handleEquals = () =>{

   for(var i =0; i>=arrayObjetos.length;i++){
    console.log(i)
   }
    
      switch (operation){
        case '+':
          
          handleSumNumbers();
          
          const sum = Number(firstNumber)+ Number(currentNumber);
      
          setCurrentNumber(String(sum)); 

          const novoObjeto = {
            nome: String(currentNumber),
            idade: operation
          };
          setArrayObjetos([...arrayObjetos, novoObjeto]);
          
          break;
        case '-':
            handleMinusNumbers();
            // setInputMostre('')
            break;
        case 'x':
            handleMultNumbers();
            // setInputMostre('')
            break;
        case '/':
           handleDivNumbers();
          //  setInputMostre('')
            break;   
        default:
          break; 
      }
    


  }

  return (
    <Container>
      <Content>
      <Input value={arrayObjetos}/>
      <Input value={currentNumber }/>
   

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
      <Button label="+" onClick={() => handleOperation("+")}/>
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
