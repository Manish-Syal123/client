import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./homestyles.css";

const Home = () => {
  const { blogList, setBlogList, loading, setLoading } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const fetchListOfBlogs = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:5000/api/blogs/");

    const res = await response.data;

    if (res && res.blogList && res.blogList.length) {
      setBlogList(res.blogList);
      setLoading(false);
    }
    console.log(res);
  };

  const handleEdit = (getCurrBlog) => {
    console.log(getCurrBlog);
    navigate("/add-blog", { state: { getCurrBlog } });
  };

  const handleDeleteBlog = async (getCurrBlogID) => {
    setLoading(true);
    try {
      const DeleteBlog = await axios.delete(
        `http://localhost:5000/api/blogs/delete/${getCurrBlogID}`
      );

      if (DeleteBlog) {
        fetchListOfBlogs();
        //or can use naviagte(0) to refresh the page
        //navigate(0);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  if (loading) {
    return <h2>Loading Blog-Posts! Please wait for a moment.....</h2>;
  }
  return (
    <div className="wrapper">
      <h1>Blog List</h1>
      <div className="blogList">
        {blogList && blogList.length ? (
          blogList.map((Item) => (
            <div key={Item._id}>
              <p>{Item.title}</p>
              <p>{Item.description}</p>
              <FaEdit
                onClick={() => handleEdit(Item)}
                size={30}
                style={{ cursor: "pointer" }}
              />
              <FaTrash
                onClick={() => handleDeleteBlog(Item._id)}
                size={30}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))
        ) : (
          <h3>No Blogs Added</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
