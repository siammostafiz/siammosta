import React from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import {
  FaWindows,
  FaNetworkWired,
  FaServer,
  FaLinux,
  FaCloud,
  FaMicrochip,
  FaCode,
  FaFileWord,
  FaKeyboard,
  FaShoppingCart,
  FaChartLine,
  FaBullhorn,
  FaGoogle,
  FaMicrosoft,
  FaClock,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaProjectDiagram,
  FaGlobe,
  FaLanguage,
} from "react-icons/fa";
import "./styles/skill.css";

const technicalSkills = [
  {
    icon: <FaWindows size={30} color="#0078D7" />,
    title: "Windows OS",
    details: "Windows 10, 11, 12",
  },
  {
    icon: <FaNetworkWired size={30} color="#4CAF50" />,
    title: "Networking",
    details: "IPv4/6, Routing, VLAN, NAT, DHCP, ACL, SSH",
  },
  {
    icon: <FaMicrochip size={30} color="#E44D26" />,
    title: "MikroTik",
    details: "NAT, Firewall, PPPoE, Queues, WinBox",
  },
  {
    icon: <FaServer size={30} color="#6f42c1" />,
    title: "Windows Server",
    details: "AD, DNS, DHCP, Group Policy, PowerShell",
  },
  {
    icon: <FaLinux size={30} color="#FCC624" />,
    title: "Linux",
    details: "Permissions, Firewall, Apache, Nginx, MariaDB, LVM",
  },
  {
    icon: <FaCloud size={30} color="#0080FF" />,
    title: "Virtualization/Cloud",
    details: "Hyper-V, VMware, AWS, Azure",
  },
  {
    icon: <FaMicrochip size={30} color="#FF5722" />,
    title: "Hardware",
    details: "PC Build, OS Install, Network Setup",
  },
  {
    icon: <FaCode size={30} color="#2E86C1" />,
    title: "Scripting",
    details: "PowerShell, Bash, Python, Ansible",
  },
  {
    icon: <FaFileWord size={30} color="#217346" />,
    title: "Office Tools",
    details: "MS Word, Excel, PowerPoint, Documentation",
  },
  {
    icon: <FaKeyboard size={30} color="#444" />,
    title: "Typing",
    details: "Fast Bangla & English typing",
  },
  {
    icon: <FaShoppingCart size={30} color="#96bf48" />,
    title: "Shopify Developer",
    details: "Custom Themes, App Integrations, Store Setup",
  },
  {
    icon: <FaChartLine size={30} color="#ff9900" />,
    title: "Ecommerce Growth Specialist",
    details: "Sales Optimization, Conversion Tracking, Customer Retention",
  },
  {
    icon: <FaBullhorn size={30} color="#4285F4" />,
    title: "Digital Marketing Expert",
    details: "SEO, Content Marketing, Social Media Campaigns",
  },
  {
    icon: <FaGoogle size={30} color="#ea4335" />,
    title: "Google Ads Specialist",
    details: "PPC Campaigns, Keyword Research, Analytics",
  },
  {
    icon: <FaMicrosoft size={30} color="#f65314" />,
    title: "Microsoft Product Specialist",
    details: "Office 365, Azure, Teams, SharePoint",
  },
];

const softSkills = [
  {
    icon: <FaClock size={30} color="#FF6F61" />,
    title: "Time Management & Multitasking",
  },
  {
    icon: <FaComments size={30} color="#4A90E2" />,
    title: "Sales & Client Communication",
  },
  {
    icon: <FaLightbulb size={30} color="#F5A623" />,
    title: "Research & Analytical Thinking",
  },
  {
    icon: <FaProjectDiagram size={30} color="#50E3C2" />,
    title: "Problem Solving & Decision Making",
  },
  {
    icon: <FaUsers size={30} color="#9013FE" />,
    title: "Team Collaboration & Leadership",
  },
];

const languages = [
  {
    icon: <FaGlobe size={30} color="#4285F4" />,
    title: "English",
    level: "Fluent",
  },
  {
    icon: <FaLanguage size={30} color="#EA4335" />,
    title: "Japanese",
    level: "Intermediate",
  },
];

const Skills = () => {
  return (
    <div className="page-content">
      <NavBar active="skills" />
      <div className="content-wrapper">
        <div className="skill-section">
          {/* Technical Skills */}
          <h2 className="skill-title">Technical Skills</h2>
          <div className="skills-container">
            {technicalSkills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                style={{ "--delay": `${index * 0.15}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.title}</h3>
                  <p>{skill.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Soft & Interpersonal Skills */}
          <h2 className="skill-title" style={{ marginTop: "60px" }}>
            Soft and Interpersonal Skills
          </h2>
          <div className="skills-container">
            {softSkills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                style={{ "--delay": `${(technicalSkills.length + index) * 0.15}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <h2 className="skill-title" style={{ marginTop: "60px" }}>
            Languages
          </h2>
          <div className="skills-container">
            {languages.map((lang, index) => (
              <div
                className="skill-card"
                key={index}
                style={{
                  "--delay": `${(technicalSkills.length + softSkills.length + index) * 0.15}s`,
                }}
              >
                <div className="skill-icon">{lang.icon}</div>
                <div className="skill-info">
                  <h3>{lang.title}</h3>
                  <p>{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Skills;
