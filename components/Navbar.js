import Link from 'next/link';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                <div className="container">
                    <a href="#" className={`navbar-brand`}>Bitz Price</a>
                    <div class="collapse navbar-collapse " id="navbarColor01">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link href="/" ><a className={`nav-link`}>Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/about"><a className={`nav-link`}>About</a></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;