import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Dummy order data
const orders = [
  {
    id: 101,
    customer: "Amit Sharma",
    product: "Engine Oil",
    amount: "₹450",
    status: "Delivered",
    date: "2025-07-08",
  },
  {
    id: 102,
    customer: "Priya Singh",
    product: "Brake Pads",
    amount: "₹320",
    status: "Pending",
    date: "2025-07-07",
  },
  {
    id: 103,
    customer: "Rahul Verma",
    product: "Helmet",
    amount: "₹1200",
    status: "Shipped",
    date: "2025-07-06",
  },
];

const statusColor: Record<string, string> = {
  Delivered: "text-[#10b981]",
  Pending: "text-[#facc15]",
  Shipped: "text-[#60a5fa]",
};

const page = () => {
  return (
    <div className='bg-black w-[84vw] min-h-screen text-white flex items-start justify-end p-[3vw]'>
      <Table className='w-full text-white bg-[#232323] rounded-xl overflow-hidden shadow-lg'>
        <TableCaption className="text-[#FFB900] font-semibold">A list of all orders.</TableCaption>
        <TableHeader>
          <TableRow className="bg-[#181818]">
            <TableHead className="w-[80px] text-[#FFB900] text-base">Order ID</TableHead>
            <TableHead className="text-[#10b981] text-base">Customer</TableHead>
            <TableHead className="text-[#60a5fa] text-base">Product</TableHead>
            <TableHead className="text-[#f472b6] text-base">Amount</TableHead>
            <TableHead className="text-[#facc15] text-base">Status</TableHead>
            <TableHead className="text-[#a78bfa] text-base">Date</TableHead>
            <TableHead className="text-right text-[#FFB900] text-base">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              className="transition-all duration-200 hover:bg-[#2d2d2d] hover:scale-[1.01]"
              style={{
                borderBottom: "1px solid #393939"
              }}
            >
              <TableCell className="font-semibold text-[#FFB900]">{order.id}</TableCell>
              <TableCell className="text-[#10b981]">{order.customer}</TableCell>
              <TableCell className="text-[#60a5fa]">{order.product}</TableCell>
              <TableCell className="text-[#f472b6]">{order.amount}</TableCell>
              <TableCell className={statusColor[order.status] || "text-white"}>{order.status}</TableCell>
              <TableCell className="text-[#a78bfa]">{order.date}</TableCell>
              <TableCell className="text-right">
                <button className="px-3 py-1 rounded bg-[#FFB900] text-black font-bold hover:bg-[#facc15] transition-colors">
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default page