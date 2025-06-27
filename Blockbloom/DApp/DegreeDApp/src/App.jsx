import { useState } from 'react'
import { BrowserProvider } from 'ethers'

function App() {
  
  const provider = new BrowserProvider(window.ethereum)

  const connectMetamask = async () => {
    const signer = await provider.getSigner()

  }
  return (
    <>
      <h1>Degree DApp</h1>
      <button onClick={connectMetamask}>Connect to Metamask</button>
    </>
  )
}

export default App
