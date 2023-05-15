import Logo from '../images/ironhack.png'
import Menu from '../images/menu.png'
import Image from './Image'

const Navbar = () => {

    return (

        <div>

            <nav>

                <Image source={Logo} specificClass="nav" />
                <Image source={Menu} specificClass="nav" />

            </nav>


        </div>

    )
}


export default Navbar