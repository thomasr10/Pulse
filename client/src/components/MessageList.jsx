import { Search, UserRoundPlus } from 'lucide-react';
import ServerButton from './ServerButton';

export default function MessageList () {

    return (
        <section className='message-list-component mt-16'>
            <h2>Messages</h2>
            <div className="search-bar-container mt-16">
                <input type="text" placeholder="Rechercher une conversation"/>
                <Search className='search-icon icon'/>
                <UserRoundPlus className='add-user-icon icon'/>
            </div>
            <ServerButton />
        </section>
        
    )
}