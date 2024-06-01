import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import InputField from "../components/InputField";
import ThemeButton from "../components/ThemeButton";
import { Modal } from "flowbite-react";
import CustomSelect from "../components/CustomSelect";
import config from "../config";
import axios from "axios";
import AuthContext from "../store/auth";
import TaskLayout from "./TasksLayout";
import { BeatLoader } from "react-spinners";
import CustomTextArea from "./CustomTextArea";

const tasks = [];
const initialState = {
  title: "",
  description: "",
  priority: "",
};

function reducerFunction(previousState, action) {
  switch (action.type) {
    case "SET_TITLE":
      return { ...previousState, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...previousState, description: action.payload };
    case "SET_PRIORITY":
      return { ...previousState, priority: action.payload };
    default:
      return previousState;
  }
}

function ToDoForm() {
  const { token, user } = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [loading, setLoading] = useState(true);
  const [tasksArray, setTasksArray] = useState(tasks);
  const [openModal, setOpenModal] = useState(false);
  const [completedTasks,setCompletedTasks] = useState([]);
  const [cancelledTasks,setCancelledTasks] = useState([]);
  const [todoTaks , setTodoTasks] = useState([]);
  const [inProgressTasks,setInProgressTasks] = useState([]);
  const [error, setError] = useState(true);

  function onCloseModal() {
    setOpenModal(false);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const body = {
      title: state.title,
      description: state.description,
      priority: state.priority,
    };

    const headers = {
      Authorization: token,
    };

    const url = `${config.BASE_URL}/users/${user.id}/tasks`;

    try {
      await axios.post(url, body, { headers });
      onCloseModal();
      getTasks();
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  }

  async function getTasks() {
    try {
      const headers = {
        Authorization: token,
      };
      const url = `${config.BASE_URL}/users/${user.id}/tasks`;
      const response = await axios.get(url, { headers });
      setTasksArray(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  }
useEffect(()=>{
  
const completed = tasksArray.filter(task => task.status === "Completed");
const cancelled = tasksArray.filter(task => task.status === "Cancelled");
const todo = tasksArray.filter(task => task.status === "Todo")
const inProgress = tasksArray.filter(task => task.status === "In Progress");

setCompletedTasks(completed);
setCancelledTasks(cancelled);
setTodoTasks(todo);
setInProgressTasks(inProgress);
},[tasksArray])

  useEffect(() => {
    if (user) {
      getTasks();
    }
  }, [user]);
  useEffect(() => {
    if (state.title && state.description >= 8) {
      setError(false);
    } else {
      setError(true);
    }
  }, [state.title, state.description]);

  return (
    <DashboardLayout>
      <h1 className="text-black font-black text-2xl text-center">To Do's</h1>
      <div className="flex items-center">
        <ThemeButton
          onClick={() => setOpenModal(true)}
          className={"ml-6 w-full"}
        >
          Add Task
        </ThemeButton>
        <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={submitHandler}>
              <InputField
                placeholder={"Enter Title"}
                label={"Title"}
                name={"title"}
                type={"text"}
                required={true}
                onChange={(event) => {
                  dispatch({ type: "SET_TITLE", payload: event.target.value });
                  console.log(event.target.value);
                }}
              />
              <CustomTextArea
                placeholder={"Enter Description"}
                label={"Description"}
                name={"description"}
                type={"text"}
                required={true}
                onChange={(event) =>
                  dispatch({
                    type: "SET_DESCRIPTION",
                    payload: event.target.value,
                  })
                }
              />
              <CustomSelect
                selectName={"priority"}
                label={"Priority"}
                required={true}
                onChange={(event) =>
                  dispatch({
                    type: "SET_PRIORITY",
                    payload: event.target.value,
                  })
                }
              >
                <option >Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </CustomSelect>
              <ThemeButton className={"w-full"} type="submit">
                Add
              </ThemeButton>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="mt-20">
      {loading ? (
  <BeatLoader size={20} color="#1E3A8A" className="text-center" />
) : (
  <>
    {todoTaks.length === 0 && inProgressTasks.length === 0 && completedTasks.length === 0 && cancelledTasks.length === 0 ? (
      <div className="text-center">Tasks not found</div>
    ) : (
      <>
        {todoTaks.map((task) => (
          <TaskLayout
            key={task.id}
            title={task.title}
            description={task.description}
            initialStatus={task.status}
            initialPriority={task.priority}
            id={task.id}
            refreshTasks={getTasks}
          />
        ))}
        {inProgressTasks.map((task) => (
          <TaskLayout
            key={task.id}
            title={task.title}
            description={task.description}
            initialStatus={task.status}
            initialPriority={task.priority}
            id={task.id}
            refreshTasks={getTasks}
          />
        ))}
        {completedTasks.map((task) => (
          <TaskLayout
            key={task.id}
            title={task.title}
            description={task.description}
            initialStatus={task.status}
            initialPriority={task.priority}
            id={task.id}
            refreshTasks={getTasks}
          />
        ))}
        {cancelledTasks.map((task) => (
          <TaskLayout
            key={task.id}
            title={task.title}
            description={task.description}
            initialStatus={task.status}
            initialPriority={task.priority}
            id={task.id}
            refreshTasks={getTasks}
          />
        ))}
      </>
    )}
  </>
)}
      </div>
    </DashboardLayout>
  );
}

export default ToDoForm;
