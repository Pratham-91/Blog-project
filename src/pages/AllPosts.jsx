import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components/Index'

function AllPosts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    appwriteService.getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
      .catch(() => {
        setError("Failed to load posts.")
      })
  }, [])

  return (
    <div className="w-full py-10 min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-200">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 drop-shadow">All Posts</h1>
        {error && (
          <div className="w-full text-center text-red-500 mb-6 font-semibold">
            {error}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {posts.length === 0 && !error && (
            <div className="text-gray-400 text-lg font-medium py-12">No posts found.</div>
          )}
          {posts.map((post) => (
            <div key={post.$id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts