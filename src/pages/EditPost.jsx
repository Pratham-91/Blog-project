import React, { useEffect, useState } from 'react'
import { Container, PostForm, Button } from '../components/Index'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      setLoading(true)
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
          setNotFound(false)
        } else {
          setNotFound(true)
        }
        setLoading(false)
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  const handleDelete = async () => {
    if (!post) return
    if (!window.confirm("Are you sure you want to delete this post?")) return
    setDeleting(true)
    try {
      await appwriteService.deletePost(post.$id)
      navigate('/all-posts')
    } catch (err) {
      alert("Failed to delete post.")
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg text-gray-500 animate-pulse">Loading post...</div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded-xl shadow">
          Post not found.
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-[80vh]">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Edit Post</h1>
          <PostForm post={post} />
          <div className="flex justify-end mt-8 gap-4">
            <Button
              bgColor="bg-gradient-to-r from-red-500 to-red-700"
              onClick={handleDelete}
              disabled={deleting}
              className="min-w-[120px]"
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
            <Button
              bgColor="bg-gradient-to-r from-blue-500 to-blue-700"
              onClick={() => navigate(`/post/${post.$id}`)}
              className="min-w-[120px]"
            >
              View Post
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EditPost