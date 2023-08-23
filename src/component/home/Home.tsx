"use client";
import axios from "axios";
import styles from "./Home.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

const HomeComponent = () => {
  const [newPost, setNewPost] = useState([]);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-newest`);
      setNewPost(res.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 8));
    fetchContacts();
  }, []);
  return (
    <>
      <section
        className="hero h-[90vh] bg-center bg-cover bg-no-repeat"
        style={{
          //backgroundImage: "url(https://img.freepik.com/premium-photo/office-dark-leather-table-with-laptop-red-note-book-coffee-copy-space_67155-1849.jpg?w=900)",
          backgroundImage: "url(https://th.bing.com/th/id/R.e468142fc2bd5e967bbacb53bc1c47db?rik=%2biEkhtffgcu16w&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f4464364%2fimages%2fo-BLOG-facebook.jpg&ehk=Rw7NcjKafs7p4N%2b532nXNEshAy46iP6%2fU%2fqopgTXbX8%3d&risl=&pid=ImgRaw&r=0?w=900)",          
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold capitalize">Welcome to My blog website</h1>
            <Link className="btn btn-info" href="/Blog">
              Go To Blog Page
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className={`${styles.blog_container}`}>
          <h1 className={`${styles.blog_heading}`}>Blogs</h1>
          <div className="flex flex-row flex-wrap justify-center">
            {/* Post Start */}
            {newPost.slice(randomNumber, randomNumber + 3).map((post: any) => (
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
        <Link href={"Blog"}>
          <p className="text-center mb-5 hover:text-blue-500 -mt-10">See More Blogs -&gt;</p>
        </Link>
      </section>
      <section className="footer p-4 md:p-10 bg-base-200 text-base-content flex flex-col md:flex-row justify-between bg-slate-200 text-black">
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-4xl text-green-900 font-bold" style={{ textShadow: "1px 1px black" }}>
            About Blog
          </p>
          <p className="w-full md:w-[90%] mt-4 md:mt-0">
          A blog is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). 
          Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, 
          blogs were usually the work of a single individual, occasionally of a small group, and often covered a single subject or topic. In the 2010s,
          &quot;multi-author blogs&quot; (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, 
          other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. 
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <p className="text-lg md:text-2xl underline underline-offset-8">Contact</p>
          <p>
            Md. Mehadee Hasan <br />
            Oracle Database Developer <br />
            Cell: 01717525405 <br />
            eMail: mehadeehasan@gmail.com
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
