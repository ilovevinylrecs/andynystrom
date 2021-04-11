import Link from 'next/link'

export const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="main-nav">
                <li><Link href="/"><a>HOME</a></Link></li>
                <li><Link href="/about"><a>ABOUT</a></Link></li>
                <li><Link href="/flatfile"><a>FLATFILE</a></Link></li>
                <li><a href="https://github.com/ilovevinylrecs">GITHUB</a></li>
                <li><Link href="/messages"><a>MESSAGES</a></Link></li>
                <li><Link href="/projects"><a>PROJECTS</a></Link></li>
                <li><Link href="/vinyl"><a>VINYL</a></Link></li>
            </ul>

            <style jsx>{`
            
            @media (max-width: 767px) and (min-width: 320px) /*mobile menu*/ {
                .navbar {
                    text-align: center; 
                }
                .navbar a {
                    float: center;
                    color: silver;
                }
                .main-nav li {
                    list-style-type: none;
                    margin: 1rem 3rem 1rem 0rem;
                }
                .navbar:after {
                    align: center;
                    content: "";
                    display: block;
                    margin: 0 auto; 
                    width: 100px;
                    padding-top: 0.5rem;
                    border-bottom: 1px solid silver;
                }
            }
            @media screen and (min-width: 768px) /*desktop menu*/ {
                .navbar a {
                    float: center;
                    color: silver;
                }
                .main-nav {
                    display: block;
                    text-align: center;
                    padding: 2rem 0rem 0rem 0rem;
                    font-size: 1rem;
                }
                li {
                    display: inline-block;
                    padding: 1.5rem 0rem 0rem 0rem;
                    margin-left: 1rem; 
                    margin-right: 1rem;
                }
                .navbar:after {
                    content: "";
                    display: block;
                    margin: 0 auto; 
                    width: 600px;
                    padding-top: 0.5rem;
                    border-bottom: 1px solid silver;
                }
                
            }
            `}</style>
        </div>
    )
}

export default Navbar;