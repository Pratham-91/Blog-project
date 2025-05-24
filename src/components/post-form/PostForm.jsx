import React, { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '..';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm({ post }) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  });

  // Slug transformation logic
  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    return '';
  }, []);

  // Auto-update slug when title changes
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  // Form submit handler
  const submit = async (data) => {
    setError('');
    setSuccess('');
    try {
      if (post) {
        // Update post
        const file = data.image && data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
        if (file) {
          await appwriteService.deleteFile(post.featuredImage);
        }
        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        if (dbPost) {
          setSuccess('Post updated successfully!');
          navigate(`/post/${dbPost.$id}`);
        } else {
          setError('Failed to update post.');
        }
      } else {
        // Create post
        if (!data.image || !data.image[0]) {
          setError('Image is required.');
          return;
        }
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          const dbPost = await appwriteService.createPost({
            ...data,
            featuredImage: file.$id,
            userId: userData?.$id,
          });
          if (dbPost) {
            setSuccess('Post created successfully!');
            navigate(`/post/${dbPost.$id}`);
          } else {
            setError('Failed to create post.');
          }
        } else {
          setError('Image upload failed.');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('form error ', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
      style={{ backdropFilter: 'blur(2px)' }}
    >
      {/* Error and Success Messages */}
      {error && <div className="w-full text-red-500 mb-4 text-center font-semibold">{error}</div>}
      {success && <div className="w-full text-green-600 mb-4 text-center font-semibold">{success}</div>}

      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title:"
          placeholder="Enter a catchy title"
          className="mb-4"
          {...register('title', { required: true })}
        />
        {errors.title && <div className="text-red-500 mb-2">Title is required</div>}

        <Input
          label="Slug:"
          placeholder="Auto-generated from title"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) => {
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        {errors.slug && <div className="text-red-500 mb-2">Slug is required</div>}

        <div className="mb-4">
          <RTE
            label="Content:"
            name="content"
            control={control}
            defaultValue={getValues('content')}
          />
          {errors.content && <div className="text-red-500 mt-2">Content is required</div>}
        </div>
      </div>

      <div className="w-full md:w-1/3 px-2 flex flex-col items-center">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />
        {errors.image && <div className="text-red-500 mb-2">Image is required</div>}

        {post && post.featuredImage && (
          <div className="w-full mb-4 flex justify-center">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow-md max-h-40 object-contain"
            />
          </div>
        )}

        <Select
          options={['active', 'inactive']}
          label="Status"
          className="mb-4 w-full"
          {...register('status', { required: true })}
        />
        {errors.status && <div className="text-red-500 mb-2">Status is required</div>}

        <Button
          type="submit"
          bgColor={post ? 'bg-green-500' : 'bg-blue-600'}
          className="w-full mt-2 py-2 text-lg font-semibold rounded-xl shadow hover:scale-105 transition-transform"
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}