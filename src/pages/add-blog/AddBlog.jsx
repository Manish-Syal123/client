import React, { useContext, useEffect } from "react";
import styles from "./AddBlog.module.css"; // Import the CSS module
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AddBlog = () => {
  const { formData, setFormdata, isEdit, setIsEdit } =
    useContext(GlobalContext);
  // console.log(formData);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddBlogToDB = async () => {
    const response = isEdit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.getCurrBlog._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

    const res = await response.data;

    if (res) {
      setIsEdit(false);

      setFormdata({
        title: "",
        description: "",
      });

      navigate("/");
    }
    console.log(res);
  };

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrBlog } = location.state;
      setIsEdit(true);

      setFormdata({
        title: getCurrBlog.title,
        description: getCurrBlog.description,
      });
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <h2>{isEdit ? "Edit a Blog" : "Add a Blog"}</h2>
      <textarea
        type="text"
        className={styles.inputfield}
        placeholder="Enter title"
        value={formData.title}
        onChange={(e) =>
          setFormdata({
            ...formData,
            title: e.target.value,
          })
        }
      />
      <textarea
        type="text"
        className={styles.inputfield}
        placeholder="Enter content"
        value={formData.description}
        onChange={(e) =>
          setFormdata({
            ...formData,
            description: e.target.value,
          })
        }
      />
      <button className={styles.submitbtn} onClick={handleAddBlogToDB}>
        {isEdit ? "Edit Blog" : "Add blog"}
      </button>
    </div>
  );
};

export default AddBlog;
