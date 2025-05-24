# MegaBlog

A modern, full-featured blogging platform built with React, Appwrite, Redux, and Tailwind CSS.

---

## 🚀 Features

- User authentication (signup, login, logout)
- Create, edit, and delete blog posts
- Rich text editor for writing posts
- Upload and display featured images
- Responsive, modern UI with Tailwind CSS
- Protected routes for authenticated users
- View all posts and individual post pages
- Clean, reusable component structure

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Redux, Tailwind CSS
- **Backend:** [Appwrite](https://appwrite.io/) (Database, Auth, Storage)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/megablog.git
   cd megablog
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure Appwrite:**
   - Create a [free Appwrite instance](https://appwrite.io/).
   - Create a project, database, collection (for posts), and storage bucket (for images).
   - Set up authentication (email/password).
   - Copy your Appwrite endpoint, project ID, database ID, collection ID, and bucket ID.
   - Create a `.env` file in the root and add:
     ```
     VITE_APPWRITE_URL=your_appwrite_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     VITE_APPWRITE_DATABASE_ID=your_database_id
     VITE_APPWRITE_COLLECTION_ID=your_collection_id
     VITE_APPWRITE_BUCKET_ID=your_bucket_id
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 📝 Usage

- **Sign up** for a new account or log in with existing credentials.
- **Create a new post** using the "Add Post" button (must be logged in).
- **Edit or delete** your posts from the post page.
- **View all posts** on the "All Posts" page.
- **Logout** using the button in the header.

---

## 🖼️ Screenshots

> Add screenshots of your app here for a better showcase!

---

## 💡 Customization

- Update the logo in `src/components/Logo.jsx` for your brand.
- Change theme colors in `tailwind.config.js` or component classes.
- Extend the post schema in Appwrite for more features (tags, categories, etc).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

## 🙏 Credits

- [Appwrite](https://appwrite.io/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy blogging!**