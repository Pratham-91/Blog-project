import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transition-transform hover:scale-105">
      <div className="w-full bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
        <div className="w-full flex justify-center mb-4">
          <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
            {featuredImage ? (
              <img
                src={appwriteService.getFilePreview(featuredImage)}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
              />
            ) : (
              <div className="text-gray-400 text-4xl">🖼️</div>
            )}
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-1 truncate w-full">{title}</h2>
        <div className="mt-2 flex justify-center">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
            Read More
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PostCard