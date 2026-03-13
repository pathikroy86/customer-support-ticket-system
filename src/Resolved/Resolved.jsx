import React from 'react';

const Resolved = ({ resolved }) => {
    return (
        <div className='space-y-3'>
            {resolved.length === 0 ? (
                <p className='text-gray-500 text-sm'>Select a ticket to add to Task Status</p>
            ) : (
                resolved.map((task) => {
                    const { id, title } = task;
                    return (
                        <div key={id} className='p-3 rounded shadow-sm bg-white space-y-2'>
                            <h3 className='font-medium text-[#001931] text-sm'>{title}</h3>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Resolved;