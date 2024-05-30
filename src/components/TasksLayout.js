import { Badge } from "flowbite-react";
import { HighPriorityIcon, LowPriorityIcon, MediumPriorityIcon } from "./Icons";

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

function TaskLayout({ title, description, status, priority }) {
  return (
    <>
      <div className="mt-10 px-6">
        <div className="flex justify-between">
          <h1 className="text-black font-black">{title}</h1>
          <div className="flex items-center w-28 text-left">
            <p className="font-black text-sm">Status :</p>
            <Badge color={STATUS_BADGE_COLORS[status]} className="ml-2">
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <p className="">{description}</p>
          <div className="flex items-center w-28 text-left">
            <p className="font-black text-sm">Priority :</p>
            {PRIORITY_ICONS[priority]}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskLayout;
