import React from 'react';

const TaskStatus = ({ progress }) => {
    return (
        <div className='space-y-3'>
            {progress.length === 0 ? (
                <p className='text-gray-500 text-sm'>No tasks selected yet.</p>
            ) : (
                progress.map((task) => {
                    const { id, title } = task;
                    return (
                        <div key={id} className='p-3 rounded shadow-sm bg-white space-y-2'>
                            <h3 className='font-medium text-[#001931] text-sm'>{title}</h3>
                            <button className='bg-[#02A53B] text-white text-sm w-full py-2 rounded'>Complete</button>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default TaskStatus;