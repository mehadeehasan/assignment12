"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./Blog.module.scss";
const BlogComponent = () => {
  const [newPost, setNewPost] = useState([]);
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-newest`);
      setNewPost(res.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className={`${styles.blog_container}`}>
      <h1 className={`${styles.blog_heading}`}>Blogs</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {/* Post Start */}
        {newPost.map((post: any) => (
          <div key={post.id} className="card card-compact w-60 bg-base-100 shadow-xl m-5">
            <Link href={`Post/${post.id}`}>
              <figure>
                <img src={post.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.short}</p>
              </div>
            </Link>
          </div>
        ))}
        {/* Post End */}
      </div>
    </div>
  );
};

export default BlogComponent;
