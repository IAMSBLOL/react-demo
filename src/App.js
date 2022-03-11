
import './App.css';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [test, setTest] = useState(1)
  useEffect(() => {
    setTest(1)
    setTest(1)

  }, [])

  console.log(test,'hahahah')
  return (
    <div>
      {test}
      <div onClick={()=>setTest(1)}>12312312CLIKC</div>
    </div>
  )
}

class ClsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '123'
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFormProps')
  //   return {
  //     text: props?.text
  //   }
  // }

  componentDidCatch() {
    console.log('componentDidCatch')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ text: "componentDidMount" })
    this.setState({ text: "123svss" })

  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  getSnapshotBeforeUpdate(prePoprs, prestate) {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }



  render() {
    return (
      <div>
        ClsComponent{this.state.text}
      </div>
    )
  }
}

function App() {
  console.log('app')
  return (
    <div className="App">
      <Test />
      <ClsComponent />
      1
    </div>
  );
}

export default App;
