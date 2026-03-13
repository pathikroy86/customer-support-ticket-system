import React from 'react';

const Ticket = ({ ticket, handleProgress }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    const creationDate = createdAt.substring(0, 10);

    return (
        <div onClick={() => { handleProgress(ticket) }} className='space-y-2 p-2 shadow'>
            <div className='flex justify-between'>
                <h2 className='text-[#001931] text-sm font-medium'>{title}</h2>
                <div>
                    {status === "Open" ? <div className="badge badge-soft badge-success text-xs"><div aria-label="success" className="status status-success"></div> {status}</div> :
                        <div className="badge badge-soft badge-warning text-xs"><div aria-label="warning" className="status status-warning"></div> {status}</div>}
                </div>
            </div>
            <p className='text-[#627382] text-sm'>{description}</p>
            <div className='flex gap-3'>
                <p className='text-sm'>#{id}</p>
                <p className='text-xs font-semibold'>{priority === "High" ? <span className='text-error'>{priority.toUpperCase()} PRIORITY</span> : priority === "Medium" ? <span className='text-warning'>{priority.toUpperCase()} PRIORITY</span> : <span className='text-success'>{priority.toUpperCase()} PRIORITY</span>}</p>
                <p className='text-[#627382] text-xs'>{customer}</p>
                <p className='text-xs text-[#627382] font-semibold'><i class="fa-regular fa-calendar-days"></i> {creationDate}</p>
            </div>
        </div>
    );
};

export default Ticket;