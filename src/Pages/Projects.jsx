import Project from "../Components/Project";
import pic_project_1_1 from "../assets/project-preview/couleurs.jpg"
import pic_project_1_2 from "../assets/project-preview/couleurs-tkinter.jpg"
import pic_project_1_3 from "../assets/project-preview/pdiary.jpg"
import pic_project_1_4 from "../assets/project-preview/zendragon.jpg"
import pic_project_2_1 from "../assets/project-preview/exercise-tracker.jpg"
import pic_project_2_2 from "../assets/project-preview/file-metadata.jpg"
import pic_project_2_3 from "../assets/project-preview/header-parser.jpg"
import pic_project_2_4 from "../assets/project-preview/short-url.jpg"
import pic_project_2_5 from "../assets/project-preview/timestamp.jpg"

function Projects(){
    return (<>
        <div className="page-content">
            <div className="container">
                <div className="path">
                    <h1 className="h1 path__name">projects</h1>
                    <p className="path__description">All of my projects</p>
                </div>

                <div className="all-projects">
                    <h2 className="h2">decent</h2>
                    <div className="project-list">
                        <Project
                            pic={pic_project_1_1}
                            techs={["Flask", "OpenCV", "Torchvision"]}
                            name="Couleurs"
                            desc="Web application RESTful API for image colorization AI."
                            link="https://github.com/wesleyaldrich/Couleurs" />
                        <Project
                            pic={pic_project_1_2}
                            techs={["Tkinter", "OpenCV", "Torchvision"]}
                            name="Couleurs Desktop"
                            desc="Desktop application for image colorization AI."
                            link="https://github.com/wesleyaldrich/Couleurs_Prototype" />
                        <Project
                            pic={pic_project_1_3}
                            techs={["Laravel", "Bootstrap", "Blade"]}
                            name="PDiary"
                            desc="CRUD web application for taking diaries."
                            link="https://github.com/wesleyaldrich/PDiary" />
                        <Project
                            pic={pic_project_1_4}
                            techs={["no-framework", "HTML", "CSS", "JS"]}
                            name="ZenDragon"
                            desc="Static website for a fictional academy that train dragons."
                            link="https://github.com/wesleyaldrich/ZenDragon" />
                    </div>
                </div>

                <div className="all-projects">
                    <h2 className="h2">small</h2>
                    <div className="project-list small-projects">
                        <Project
                            pic={pic_project_2_1}
                            techs={["Express.js"]}
                            name="Exercise Tracker API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/ExerciseTrackerAPI" />
                        <Project
                            pic={pic_project_2_2}
                            techs={["Express.js"]}
                            name="File Metadata API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/FileMetadataAPI" />
                        <Project
                            pic={pic_project_2_3}
                            techs={["Express.js"]}
                            name="Header Parser API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/HeaderParserAPI" />
                        <Project
                            pic={pic_project_2_4}
                            techs={["Express.js"]}
                            name="Short URL API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/ShortURL_API" />
                        <Project
                            pic={pic_project_2_5}
                            techs={["Express.js"]}
                            name="Timestamp API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/TimestampAPI" />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Projects;