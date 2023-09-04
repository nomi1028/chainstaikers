import React, { useState } from "react";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto max-w-md w-full">
          <div className="px-4 py-8 sm:px-10">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Delete Item
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="mt-4 sm:flex sm:flex-row-reverse">
              <button
                onClick={onDelete}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
              <button
                onClick={onClose}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default DeleteModal;
