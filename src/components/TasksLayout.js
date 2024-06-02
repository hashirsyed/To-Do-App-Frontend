import { Badge, Dropdown } from "flowbite-react";
import {
  HighPriorityIcon,
  LowPriorityIcon,
  MediumPriorityIcon,
  TickIcon,
  TrashIcon,
} from "./Icons";
import { useContext, useReducer, useState } from "react";
import AuthContext from "../store/auth";
import axios from "axios";
import config from "../config";
import { OptionsTaskIcon } from "./Icons";

const priorities = [
  {
    label: "Low",
    value: "Low",
    icon: <LowPriorityIcon color={"gray"} className={"mr-4"} size={14} />,
  },
  {
    label: "Medium",
    value: "Medium",
    icon: <MediumPriorityIcon color={"gray"} className={"mr-4"} size={14} />,
  },
  {
    label: "High",
    value: "High",
    icon: <HighPriorityIcon color={"gray"} className={"mr-4"} size={14} />,
  },
];
const statuses = [
  {
    label: "Todo",
    value: "Todo",
  },
  {
    label: "In Progress",
    value: "In Progress",
  },
  {
    label: "Completed",
    value: "Completed",
  },
  {
    label: "Cancelled",
    value: "Cancelled",
  },
];
const options = [
  {
    label: "Delete",
    value: "Delete",
  },
];
const STATUS_BADGE_COLORS = {
  Todo: "indigo",
  "In Progress": "yellow",
  Completed: "success",
  Cancelled: "failure",
};
const PRIORITY_ICONS = {
  Low: <LowPriorityIcon color={"gray"} className="ml-2" />,
  Medium: <MediumPriorityIcon color={"gray"} className="ml-2" />,
  High: <HighPriorityIcon color={"gray"} className="ml-2" />,
};
function TaskLayout({
  title,
  description,
  initialStatus,
  initialPriority,
  refreshTasks,
  id,
}) {
  const [status, setStatus] = useState(initialStatus);
  const [priority, setPriority] = useState(initialPriority);
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const { user, token } = useContext(AuthContext);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [showOptions, setShowOptions] = useState(false);

  const statusHandler = async (newStatus) => {
    try {
      setStatus(newStatus);
      const body = {
        status: newStatus,
      };

      await axios.put(`${config.BASE_URL}/users/${user.id}/tasks/${id}`, body, {
        headers: {
          Authorization: token,
        },
      });

      refreshTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  };
  const priorityHandler = async (newPriority) => {
    try {
      setPriority(newPriority);
      const body = {
        priority: newPriority,
      };

      await axios.put(`${config.BASE_URL}/users/${user.id}/tasks/${id}`, body, {
        headers: {
          Authorization: token,
        },
      });

      refreshTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  };
  const optionHandler = async () => {
    try {
      await axios.delete(`${config.BASE_URL}/users/${user.id}/tasks/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      refreshTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  };
  function handleTitlePress(event) {
    console.log(event);
    if (event.key === "Enter") {
      submitTitleHandler();
    }
    if (event.key === "Escape") {
      cancelTitleHandler();
    }
  }
  function handleDescriptionPress(event) {
    console.log(event);
    if (event.key === "Enter") {
      submitDescriptionHandler();
    }
    if (event.key === "Escape") {
      cancelDescriptionHandler();
    }
  }
  async function submitTitleHandler() {
    try {
      const body = {
        title: titleValue,
      };

      await axios.put(`${config.BASE_URL}/users/${user.id}/tasks/${id}`, body, {
        headers: {
          Authorization: token,
        },
      });
      setEditTitle(false);
      refreshTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  }
  async function submitDescriptionHandler() {
    try {
      const body = {
        description: descriptionValue,
      };

      await axios.put(`${config.BASE_URL}/users/${user.id}/tasks/${id}`, body, {
        headers: {
          Authorization: token,
        },
      });
      setEditDescription(false);
      refreshTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  }
  function cancelTitleHandler() {
    setEditTitle(false);
    refreshTasks();
  }
  function cancelDescriptionHandler() {
    setEditDescription(false);
    refreshTasks();
  }
  return (
    <>
      <div
        className={`mt-4 px-6 ${
          status === "Cancelled"
            ? "bg-red-50"
            : "bg-gray-100" && status === "Completed"
            ? "bg-green-50"
            : "bg-gray-100" && status === "In Progress"
            ? "bg-yellow-50"
            : "bg-gray-100" && status === "Todo"
            ? "bg-indigo-50"
            : "bg-gray-100"
        } px-8 py-4 rounded-md duration-300 hover:`}

      >
        
        <div className="flex justify-between">
        
        <div className={`flex ${editTitle === true ? "items-center" : ""} w-[60%]`}>
          {editTitle === true ? (
            <input
              className="py-1 px-4 w-[50%] bg-transparent mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-primary-color"
              value={titleValue}
              type="text"
              onKeyDown={handleTitlePress}
              onChange={(event) => setTitleValue(event.target.value)}
            />
          ) : (
            <h1
              className="text-black font-bold text-lg"
              onDoubleClick={() => setEditTitle(true)}
            >
              {status === "Cancelled" ? <del>{title}</del> : title}
            </h1>
          )}
        {
            status === "Completed" ? <TickIcon className={"ml-5"}/> : ""
          }
        </div>
          

          <div className="flex items-center w-60 text-left justify-between">
            <p className="font-bold text-sm">Status :</p>
            <Dropdown
              label={
                <Badge color={STATUS_BADGE_COLORS[status]} className="ml-2">
                  {status}
                </Badge>
              }
              arrowIcon={false}
              inline
              className="w-40"
            >
              {statuses.map((status) => (
                <Dropdown.Item
                  className="text-[13px]"
                  key={status.value}
                  onClick={() => statusHandler(status.value)}
                >
                  {status.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <div className="ml-auto">
              <Dropdown
                label={<OptionsTaskIcon />}
                className="w-40"
                arrowIcon={false}
                inline
              >
                {options.map((option) => (
                  <Dropdown.Item
                    className="text-[13px] text-red-500"
                    key={option.value}
                    onClick={() => optionHandler()}
                  >
                    {<TrashIcon color="red" />} {option.label}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {editDescription === true ? (
            <textarea
              className="py-1 px-4 w-[50%] text-[13px] bg-transparent mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-primary-color"              value={descriptionValue}
              type="text"
              onKeyDown={handleDescriptionPress}
              onChange={(event) => setDescriptionValue(event.target.value)}
            />
          ) : (
            <p className="text-[13px] w-[75%]" onDoubleClick={()=> setEditDescription(true)}>
              {status === "Cancelled" ? <del>{description}</del> : description}
            </p>
          )}
          <div className="flex items-center w-60 text-left">
            <p className="font-bold text-sm">Priority :</p>
            <Dropdown label={PRIORITY_ICONS[priority]} arrowIcon={false} inline>
              {priorities.map((priority) => (
                <Dropdown.Item
                  key={priority.value}
                  onClick={() => priorityHandler(priority.value)}
                >
                  {priority.icon}
                  {priority.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskLayout;
