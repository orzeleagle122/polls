import React from 'react';
import {useDispatch,useSelector} from "./redux/store";
import Navbar from "./components/organisms/Navbar/Navbar";

const App = () => {
  const polls = useSelector(state=>state.polls)
    return (
        <>
            <Navbar/>
        <div>
          {polls.map(poll=><p>{poll.name}</p>)}
        </div>
        </>
    );
};

export default App;