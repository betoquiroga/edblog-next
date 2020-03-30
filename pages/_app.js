import Header from "../components/sections/Header"

function App({Component, pageProps}) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default App