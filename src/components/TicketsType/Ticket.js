import React, { useState } from 'react';

const Ticket = ({ ticket, handleEditTicket, handleDeleteTicket }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTicket, setEditedTicket] = useState({
        ticketType: ticket.ticketType,
        ticketDescription: ticket.ticketDescription,
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        handleEditTicket(editedTicket);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTicket((prevTicket) => ({
            ...prevTicket,
            [name]: value,
        }));
    };

    const handleDelete = () => {
        handleDeleteTicket(ticket);
    };
    const handleCancel = () => {
        setShowDeleteModal(false);
    };


    return (
        <tr className="hover:bg-gray-50">
            <td style={{ maxWidth: '10rem' }} className="px-6 py-4">
                {isEditing ? (
                    <input
                        type="text"
                        name="ticketType"
                        value={editedTicket.ticketType}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 bg-white border border-gray-300 rounded"
                    />
                ) : (
                    ticket.ticketType
                )}
            </td>
            <td style={{ maxWidth: '15rem' }} className="px-6 py-4">
                {isEditing ? (
                    <textarea
                        name="ticketDescription"
                        value={editedTicket.ticketDescription}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 bg-white border border-gray-300 rounded"
                        rows="4"
                    />
                ) : (
                    ticket.ticketDescription
                )}
            </td>
            <td style={{ maxWidth: '10rem' }} className="px-6 py-4 text-xl">
                {isEditing ? (
                    <span className='mr-2'>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="text-indigo-500 hover:text-indigo-700"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="text-red-500 hover:text-red-700 ml-2"
                        >
                            Cancel
                        </button>
                    </span>
                ) : (
                    <button onClick={handleEdit} className='me-4 cursor-pointer'>
                        <i className="far fa-pen-to-square"></i>
                    </button>
                )}
                <span className='relative'>
                    <button onClick={() => setShowDeleteModal(true)} className='cursor-pointer'>
                        <i className="far fa-trash-can"></i>
                    </button>
                    {showDeleteModal && (
                        <div className="absolute bottom-6 z-20 right-0 bg-white p-2 w-44 shadow rounded">
                            <h3 className='text-xs font-medium text-red-500'>Are you sure to delete this?</h3>
                            <div className='flex gap-2 mt-2 justify-end'>
                                <button className='text-sm border rounded px-2' onClick={handleCancel}>No</button>
                                <button className='text-sm border rounded px-2 bg-indigo-500 text-white' onClick={handleDelete}>Yes</button>
                            </div>
                        </div>
                    )}
                </span>
            </td>
        </tr>
    );
};

export default Ticket;
