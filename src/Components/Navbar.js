import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    return <nav className = "nav">
        <Link to="/" className = "siteTitle">
            Home 
        </Link>

        <ul>
            {/* uncomment the next line only when you need to test the search page */}
            {/* <CustomLink to = '/search'>Search</CustomLink> */}
            <CustomLink to = '/coursecart'>CourseCart</CustomLink>
            <CustomLink to = '/about'>About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
    <li className={(isActive ? "active" : "")}>
                <Link className="link" to={to} {...props}>
                    {children}
                </Link>
    </li> 
    )
}