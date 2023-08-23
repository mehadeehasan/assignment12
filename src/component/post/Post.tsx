"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Post.module.scss";
interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}
const PostComponent = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState<any>([]);
  const convertDateFormat = (date: Date) => {
    const dateObj = new Date(date);

    const humanReadableDate = dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
    return humanReadableDate;
  };
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
      setPostDetails(res.data.postDetails);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className={`${styles.post_container}`}>
      <div className={`${styles.post_grid}`}>
        <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div className="m-3">
            {postDetails === null ? (
              <p className="text-center">No Post Found!</p>
            ) : (
              <>
                <h2 className="text-lg mb-2">
                  {postDetails?.title}
                  <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">{convertDateFormat(postDetails?.created_at)}</span>
                </h2>
                <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{postDetails?.content}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
