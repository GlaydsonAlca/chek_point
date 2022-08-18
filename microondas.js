const  pratos  =  {
    1 : {  nome : 'Pipoca' ,  andamento : 10  } ,
    2 : {  nome : 'Macarrão' ,  andamento : 8  } ,
    3 : {  nome : 'Carne' ,  andamento : 15  } ,
    4 : {  nome : 'Feijão' ,  andamento : 12  } ,
    5 : {  nome : 'Brigadeiro' ,  andamento : 8  } ,

  } ;
  
  function  fazerPrato ( numeroPrato ,  tempo )  {
    const  prato  =  pratos [ numeroPrato ] ;
  
    if  ( ! prato )  {
       console.log ( 'Prato inexistente' ) ;
    }
  
    const  tempoPadrao  =  prato . ritmo ;
  
    if  ( tempo  <  tempoPadrao )  {
      mensagem  =  'Tempo insuficiente' ;
    }  else  if  ( tempo  >  tempoPadrao  *  2  &&  tempo  <=  tempoPadrao  *  3 )  {
      mensagem  =  'A comida queimou' ;
    }  else  if  ( tempo  >  tempoPadrao  *  3 )  {
      mensagem  =  'Kabummm' ;
    }  else {
      mensagem  =  'Prato pronto, bom apetite!!!' ;
    }
  
     console.log ( mensagem ) ;
  }
    
    fazerPrato(1,10)
    fazerPrato(2,8)
    fazerPrato(3,15)
    fazerPrato(4,12)
    fazerPrato(5,8)

    