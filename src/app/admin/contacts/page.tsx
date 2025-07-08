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

// Dummy contact data
const contacts = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91 9876543210",
    date: "2025-07-08",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@email.com",
    phone: "+91 9123456780",
    date: "2025-07-07",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@email.com",
    phone: "+91 9988776655",
    date: "2025-07-06",
  },
];

const page = () => {
  return (
    <div className='Contact_Form_Container bg-black w-screen lg:w-[84vw] min-h-screen text-white flex items-start justify-center p-[3vw]'>
      <div className="w-full md:w-[80%] mt-[2vh]">

      <Table className='w-full  text-white bg-[#232323] rounded-xl overflow-hidden shadow-lg'  >
        <TableCaption className="text-[#FFB900] font-semibold">A list of all contact queries.</TableCaption>
        <TableHeader>
          <TableRow className="bg-[#181818]">
            <TableHead className="w-[80px] text-[#FFB900] text-base">S.no</TableHead>
            <TableHead className="text-[#10b981] text-base">Name</TableHead>
            <TableHead className="text-[#60a5fa] text-base">Email</TableHead>
            <TableHead className="text-[#f472b6] text-base hidden md:block">Phone</TableHead>
            <TableHead className="text-[#a78bfa] text-base">Date</TableHead>
            <TableHead className="text-right text-[#FFB900] text-base">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, idx) => (
            <TableRow
              key={contact.id}
              className="transition-all duration-200 hover:bg-[#2d2d2d] hover:scale-[1.01]"
              style={{
                borderBottom: "1px solid #393939"
              }}
            >
              <TableCell className="font-semibold text-[#FFB900]">{idx + 1}</TableCell>
              <TableCell className="text-[#10b981]">{contact.name}</TableCell>
              <TableCell className="text-[#60a5fa]">{contact.email}</TableCell>
              <TableCell className="text-[#f472b6] hidden md:block">{contact.phone}</TableCell>
              <TableCell className="text-[#a78bfa]">{contact.date}</TableCell>
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
    </div>
  )
}

export default page