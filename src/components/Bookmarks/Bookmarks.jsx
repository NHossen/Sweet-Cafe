import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className="md:w-1/3">
            <div className="bg-[#d3cbff] rounded-lg">
               <h1 className="text-center text-2xl my-10 text-[#5c42f3] p-4  ">Spent time on read : {readingTime} min</h1>
            </div>
            <h1 className="text-center font-bold text-2xl">BookMarks Blogs {bookmarks.length}</h1>
            {
                bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;