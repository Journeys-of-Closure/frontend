import {NavButton} from './NavButton';
import './NavBar.css'

export function NavBar() {
    return (
        <div id='navbar'>
            <NavButton label='Memorial Waters'/>
            <NavButton label='Light of Giving'/>
            <NavButton label='Help & Support'/>
            <NavButton label='Login'/>
        </div>
    );
}