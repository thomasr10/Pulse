import { Search, UserRoundPlus } from 'lucide-react';
import ServerButton from './ServerButton';
import { authFetch } from '../assets/js/authFetch';
import { useUser } from "../../context/UserContext";
import { useEffect } from 'react';

export default function MessageList() {

    const { user } = useUser();

    useEffect(() => {
        authFetch(`http://localhost:3000/api/user/${user._id}/channel/dm`, {
            method: 'GET',
        });
    }, []);


    return (
        <section className='message-list-component mt-16'>
            <h2>Messages</h2>
            <div className="search-bar-container mt-16">
                <input type="text" placeholder="Rechercher une conversation" />
                <Search className='search-icon icon' />
                <UserRoundPlus className='add-user-icon icon' />
            </div>
            <ServerButton />
        </section>

    )
}