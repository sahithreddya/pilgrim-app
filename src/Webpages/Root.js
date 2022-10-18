import { Link, Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <div style={{border: "solid 5px teal"}}>
            <nav>
                <ul>
                    <li>
                        <Link to={`/home`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/articles/1`}>Article 1</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <p style={{color: "teal"}}>This is the root element</p>
        </div>
    )
}