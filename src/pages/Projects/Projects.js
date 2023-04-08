import styles from "./projects.module.scss";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { tabsProjects } from "../../constants";
import { SettingsIcon } from "../../components/Icons";
import ProjectsOverview from "../../components/ProjectsOverview/ProjectsOverview";
import Message from "../../components/Message/Message";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className={styles.wrapper}>
      <Header
        title="Projects"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabsProjects}
        icon={SettingsIcon}
        secondaryText="Customize"
        addText="Add project"
      />
      {/* CONTENT - - - - - */}
      <div className={styles.contentWrapper}>
        {activeTab === "Overview" && <ProjectsOverview />}
        {activeTab === "Analytics" && <Message name="Analytics" />}
        {activeTab === "Reporting" && <Message name="Reporting" />}
        {activeTab === "Archived" && <Message name="Archived" />}
      </div>
    </div>
  );
};
export default Projects;
