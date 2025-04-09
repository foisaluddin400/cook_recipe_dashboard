import { Table, Switch, Tag, Input, Button, Dropdown, Space } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { TbFilter } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AddSubscriptionModal } from "./AddSubscriptionModal";
import { EditSubscriptionModal } from "./EditSubscriptionModal";
import Navigate from "../../Navigate";

const Subscription = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);


  const handleEdit = (record) => {
    setEditModal(true);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Subscription Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Deration",
      dataIndex: "deration",
      key: "deration",
    },
    {
      title: "Subscription Fee",
      dataIndex: "fee",
      key: "fee",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <button
            onClick={() => handleEdit(record)}
            shape="circle"
            className="  rounded text-[#495F48]"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "01",
      name: "Barber Time",
      description: "View ",
      deration: "Monthly",
      fee: "$09.00 ",
    },
    {
      id: "02",
      name: "Barber Time",
      description: "View ",
      deration: "Monthly",
      fee: "$09.00 ",
    },
    {
      id: "03",
      name: "Barber Time",
      description: "View ",
      deration: "Monthly",
      fee: "$09.00 ",
    },
    {
      id: "04",
      name: "Barber Time",
      description: "View ",
      deration: "Monthly",
      fee: "$09.00 ",
    },
  ];

  return (
    <div>
      <div className="p-1 h-screen">
        <div className="flex justify-between">
          <div className="flex ">
            <Navigate title={"Subscription Plan"}></Navigate>
           
          </div>
          <button
            className="bg-[#495F48] px-5 py-2 text-white rounded"
            onClick={() => setOpenAddModal(true)}
          >
            + Subscription
          </button>
        </div>
        {/* Filter and Search */}
        <div className=" p-2">
         

          {/* Table */}
          <div className=" rounded-md overflow-hidden">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              rowClassName=" border-b border-gray-300"
            />
          </div>
        </div>
      </div>
      <AddSubscriptionModal
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      ></AddSubscriptionModal>
      <EditSubscriptionModal
        editModal={editModal}
        setEditModal={setEditModal}
      ></EditSubscriptionModal>
    </div>
  );
};

export default Subscription;
