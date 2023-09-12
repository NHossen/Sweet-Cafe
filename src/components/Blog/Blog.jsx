
const Blog = ({blog,handelBookmarks,handelReadingTime}) => {
    console.log(blog)
    const {title,cover_img,hashtags,author_img,Posted_date,reading_time,bookmark_png}=blog;
    return (
        <div>
            <img className="rounded-lg mt-10 " src={cover_img} alt="" />
            <div className="flex justify-between p-5">
                <div>
                    <img className="w-10 ml-4" src={author_img} alt="" />
                    <div>
                        <p>{Posted_date}</p> 
                    </div>
                   
                </div>
                <div className="flex gap-2">
                     <h1>{reading_time} Minutes</h1>
                     {/* BookMark for add item to Bookmarks */}
                     <button onClick={()=>handelBookmarks(blog)} className="w-6 h-6">
                        <img  src={bookmark_png} alt="" />
                     </button>
                     
                </div>
               
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags}</p>
            <button onClick={()=>handelReadingTime(reading_time)}>
                <a className="underline text-blue-600">Mark as read</a >
            </button>
           
            
        </div>
    );
};

export default Blog;