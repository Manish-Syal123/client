import React, { useContext } from "react";
import styles from "./AddBlog.module.css"; // Import the CSS module
import { GlobalContext } from "../../context";

const AddBlog = () => {
  const { formData, setFormdata } = useContext(GlobalContext);
  console.log(formData);
  return (
    <div className={styles.container}>
      <h2>Add Blog</h2>
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
      <button className={styles.submitbtn}>Submit</button>
    </div>
  );
};

export default AddBlog;
