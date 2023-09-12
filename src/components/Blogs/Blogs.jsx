import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

/*
1. UseState for keep data 
2.UseEffect for load data

*/ 
const Blogs = () => {
    const [Blogs,setBlogs]=useState([])//

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));

    },[])

    return (
        <div className="md:w-2/3">
            <h1>Blogs: {Blogs.length}</h1>
            <Blog />
        </div>
    );
};

export default Blogs;