
const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="bg-slate-100 rounded-lg text-center mt-4 p-6">
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;