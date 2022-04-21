import MoleContainer from './MoleContainer'
import { useState } from 'react';


function App() {
    const [score, setScore] = useState(0)
    


    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(<MoleContainer key={i} setScore={setScore} score={score}/>)
        }
        return (


            <div>{hills}</div>

            

            )
    }




    return (
        <div className="App">
            <div align="center">
            <h1>Ryan's React-a-Mole</h1>
            <h1>Score {score}</h1>
            {createMoleHill()}
            </div>
        </div>
  );
}

export default App;