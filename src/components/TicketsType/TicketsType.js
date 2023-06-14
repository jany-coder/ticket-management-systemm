import React, { useState } from 'react';
import Ticket from './Ticket';
import TicketModal from '../TicketModal/TicketModal';

const TicketsType = () => {
    const [showModal, setShowModal] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [ticketType, setTicketType] = useState('');
    const [ticketDescription, setTicketDescription] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newTicket = { ticketType, ticketDescription };
        setTickets([...tickets, newTicket]);
        setTicketType('');
        setTicketDescription('');
        setShowModal(false);
    };

    const handleEditTicket = (editedTicket) => {
        const index = tickets.findIndex((ticket) => ticket.id === editedTicket.id);
        if (index !== -1) {
            const updatedTickets = [...tickets];
            updatedTickets[index] = editedTicket;
            setTickets(updatedTickets);
        }
    };

    const handleDeleteTicket = (ticket) => {
        setTickets((prevTickets) => prevTickets.filter((index) => index !== ticket));
    };



    return (
        <div className='px-10 text-black ms-64'>
            <div className='flex justify-end py-5'>
                <button
                    type='button'
                    onClick={() => setShowModal(true)}
                    className='bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-sky-600 ease-in'
                >
                    Add Ticket Type
                </button>
            </div>
            <div style={{ height: '70vh' }} className="overflow-y-auto rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-5 font-medium text-gray-900">Ticket Type</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {tickets.map((ticket, index) => (
                            <Ticket key={index} ticket={ticket} handleEditTicket={handleEditTicket} handleDeleteTicket={handleDeleteTicket} />
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <TicketModal handleFormSubmit={handleFormSubmit} setShowModal={setShowModal} setTicketType={setTicketType} ticketType={ticketType} ticketDescription={ticketDescription} setTicketDescription={setTicketDescription}></TicketModal>
            )}
        </div>
    );
};

export default TicketsType;
