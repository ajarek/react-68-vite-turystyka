import Title from './components/Title'
import Image from './components/Image'
import Nav from './components/Nav'
import Result from './components/Result'
import Content from './components/Content'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [nrImage, setNrImage] = useState(1)
  return (
    <div className='app'>
      <div class='screen'></div>
      <div class='home-button'></div>
      <div class='camera'></div>
      <Title title=' Domek w górach' />
      <Image
        nr={nrImage}
        scrollLeft={() =>
          setNrImage(nrImage > 1 ? nrImage - 1 : (nrImage) => (nrImage = 3))
        }
        scrollRight={() =>
          setNrImage(
            nrImage > 2 ? (nrImage) => (nrImage = 1) : (nrImage) => nrImage + 1
          )
        }
      />
      <Nav
        add={() => setCounter(counter + 1)}
        reset={() => setCounter(0)}
        save={() => alert('zapisano')}
      />
      <Result quantity={counter} />
      <hr />
      <Content />
    </div>
  )
}

export default App
