import React from 'react'

function Right({ generatedEmail }) {
    return (
        <>
            <h2 className="text-xl font-semibold text-white mb-4">
                Generated Cold Email
            </h2>

            <textarea
                className="flex-1 w-full bg-gray-900 text-gray-300 placeholder:text-gray-500 border border-gray-700 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 custom-scrollbar"
                placeholder="Your generated cold email will appear here..."
                value={generatedEmail}
                readOnly
            />
        </>
    )
}

export default Right