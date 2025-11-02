import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {

  const screens = ["home", "entry1", "entry2", "product"] // not used so far
  const categories = [
    "Art",
    "Programming",
    "Photograpy",
    "Fitness",
    "Sports"
  ]


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pics, setPics] = useState([null, null, null]);
  const [price, setPrice] = useState("");

  const [benefits, setBenefits] = useState([]);
  const [addlDetails, setAddlDetails] = useState([]);
  const [category, setCategory] = useState("");

  const [screen, setScreen] = useState("home")
  const [postId, setPostId] = useState(null)



  return (
    <Context.Provider
      value={{
        name,
        setName,
        description,
        setDescription,
        pics,
        setPics,
        price,
        setPrice,

        benefits,
        setBenefits,
        addlDetails,
        setAddlDetails,
        category,
        setCategory,
        screen,
        setScreen,
        postId,
        setPostId,

        categories,
        screens
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
