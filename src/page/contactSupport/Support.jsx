import React, { useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import ReplyUser from "./ReplyUser";
import Navigate from "../../Navigate";

const Support = () => {
  const [open, setOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const dataSource = [
    {
      key: "1",
      shopName: "Cameron Salons",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      genderCategory: "Male",
      category: "Skin care",
      ownerName: "Mike Smith",
      email: "sadgfjdg@gmail.com",
      phone: "+3489 9999 9778",
      bankName: "AB Bank",
      description : 'the dfiasd eruopie dsfss',
      accountHolder: "Dianne Russell",
      accountNumber: "6575675678676",
      branchCode: "4575467",
      branchCity: "New York",
      date:'12/5/2024',
      city: "Us",
      image: "https://via.placeholder.com/40",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "User Name",
      dataIndex: "shopName",
      key: "shopName",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <img src={record.image} alt="Shop" className="w-8 h-8 rounded-full" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    
    {
      title: "View Details",
      key: "viewDetails",
      render: (record) => (
        <Button
          onClick={() => {
            setSelectedShop(record);
            setOpen(true);
          }}
          shape="circle"
          icon={<EyeOutlined />}
          style={{ backgroundColor: "#016A70", color: "white" }}
        />
      ),
    },
    {
      title: "Reply",
      key: "reply",
      render: (record) => (
        <button
          onClick={() => setOpenAddModal(true)}
          className="bg-red-500 border px-4 py-1 rounded"
        >
          Reply
        </button>
      ),
    },
  ];

  return (
    <div className="p-3 bg-white mt-4">
      <div className="flex justify-between mb-4">
        <Navigate title={"Support"} />
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />

      <Modal
        title="Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        {selectedShop && (
          <div>
            <p>
              <strong>Shop Name:</strong> {selectedShop.shopName}
            </p>
            <p>
              <strong>Shop Address:</strong> {selectedShop.address}
            </p>
            <p>
              <strong>Shop Gender Category:</strong>{" "}
              {selectedShop.date}
            </p>
            <p>
              <strong>Shop Category:</strong> {selectedShop.category}
            </p>
            <p>
              <strong>Shop Owner Name:</strong> {selectedShop.ownerName}
            </p>
            <p>
              <strong>Email:</strong> {selectedShop.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {selectedShop.description}
            </p>
       
          
          </div>
        )}
      </Modal>
      <ReplyUser
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      ></ReplyUser>
    </div>
  );
};

export default Support;
