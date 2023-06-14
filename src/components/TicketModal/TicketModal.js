import React from 'react';

const TicketModal = ({ handleFormSubmit, setShowModal, setTicketType, ticketType, ticketDescription, setTicketDescription }) => {

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-2xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-2xl font-medium text-sky-600">
                                Add Ticket Type
                            </h3>
                            <button
                                className="p-1 ml-auto border-0 text-red-700  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="text-red-500">
                                    <i class="fa-solid fa-xmark"></i>
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <div className='flex gap-2 items-center'>
                                <label className='flex-none' htmlFor="ticketType">Ticket Type:</label>
                                <input
                                    required
                                    autoComplete='off'
                                    type="text"
                                    id="ticketType"
                                    value={ticketType}
                                    onChange={(e) => setTicketType(e.target.value)}
                                    name="ticket"
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />
                            </div>
                            <div className='flex gap-2 items-start'>
                                <label className='flex-none' htmlFor="ticketDescription">Description:</label>
                                <textarea
                                    required
                                    id="ticketDescription"
                                    value={ticketDescription}
                                    onChange={(e) => setTicketDescription(e.target.value)}
                                    className='w-full mt-4 p-1 border border-slate-400 focus:outline-none rounded-md'
                                    rows="6"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-sky-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit">
                                Add Ticket Type
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
    );
};

export default TicketModal;