import { useWallet } from "hooks/utils/wallet"
import { memo } from "react"

import { Button } from "components"

import * as utils from "utils"
import { BiLogOut } from "react-icons/bi"
import { useLocation } from "react-router-dom"

const navItems = [
  {
    name: "Lend",
    path: "/lend",
  },
  {
    name: "Borrow",
    path: "/borrow",
  },
  {
    name: "Loans",
    path: "/loans",
  },
  {
    name: "Offers",
    path: "/offers",
  },
]

function Header() {
  const wallet = useWallet()
  const location = useLocation()

  return (
    <header className="text-white flex justify-between jsut0 py-4 px-5">
      <p className="text-xl font-black uppercase">Crypto credit</p>
      <nav className="flex gap-1">
        {navItems.map((item) => (
          <a href={item.path} key={item.path}>
            <Button
              className={[
                location.pathname === item.path ? "bg-slate-400" : null,
              ].join(" ")}>
              {item.name}
            </Button>
          </a>
        ))}
      </nav>

      {wallet.wallet && (
        <div className="flex items-stretch gap-1">
          <Button>
            {utils.format({ type: "wallet", value: wallet.wallet })}
          </Button>
          <Button variant="danger" onClick={wallet.disconnect}>
            <BiLogOut />
          </Button>
        </div>
      )}
      {wallet.wallet === false && (
        <div className="flex items-stretch gap-1">
          <Button onClick={wallet.connect} disabled={wallet.wallet === null}>
            connect
          </Button>
        </div>
      )}
    </header>
  )
}

export default memo(Header)
