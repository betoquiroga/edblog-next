import Header from "../components/sections/Header"
import "../styles/styles.scss"

function App({Component, pageProps}) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default App