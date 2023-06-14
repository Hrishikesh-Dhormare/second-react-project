import { useState } from "react";

function AppCounter( ) {

    // let counter = 1;
    let [counter, setCounter] = useState(1);
    let count = () => {
      setCounter(counter + 1);
      // console.log(counter);
      // alert('Like added');
    } 

    let decount = () => {
      setCounter(counter -1);

    }
    return (
      <div className="ms-4">
          <span className="">{counter}</span>
          <input type="button" value="like" className="ms-2 bg-info"  onClick={count} />
          <input type="button" value="dislike" className="ms-2 bg-danger"  onClick={decount}/>
      </div>
    );
  }

  export default AppCounter;