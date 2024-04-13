import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="fixed bg-white p-8 rounded-lg z-50">
                        <h2 className="text-lg font-bold mb-4">{data.error ? 'Error' : 'Success'}</h2>
                        <p className="mb-4">{data.message}</p>
                        <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;

