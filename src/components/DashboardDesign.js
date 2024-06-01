import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AuthContext from "../store/auth";
import config from "../config";
import axios from "axios";
import colors from 'tailwindcss/colors';

function DashboardDesign() {
  const { token, user } = useContext(AuthContext);
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

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
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="mt-20">
        <Chart
          type="donut"
          width={600}
          height={600}
          series={series}
          options={{
            labels: labels,
            colors: [colors.indigo[400], colors.orange[300], colors.green[400], colors.red[400]],
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
            legend: {
              show: true,
              position: "bottom",
            },
          }}
        />
      </div>
    </>
  );
}

export default DashboardDesign;
