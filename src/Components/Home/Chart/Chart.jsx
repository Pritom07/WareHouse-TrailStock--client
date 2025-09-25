import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import api from "../../../../API/axiosInstance";

const Chart = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    api.get("/allinventories").then((res) => {
      setInventoryItems(res.data);
    });
  }, []);

  return (
    <section>
      <h1 className="text-center font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-8 font-bebas">
        An Overview of Name Vs Price & Sold Items
      </h1>
      <div
        data-aos="flip-right"
        style={{ width: "100%", overflowX: "auto" }}
        className="mt-4"
      >
        <div style={{ width: inventoryItems.length * 80, height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={inventoryItems}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="price"
                fill="#22c55e"
                activeBar={<Rectangle fill="#8884d8" stroke="blue" />}
              />
              <Bar
                dataKey="sold"
                fill="#ef4444"
                activeBar={<Rectangle fill="#82ca9d" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Chart;
