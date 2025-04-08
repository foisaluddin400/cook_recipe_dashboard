import React, { useState } from "react";

import Adds from "./Adds";
import VideosAdd from "./VideosAdd";
import AddPromotionModal from "./AddPromotionModal";
import EditPromotionModal from "./EditPromotionModal";
import Navigate from "../../Navigate";


const AdPromotional = () => {
  const [selectedTab, setSelectedTab] = useState("personal");
  const [editModal, setEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex ">
          <Navigate title={"Ad Promotion"}></Navigate>
          <h1 className=" pl-2 font-semibold text-xl">{`(110)`}</h1>
        </div>
        <button
        onClick={() => setOpenAddModal(true)}
          className="bg-[#D17C51] px-5 py-2 text-white rounded"
          // onClick={() => setOpenAddModal(true)}
        >
          + Adds
        </button>
      </div>
    
     
          <Adds setEditModal={setEditModal}></Adds>
      
      


      <AddPromotionModal setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}></AddPromotionModal>
        <EditPromotionModal  editModal={editModal}
        setEditModal={setEditModal}></EditPromotionModal>
    </div>
  );
};

export default AdPromotional;
