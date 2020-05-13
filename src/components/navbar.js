import React, { useGlobal } from 'reactn';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Loading from '../components/partials/_loading';
import logo from '../assets/images/vla_logo_color.svg';

const NavBar = () => {

    const [nav] = useGlobal('nav');
    // const [logoHeight, setLogoHeight] = useState('60');

    const [isLoading] = useGlobal('isLoading');

    // const listenScrollEvent = event => {
    //     if (window.scrollY < 85) {
    //         return setLogoHeight('60');
    //     } else if (window.scrollY > 80) {
    //         return setLogoHeight('40');
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', listenScrollEvent);
    //     return () => window.removeEventListener('scroll', listenScrollEvent);
    // }, []);

    return (
        <Navbar collapseOnSelect expand='lg' className='nav-bar' sticky='top'>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} height='60' className='d-inline-block align-top vlaLogo' alt='VLA - Volleyball League of America'/>
                    { isLoading &&
                        <div className='loading-animation'>
                            <Loading />
                        </div>
                    } 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>  
                        {
                            nav.map( (n, key) => n.subLinks ? (
                                <NavDropdown alignRight={n.name === 'more'} title={n.name} id='collasible-nav-dropdown' key={key}>
                                    {
                                        n.subLinks.map( (sl, key) => (
                                            <NavDropdown.Item href={sl.linkName} key={key}>{sl.name}</NavDropdown.Item>
                                        ))
                                    }
                                </NavDropdown>
                            ) : (
                                    <Nav.Link href={n.linkName} key={key}>{n.name}</Nav.Link>
                                )
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
        
    )
}
export default NavBar;
