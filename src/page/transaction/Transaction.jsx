import { Table, Tag, Input, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { IoIosArrowDown } from "react-icons/io";
import  Navigate  from "../../Navigate";

const Transaction = () => {
 

  const columns = [
    {
      title: "SL no.",
      dataIndex: "sl",
      key: "sl",
    },
    {
        title: "Date",
        dataIndex: "joiningDate",
        key: "joiningDate",
      },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{text}</span>
        </div>
      ),
    },
   
    {
      title: "Subscription Interval",
      dataIndex: "interval",
      key: "interval",
      render: (interval) => (
        <span className="text-[#D17C51]">{interval}</span>
      ),
    },
   
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`border px-4 py-1 rounded-full text-sm ${
            status === "Paid"
              ? "border-green-500 text-green-600"
              : "border-orange-500 text-orange-500"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sl: "#1233",
      name: "Kathryn Murp",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      joiningDate: "12/04/24",
      interval: "Silver",
      fee: "$14.99",
      status: "Due",
    },
    {
      key: "2",
      sl: "#1233",
      name: "Devon Lane",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joiningDate: "12/04/24",
      interval: "Gold",
      fee: "$29.99",
      status: "Paid",
    },
    {
      key: "3",
      sl: "#1233",
      name: "Foysal Rahman",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg",
      joiningDate: "12/04/24",
      interval: "Silver",
      fee: "$49.99",
      status: "Paid",
    },
    {
      key: "4",
      sl: "#1233",
      name: "Hari Danang",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      joiningDate: "12/04/24",
      interval: "Gold",
      fee: "$14.99",
      status: "Due",
    },
    {
      key: "5",
      sl: "#1233",
      name: "Floyd Miles",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      joiningDate: "12/04/24",
      interval: "Diamond",
      fee: "$14.99",
      status: "Due",
    },
    {
      key: "6",
      sl: "#1233",
      name: "Eleanor Pena",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
      joiningDate: "12/04/24",
      interval: "Silver",
      fee: "$49.99",
      status: "Due",
    },
    {
      key: "7",
      sl: "#1233",
      name: "Devon Lane",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joiningDate: "12/04/24",
      interval: "Gold",
      fee: "$29.99",
      status: "Paid",
    },
    {
      key: "8",
      sl: "#1233",
      name: "Hari Danang",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      joiningDate: "12/04/24",
      interval: "Silver",
      fee: "$49.99",
      status: "Paid",
    },
    {
      key: "9",
      sl: "#1233",
      name: "Devon Lane",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joiningDate: "12/04/24",
      interval: "Gold",
      fee: "$14.99",
      status: "Due",
    },
    {
      key: "10",
      sl: "#1233",
      name: "Hari Danang",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      joiningDate: "12/04/24",
      interval: "Diamond",
      fee: "$14.99",
      status: "Paid",
    },
  ];

  return (
    <div className="p-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Navigate title={"Premium Subscribers"} />
          
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>

      <div className="p-2">
       

        <div className="rounded-md overflow-hidden">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowClassName="border-b border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
