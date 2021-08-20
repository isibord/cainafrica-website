// import coloredlogo from '../images/coloredlogo.png'
import CainIjegun3Girls from '../images/ProjectsData/CainIjegun3Girls.JPG'
import CainBridgingTheGap from '../images/ProjectsData/CainBridgingTheGap.jpg';
import CainLibrary2 from '../images/resource_center/CPL.jpg';
import Akaeze2019 from '../images/ProjectsData/Akaeze2019.jpg';
import CAINSP20172 from '../images/ProjectsData/CAINSP20172.JPG';
import Christmas from "../images/christmas/IMG4.jpg";

const ProjectData = [
    {   
        index: 1,    //These should be incremental from the last interger
        title: "ARISE (Allocating Resources to Improve School Experience)",
        image: `${CainIjegun3Girls}`,
        description: "This project is aimed at providing resources to under-resourced public schools in impoverished communities in Lagos, Nigeria. The incommodious condition students have to endure while learning at these schools is saddening. We therefore hope to improve the learning experience of these students by allocating educational resources.",
        status: "Completed",
        link: "/projects/project-arise"
    },
    {   
        index: 2,
        title: "Bridging the Gap - Health Care For Jeida ",
        image: `${CainBridgingTheGap}`,
        description: "Kelechi Umoga, a medical student at Yale University, in partnership with CAIN and the Presbyterian church of Nigeria, implemented a project to establish a healthcare clinic in Jeida, a village near Abuja. Since 2010, the church has provided the village with various basic amenities so building a clinic was the next course of action.",
        status: "Completed",
        link: "/projects/Project-BtG"
    },
    {   
        index: 3,
        title: "CAIN Educational Resource Center",
        image: `${CainLibrary2}`,
        description: "The aim of this project is to establish a multipurpose educational resource center that will serve members of the Ikotun/Igando community. This structure will be a hub of educational resources where underprivileged students can broaden their horizon of knowledge through the acquisition and exchange of materials, skills and ideas.",
        status: "Ongoing",
        link: "/projects/Project-CAINERC"
    },
    {   
        index: 4,
        title: "CAIN Weekly Tutorial Program",
        image: `${CAINSP20172}`,
        description: "This program is one of the key areas of intervention of the CAIN Scholars’ Program, which is aimed at helping children from low-income families in Ikotun/Igando local government area gain access to quality educational resources, educational enhancement programs and equip them with skills to become globally competitive.",
        status: "Ongoing",
        link: "/projects/Project-CAINSP2017"
    },
    {   
        index: 5,
        title: "Akaeze Summer Reading Program",
        image: `${Akaeze2019}`,
        description: "Imagine children aged 9-16 dissecting literature, debating about social issues, learning and unlearning social norms while developing oratory and writing skills. This program is one that achieves these and more. Since inception, it has been greeted with wide acclaim, and has become an annual program hosted at our educational center.",
        status: "Ongoing",
        link: "/projects/Akaeze-Summer-Program"
    },
    {
    index: 6,
    title: "Christmas Benevolence Project ",
    image: `${Christmas}`,
    description:
      "This is an initiative born out of our desire to help and support the less priviledged members of the community during the Christmas festive season. It's a benevolence project aimed at providing food and other gift items to indigent families during Christmas. The maiden edition of this program took place in December 2020.",
    status: "Completed",
    link: "/projects/Christmas-Benevolence-Project",
  },
]

export default ProjectData;