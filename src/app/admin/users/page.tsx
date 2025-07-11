import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Dummy user data
const users = [
  {
    id: 1,
    name: 'Amit Sharma',
    email: 'amit.sharma@email.com',
    phone: '+91 9801956844 ,       6203083782',
  },
  {
    id: 2,
    name: 'Priya Singh',
    email: 'priya.singh@email.com',
    phone: '+91 9123456780',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    email: 'rahul.verma@email.com',
    phone: '+91 9988776655',
  },
];

const page = () => {
  return (
    <div className="bg-black w-[84vw] min-h-screen text-white flex items-start justify-end p-[3vw]">
      <Table className="w-full text-white bg-[#232323] rounded-xl overflow-hidden shadow-lg">
        <TableCaption className="text-[#FFB900] font-semibold">
          A list of all registered users.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#181818] hover:bg-[#181616]">
            <TableHead className="w-[80px] text-[#FFB900] text-base">
              S.no
            </TableHead>
            <TableHead className="text-[#10b981] text-base">
              User Name
            </TableHead>
            <TableHead className="text-[#60a5fa] text-base">
              User Email
            </TableHead>
            <TableHead className="text-right text-[#f472b6] text-base">
              User Phone Number
            </TableHead>
            <TableHead className="text-right text-[#facc15] text-base">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow
              key={user.id}
              className="transition-all duration-200 hover:bg-[#2d2d2d] hover:scale-[1.01]"
              style={{
                borderBottom: '1px solid #393939',
              }}
            >
              <TableCell className="font-semibold text-[#FFB900]">
                {idx + 1}
              </TableCell>
              <TableCell className="text-[#10b981]">{user.name}</TableCell>
              <TableCell className="text-[#60a5fa]">{user.email}</TableCell>
              <TableCell className="text-right text-[#f472b6]">
                {user.phone}
              </TableCell>
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
  );
};

export default page;
