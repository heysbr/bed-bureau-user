"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "1", beds: 32 },
  { day: "2", beds: 22 },
  { day: "3", beds: 18 },
  { day: "4", beds: 9 },
  { day: "5", beds: 21 },
  { day: "6", beds: 30 },
  { day: "7", beds: 45 },
  { day: "8", beds: 17 },
  { day: "9", beds: 34 },
  { day: "10", beds: 13 },
  { day: "11", beds: 32 },
  { day: "12", beds: 22 },
  { day: "13", beds: 18 },
  { day: "14", beds: 9 },
  { day: "15", beds: 21 },
  { day: "16", beds: 30 },
  { day: "17", beds: 45 },
  { day: "18", beds: 17 },
  { day: "19", beds: 34 },
  { day: "20", beds: 13 },
  { day: "21", beds: 32 },
  { day: "22", beds: 22 },
  { day: "23", beds: 18 },
  { day: "24", beds: 9 },
  { day: "25", beds: 21 },
  { day: "26", beds: 30 },
  { day: "27", beds: 45 },
  { day: "28", beds: 17 },
  { day: "29", beds: 34 },
  { day: "30", beds: 13 },
  { day: "31", beds: 26 },
];

export default function AnalyticsCard() {
  return (
    <Card className="p-6 border-0 shadow-[0px_4px_15px_0px_#DFE5F0]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">Analytics</CardTitle>
          <CardDescription>01/10/2023 - 31/10/2023</CardDescription>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 mt-4 sm:mt-0">
          <Select defaultValue="beds">
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beds">Number of Beds Available</SelectItem>
              <SelectItem value="patients">Number of Patients</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="october">
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="october">October 2023</SelectItem>
              <SelectItem value="november">November 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <CardContent className="mt-6">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E5E5"
              />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="#666"
              />
              <YAxis
                tickLine={false}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                axisLine={false}
                tickMargin={8}
                stroke="#666"
                label={{
                  value: "Number of Beds Available",
                  angle: -90,
                  dx: -4,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fill: "#666" },
                }}
              />
              <Tooltip cursor={{ fill: "rgba(107,33,168,0.1)" }} />
              <Bar
                dataKey="beds"
                fill="#6B21A8"
                radius={[6, 6, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
