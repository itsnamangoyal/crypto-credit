import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom"

import { Header } from "components"
import { Token, Lend, Borrow, Offers, Loans } from "pages"
import { useWallet } from "hooks/utils/wallet"
import { useEffect } from "react"

function App() {
  const { connect } = useWallet()

  useEffect(() => {
    connect()
  }, [])

  return (
    <Router>
      <div className="flex flex-col bg-gray-700 min-h-full">
        <Header />
        <div className="p-5 flex-1 flex flex-col">
          <Routes>
            <Route path="borrow" element={<Borrow />} />
            <Route path="asset/:address/:tokenId" element={<Token />} />
            <Route path="offers" element={<Offers />} />
            <Route path="loans" element={<Loans />} />
            <Route path="lend" element={<Lend />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

function Redirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/lend")
  }, [])

  return null
}
