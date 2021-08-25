
import './App.css';
import { AddTransction } from './Components/AddTransction';
import { Balance } from './Components/Balance'


import { Header } from './Components/Header'
import { Income_Expences } from './Components/Income_Expences';
import { TransactionList } from './Components/TransactionList';
import { GlobalProvide } from './Context/GlobalState';

function App() {
  return (    
<GlobalProvide>

      <Header />
      <div className="container">
        <Balance />
        <Income_Expences />
        <TransactionList />
        <AddTransction />
      </div >
</GlobalProvide>
  );
}


  


export default App
