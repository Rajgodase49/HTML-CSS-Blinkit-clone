import './App.css';
import Dairy from './component/Dairy';
import Navbar from './component/Navbar';
import Ordercomponent from './component/Ordercomponent';
import Pancorner from './component/pancorner';
import Product from './component/product';

function App() {
  const ordercomponent=[1,2,3,4,5,6];
  const product=[1,2,3,4,5,6];
  const dairy=[2,2,2,2,2,]
  return (
    <div>
    
      <Navbar/>
      <br/>
      <Pancorner/>
      <br/>
      <div className='d-flex border scoll'>
        {ordercomponent.map((item,)=>{
          return(
            <div className='w-25 border h-25'>
      <Ordercomponent/>

            </div>
          )
        })
        }
      </div>
<br/>

      <div className='d-flex w-100 h-50' >
        {product.map((item,i)=>{
          return(
            <div className='w-25 border h-25' >
            <Product/>

            </div>
          )
        })
        }
      </div>

  <br/>
      <div className='d-flex w-100 h-50' >
      Dairy,bread & eggs
        <div className='d-flex'>
        {dairy.map((item,i)=>{
          return(
            <div className='w-25 border h-25' >
            <Dairy/>

            </div>
          )
        })
        }
        </div>
      </div>

      <br/>
      
    </div>
  );
}

export default App;
