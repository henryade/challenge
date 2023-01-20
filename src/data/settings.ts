import { AmountCell, IconCell, StatusCell, UserCell } from "components/TableCustom"

export const links = [
  { 
    name: "My details",
    route: ""
  },
  { 
    name: "Profile",
    route: ""
  },
  { 
    name: "Password",
    route: ""
  },
  { 
    name: "Team",
    route: ""
  },
  { 
    name: "Plan",
    route: ""
  },
  { 
    name: "Billing",
    route: ""
  },
  { 
    name: "Notifications",
    route: ""
  },
  { 
    name: "Integrations",
    route: ""
  },
  { 
    name: "API",
    route: ""
  },
]

export const tableData = {
  body: [
    {
      invoice: 'Basic Plan – Dec 2022',
      amount: 'USD $10.00',
      date: 'Dec 1, 2022',
      status: 'paid',
      users: ["https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg", "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80", "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="],
      icon: 'download',
    },
    {
      invoice: 'Basic Plan – Dec 2022',
      amount: 'USD $10.00',
      date: 'Dec 1, 2022',
      status: 'paid',
      users: ["https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg", "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80", "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="],
      icon: 'download',
    },
   ],
  head: [
     {
       Header: 'Invoice',
       accessor: 'invoice', // accessor is the "key" in the data
     },
     {
       Header: 'Amount',
       accessor: 'amount',
       Cell: AmountCell
     },
     {
       Header: 'Date',
       accessor: 'date',
       Cell: AmountCell
     },
     {
       Header: 'Status',
       accessor: 'status',
       Cell: StatusCell
     },
     {
       Header: 'Users on plan',
       accessor: 'users',
       Cell: UserCell
     },
     {
       Header: '',
       accessor: 'icon',
       Cell: IconCell
     },
   ]
}