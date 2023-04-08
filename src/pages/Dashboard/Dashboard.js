import styles from "./dashboard.module.scss";
import Header from "../../components/Header/Header";
import CustomersOverview from "../../components/CustomersOverview/CustomersOverview";
import Modal from "../../components/Modal/Modal";
import { UploadCloudIcon } from "../../components/Icons";
import { useState } from "react";
import { tabsDashboard } from "../../constants";
import Message from "../../components/Message/Message";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
      <div className={styles.wrapper}>
        <Header
          title="Customers"
          onClick={() => setIsModalOpen(true)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabsDashboard}
          icon={UploadCloudIcon}
          secondaryText="Import"
          addText="Add customer"
        />
        {/* CONTENT - - - - - */}
        <div className={styles.contentWrapper}>
          {activeTab === "Overview" && <CustomersOverview />}
          {activeTab === "Table" && <Message name="Table" />}
          {activeTab === "List View" && <Message name="List View" />}
          {activeTab === "Segment" && <Message name="Segment" />}
          {activeTab === "Custom" && <Message name="Custom" />}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
