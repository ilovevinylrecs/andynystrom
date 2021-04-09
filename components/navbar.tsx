import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/flatfile">FLATFILE</Link></li>
                <li><a href="https://github.com/ilovevinylrecs" target="_blank">GITHUB</a></li>
                <li><Link href="/messages">MESSAGES</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
                <li><Link href="/vinyl">VINYL</Link></li>
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