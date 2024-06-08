import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth";
import { DashboardLayout } from "../components/DashboardLayout";
import { Modal } from "flowbite-react";
import { EditPencilIcon } from "../components/Icons";
import { CustomFileSelect, ThemeButton } from "../components/CustomForm";
import axios from "axios";
import config from "../config";

function EditProfile() {
  const { user , token , setUser } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [editName, setEditName] = useState(false);
  const [nameValue, setNameValue] = useState(user.name);
  const [image, setImage] = useState();
  const [imageDisplay , setImageDisplay] = useState()

  function handleImageChange (event) {
    setImage(event.target.files[0]);
    setImageDisplay(URL.createObjectURL(event.target.files[0]))
  }
  

  async function getUserProfile() {
    try {
      const headers = {
        Authorization: token,
      };
      const url = `${config.BASE_URL}/users/${user.id}`;
      const response = await axios.get(url, { headers });
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      setNameValue(response.data.name);
    } catch (error) {
      console.error("Error fetching user:", error);
    } 
  }

  function onCloseModal() {
    setOpenModal(false);
    setImageDisplay(null)
  }
  function handleNamePress(event) {
    console.log(event);
    if (event.key === "Enter") {
      submitNameHandler();
    }
    if (event.key === "Escape") {
      cancelNameHandler();
    }
  }
  async function submitNameHandler() {

    try {
      const formData = new FormData();
    formData.append('name', nameValue);

      await axios.put(`${config.BASE_URL}/users/${user.id}`, formData, {
        headers: {
          Authorization: token,
        },
      });
      setEditName(false);
      getUserProfile();
      
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  function cancelNameHandler() {
    setEditName(false);
    getUserProfile();
  }
  async function imageSubmitHandler (){
    const formData = new FormData();
    formData.append('avatar', image);
    try {

      await axios.put(`${config.BASE_URL}/users/${user.id}`, formData, {
        headers: {
          Authorization: token,
        },
      });
      onCloseModal();
      getUserProfile();
      
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <>
      <DashboardLayout heading={"Edit Profile"}>
        <div className="flex items-center">
          <div className="relative">
            <img
              src={"https://www.svgrepo.com/show/452030/avatar-default.svg" || `${config.BASE_URL_PUBLIC}${user.profileUrl}`}
              className="w-40 h-40 rounded-full"
            />
            <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
              <Modal.Header className="m-3">Edit Profile Picture</Modal.Header>
              <Modal.Body>
                <div>
                  <img src={imageDisplay ? imageDisplay : `${config.BASE_URL_PUBLIC}${user.profileUrl}` } className="w-32 h-32 rounded-full ml-auto mr-auto"/>
                </div>
                <CustomFileSelect onChange={handleImageChange} selectName={"avatar"}/>
                <ThemeButton className={"w-full"} onClick={imageSubmitHandler}>Add</ThemeButton>
              </Modal.Body>
            </Modal> <div
              className={`absolute top-28 right-0 m-4 p-1 rounded-full flex items-center justify-center transition-opacity duration-300 bg-primary-color`}
            >
              <EditPencilIcon
                className="text-white w-6 h-6"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-black font-bold text-4xl">{user.name} Details</h1>
          </div>
        </div>
        <div className="flex mt-16 justify-between">
          <div className="flex items-center w-full">
        <h3 className="text-black font-semibold text-xl">Name :</h3>
        {editName === true ? (
          <input
          className="py-1 px-4 w-[30%] bg-transparent ml-2 mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-primary-color"
          value={nameValue}
          type="text"
          onKeyDown={handleNamePress}
          onChange={(event) => setNameValue(event.target.value)}
        />
        ):
        ( 
        <h3 className="text-black ml-2 text-xl" onDoubleClick={()=>setEditName(true)}>{user.name}</h3>
        )
        }
        </div>
            </div>
        <div className="flex items-center mt-8">
        <h3 className="text-black font-semibold text-xl">Email :</h3>
        <h3 className="text-black ml-2 text-xl">{user.email}</h3>
            </div>
      </DashboardLayout>
    </>
  );
}

export default EditProfile;
