import { Badge } from "flowbite-react";

const STATUS_BADGE_COLORS = {
    Todo: "indigo",
    "In Progress": "yellow",
    Completed: "success",
    Cancelled: "failure"
}


function TaskLayout ({ title , description , status , priority , statusColor , priorityColor }){

return (
    <>
<div className="mt-10 px-6">
    <div className="flex justify-between"> 
    <h1 className="text-black font-black">{title}</h1>
    <div className="flex items-center">  
    <p className="font-black text-sm">Status :</p>
    <Badge color={STATUS_BADGE_COLORS[status]} className="ml-2">{status}</Badge>
    </div>
    </div>
    <div className="flex justify-between mt-2">
    <p className="">{description}</p>
    <div className="flex items-center">
    <p className="font-black text-sm">Priority :</p>
    <Badge color={priorityColor}className="ml-2">{priority}</Badge>
    </div>
      </div> 

      </div>
      
</>
)
}

export default TaskLayout;