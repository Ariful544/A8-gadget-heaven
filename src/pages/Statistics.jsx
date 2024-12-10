import React from "react";
import Heading from "../components/Heading";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const data = [
    { name: "Price A", uv: 1000, pv: 2400, amt: 1500, price: 1200 },
    { name: "Price B", uv: 2000, pv: 3000, amt: 2500, price: 1500 },
    { name: "Price C", uv: 3000, pv: 9800, amt: 1800, price: 2100 },
    { name: "Price D", uv: 4000, pv: 3908, amt: 2200, price: 1700 },
    { name: "Price E", uv: 2500, pv: 4800, amt: 2100, price: 1600 },
    { name: "Price F", uv: 3500, pv: 3800, amt: 2400, price: 1900 },
    { name: "Price G", uv: 4500, pv: 4300, amt: 2600, price: 2200 },
    { name: "Price H", uv: 5000, pv: 3100, amt: 2800, price: 2300 },
    { name: "Price I", uv: 6000, pv: 2900, amt: 2900, price: 2400 },
    { name: "Price J", uv: 7000, pv: 2600, amt: 3000, price: 2500 },
    { name: "Price K", uv: 8000, pv: 2400, amt: 3100, price: 2600 },
    { name: "Price L", uv: 9000, pv: 2200, amt: 3200, price: 2700 },
    { name: "Price M", uv: 11000, pv: 2000, amt: 3300, price: 2800 },
    { name: "Price N", uv: 12000, pv: 1800, amt: 3400, price: 2900 },
    { name: "Price O", uv: 13000, pv: 1600, amt: 3500, price: 3000 },
    { name: "Price P", uv: 14000, pv: 1400, amt: 3600, price: 3100 },
    { name: "Price Q", uv: 15000, pv: 1200, amt: 3700, price: 3200 },
    { name: "Price R", uv: 16000, pv: 1000, amt: 3800, price: 3300 },
    { name: "Price S", uv: 17000, pv: 800, amt: 3900, price: 3400 },
    { name: "Price T", uv: 18000, pv: 600, amt: 4000, price: 3500 },
    { name: "Price U", uv: 19000, pv: 400, amt: 4100, price: 3600 },
    { name: "price", uv: 20000, pv: 200, amt: 4200, price: 3700 },
  ];
  return (
    <div className="">
      <div className="bg-[#9538E2]  py-12 text-center text-white h-56">
        <h3 className="md:text-5xl text-3xl font-medium">Statistics</h3>
        <p className="text-white mt-6 text-xs md:text-base text-center">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br> the coolest accessories, we have it all!
        </p>

        <div className="flex justify-center mt-20">
          <div style={{ width: "80%", height: 150 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#FF5733"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Price"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
