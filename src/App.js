import {useState} from 'react'
import Content from './components/Content'
import Chat from './components/Chat'
import UseRefExample from './components/UseRefExample'
import DemoMemo from './components/DemoMemo'
import UseCallBackExample from './components/UseCallBackExample'
import UseMemoExample from './components/UseMemoExample'
import UseReducerExample from './components/UseReducerExample'
import UseReducerPart2 from './components/UseReducerPart2'
import ContextGrandFather from './components/ContextGrandFather'
function App() {
  const [textButton, setTextButton] = useState('hide')

  const handleDisplayContent = () => {
    var text = textButton === 'hide' ? 'show' : 'hide';
    setTextButton(text);
  }

  return (
    <div className="App">
      {/* <button onClick={handleDisplayContent}>{textButton}</button>
      {textButton==='show' || <Content></Content>} */}
      {/* <button onClick={handleDisplayContent}>{textButton}</button>
      {textButton==='show' || <Chat></Chat>} */}
      {/* <UseRefExample></UseRefExample> */}
      {/* <DemoMemo></DemoMemo> */}
      {/* <UseCallBackExample></UseCallBackExample> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <UseReducerPart2 /> */}
      <ContextGrandFather></ContextGrandFather>
    </div>
  );
}

export default App;
