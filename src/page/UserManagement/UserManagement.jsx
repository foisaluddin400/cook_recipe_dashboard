import { Table, Input, Space, Spin, message, Modal } from "antd";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { MdBlockFlipped } from "react-icons/md";
import { useState } from "react";
import { LiaReplySolid } from "react-icons/lia";
import Navigate from "../../Navigate";
import { FaRegEye } from "react-icons/fa";

const UserManagement = () => {
  const [loadingId, setLoadingId] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [open, setOpen] = useState(false);
  // Static mock data (replace this with actual data if needed)
  const userManagement = {
    users: [
      {
        _id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
   
        shipping_address: {
          street_address: "123 Main St",
          city: "CityName",
          state: "StateName",
          zip_code: "12345"
        },
        account_status: "Active",
      },
      {
        _id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
  
        shipping_address: {
          street_address: "456 Another St",
          city: "AnotherCity",
          state: "AnotherState",
          zip_code: "67890"
        },
        account_status: "Banned",
      },
      // Add more users as needed
    ],
  };

  const userData =
    userManagement?.users?.map((user, index) => ({
      key: user?._id,
      sl: index + 1,
      userName: user?.name,
      email: user?.email,
      contactNumber: user?.phone,
      address: `${user?.shipping_address?.street_address}, ${user?.shipping_address?.city}, ${user?.shipping_address?.state}, ${user?.shipping_address?.zip_code}`,
      status: user?.account_status,
    })) || [];

//   const handleBlockUnblock = async (record) => {
//     setLoadingId(record.key);
//     try {
//       const response = await blockUser(record.key).unwrap();
//       if (response) {
//         message.success(response?.message);
//       }
//     } catch (error) {
//       message.error(error?.data?.message);
//     }
//     setLoadingId(null);
//   };

  const columns = [
    { title: "SL no.", dataIndex: "sl", width: 70, align: "center" },
    { title: "User's Name", dataIndex: "userName", width: 150 },
    { title: "Email", dataIndex: "email" },
   
    { title: "Address", dataIndex: "address" },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
            <button
            onClick={() => { setSelectedShop(record); setOpen(true); }}
            className={"bg-[#495F48] text-white w-[30px] h-[30px] flex justify-center text-xl items-center rounded-md"}
          
          >
           
           <FaRegEye />
          
          </button>
          <button
            // onClick={() => handleBlockUnblock(record)}
            className={"bg-[#BBC5AA] text-white w-[30px] h-[30px] flex justify-center text-xl items-center rounded-md"}
          
          >
           
           <LiaReplySolid />
          
          </button>
          <button
            // onClick={() => handleBlockUnblock(record)}
            className={`${record.status === "Banned" ? "bg-[#8C9480]" : "bg-gray-600"} text-white w-[30px] h-[30px] flex justify-center text-xl items-center rounded-md`}
            disabled={loadingId === record.key}
          >
            {loadingId === record.key ? (
              <Spin indicator={<LoadingOutlined spin />} size="small" />
            ) : (
              <MdBlockFlipped />
            )}
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="h-screen  p-1">
      <div className="flex justify-between">
        <Navigate title={"User Managements"} />
        <Input
          placeholder="Search here..."
          prefix={<SearchOutlined />}
          style={{ marginBottom: "16px", maxWidth: "300px" }}
        />
      </div>

      <Table columns={columns} dataSource={userData} pagination={false} />

      <Modal
                title="Shop Details"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={500}
            >
                {selectedShop && (
                    <div>
                        <p><strong>Name:</strong> {selectedShop.userName}</p>
                        <p><strong>Shop Address:</strong> {selectedShop.address}</p>
                
                       
                        <p><strong>Email:</strong> {selectedShop.email}</p>


                    </div>
                )}
            </Modal>
    </div>
  );
};

export default UserManagement;
