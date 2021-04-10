import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/"><a>HOME</a></Link></li>
                <li><Link href="/about"><a>ABOUT</a></Link></li>
                <li><Link href="/flatfile"><a>FLATFILE</a></Link></li>
                <li><a href="https://github.com/ilovevinylrecs">GITHUB</a></li>
                <li><Link href="/messages"><a>MESSAGES</a></Link></li>
                <li><Link href="/projects"><a>PROJECTS</a></Link></li>
                <li><Link href="/vinyl"><a>VINYL</a></Link></li>
            </ul>

            <style jsx>{`
            ul {
                padding: 2rem 1rem 2rem 0.5rem;
            }
            li {
                display: inline;
                padding: 1.5rem 1rem 2rem 1rem;
            }
            hr {
                width: 60%;
                height: 1px;
                background-color: light grey;
                padding: 0.5rem 0rem 0.5rem 0rem;
            }
            `}</style>

        </div>
    )
}

export default Navbar;