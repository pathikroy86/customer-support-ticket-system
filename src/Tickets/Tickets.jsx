import React, { use } from 'react';
import Ticket from './Ticket/Ticket';

const Tickets = ({ customerPromise, handleProgress }) => {
    const tickets = use(customerPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}
                    handleProgress={handleProgress}
                ></Ticket>)
            }
        </div>
    );
};

export default Tickets;