import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../../components/Table"
import type { FC } from "react";

interface UserListProps {
    onAddUser: () => void;
}

const UserList: FC<UserListProps> = ({ onAddUser }) => {
    const users = [
        {
            user_id: 1,
            first_name: 'John',
            middle_name: 'Doe',
            last_name: 'Smith',
            suffix_name: 'Jr.',
            gender: 'Male',
            address: 'Roxas City',
            action: (
              <>
              <div className="flex gap-4">
                <button type="button" className="text-green-600 font-medium cursor-pointer hover:underline">Edit</button>
                <button type="button" className="text-red-600 font-medium cursor-pointer hover:underline">Delete</button>


              </div>
              </>
            )

        },
        {
            user_id: 2,
            first_name: 'Jane',
            middle_name: 'U.',
            last_name: 'Doe',
            suffix_name: 'Jr.',
            gender: 'Female',
            address: 'Iloilo City',
            action: (
              <>
              <div className="flex gap-4">
                <button type="button" className="text-green-600 font-medium cursor-pointer hover:underline">Edit</button>
                <button type="button" className="text-red-600 font-medium cursor-pointer hover:underline">Delete</button>


              </div>
              </>
            )

        },
        {
            user_id: 3,
            first_name: 'Juan',
            middle_name: 'D.',
            last_name: 'Dela Cruz',
            suffix_name: '',
            gender: 'Prefer not to say',
            address: 'Negros City',
            action: (
              <>
              <div className="flex gap-4">
                <button type="button" className="text-green-600 font-medium cursor-pointer  hover:underline">Edit</button>
                <button type="button" className="text-red-600 font-medium cursor-pointer hover:underline">Delete</button>

              </div>
              </>
            )
        }
    ]
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
          <Table>
            <caption className="mb-4">
                <div className="border-b border-gray-100">
                    <div className="p-4 flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-2 px-4 rounded" onClick={onAddUser}>
                            Add User
                        </button>
                    </div>
                </div>
            </caption>
            <TableHeader className="border-b border-gray-200 bg-blue-600 text-white sticky top-0 text-xs">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  First Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Middle Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Last Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Suffix Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Gender
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-gray-500 text-sm">
                {users.map((user, index) => (
                    <TableRow className="hover:bg-gray-100" key={index}>
                        <TableCell className="px-4 py-3 text-center">
                            {user.user_id}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.first_name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.middle_name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.last_name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.suffix_name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.gender}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                            {user.address}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-start">
                          {user.action}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default UserList