import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

/*
1. UseState for keep data 
2.UseEffect for load data

*/ 
const Blogs = ({handelBookmarks,handelReadingTime}) => {
    const [Blogs,setBlogs]=useState([])//

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));

    },[])

    return (
        <div className="md:w-2/3">
            
            {
                Blogs.map(blog => 
                <Blog 
                    key={blog.id}
                    blog={blog}
                    handelBookmarks={handelBookmarks}
                    handelReadingTime={handelReadingTime}
                ></Blog>)
                
            }
        </div>
    );
};

export default Blogs;