import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AuthContext from "../store/auth";
import config from "../config";
import axios from "axios";
import TaskCounterCard from "./TaskCounterCard";

function DashboardDesign() {
  const { token, user } = useContext(AuthContext);
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTasks() {
    try {
      const headers = {
        Authorization: token,
      };
      const url1 = `${config.BASE_URL}/users/${user.id}/dashboard/statusTasks?status=Todo`;
      const url2 = `${config.BASE_URL}/users/${user.id}/dashboard/statusTasks?status=In Progress`;
      const url3 = `${config.BASE_URL}/users/${user.id}/dashboard/statusTasks?status=Completed`;
      const url4 = `${config.BASE_URL}/users/${user.id}/dashboard/statusTasks?status=Cancelled`;
      const allTasks = `${config.BASE_URL}/users/${user.id}/dashboard/allTasks`;
      const [response1, response2, response3, response4, allTaskRes] =
        await Promise.all([
          axios.get(url1, { headers }),
          axios.get(url2, { headers }),
          axios.get(url3, { headers }),
          axios.get(url4, { headers }),
          axios.get(allTasks, { headers }),
        ]);

      const counts = [
        response1.data.count, // Assuming response data contains a count property
        response2.data.count,
        response3.data.count,
        response4.data.count,
      ];
      const totalTasksCount = allTaskRes.data.count;
      const statuses = ["Todo", "In Progress", "Completed", "Cancelled"];

      setSeries(counts);
      setLabels(statuses);
      setAllTasks(totalTasksCount);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="mt-10 grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TaskCounterCard status={"All Tasks"} count={allTasks} color={"bg-primary-color"} text={"white"} loading={loading}/>
        <TaskCounterCard status={"Completed"} count={series[2]} color={"bg-customGreen-color"} text={"white"} loading={loading}/>
        <TaskCounterCard status={"In Progress"} count={series[1]} color={"bg-customYellow-color"} text={"white"} loading={loading}/>
        <TaskCounterCard status={"Todo"} count={series[0]} color={"bg-customBlue-color"} text={"white"} loading={loading}/>
        
      </div>
        <div className="mt-10 flex justify-center items-center">
      <Chart
          type="donut"
          width={600}
          height={600}
          series={series}
          options={{
            labels: labels,
            colors: ["#008FFB", "#FEB019", "#00E396", "#FF4560"],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: "Total",
                      formatter: () => allTasks,
                    },
                  },
                },
              },
            },
            
          }}
          
        />
      </div>
    </>
  );
}

export default DashboardDesign;
