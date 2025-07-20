import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <header className="px-4 py-3 bg-blue-600 text-white">
        <div className="flex items-center justify-between">
            <NavLink to='/'>React Query</NavLink>
            <ul className="flex items-center justify-between space-x-10">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/trad'>FetchOld</NavLink>
                </li>
                <li>
                    <NavLink to='/rq'>FetchRQ</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}