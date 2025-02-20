import Project from "../Components/Project";
import pic_project_couleurs from "../assets/project-preview/couleurs.jpg"
import pic_project_couleurs_tkinter from "../assets/project-preview/couleurs-tkinter.jpg"
import pic_project_pdiary from "../assets/project-preview/pdiary.jpg"
import pic_project_zendragon from "../assets/project-preview/zendragon.jpg"
import pic_project_exercise_tracker from "../assets/project-preview/exercise-tracker.jpg"
import pic_project_file_metadata from "../assets/project-preview/file-metadata.jpg"
import pic_project_header_parser from "../assets/project-preview/header-parser.jpg"
import pic_project_short_url from "../assets/project-preview/short-url.jpg"
import pic_project_timestamp from "../assets/project-preview/timestamp.jpg"
import pic_project_genhive from "../assets/project-preview/genhive.jpg"
import pic_project_purewave from "../assets/project-preview/purewave.jpg"
import pic_project_seat_randomizer from "../assets/project-preview/seat-randomizer.jpg"

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
                            pic={pic_project_purewave}
                            techs={["Spring Boot", "React.js", "MongoDB", "Flask", "Microservices"]}
                            name="PureWave"
                            desc="Full stack web application for the community of audiophiles."
                            link="https://github.com/wesleyaldrich/PureWave" />
                        <Project
                            pic={pic_project_genhive}
                            techs={["Tensorflow", "Laravel", "Flask", "Microservices"]}
                            name="GenHive"
                            desc="Web app to predict song genre. Model is trained by my team."
                            link="https://github.com/wesleyaldrich/GenHive" />
                        <Project
                            pic={pic_project_seat_randomizer}
                            techs={["React.js", "Vercel", "Internal Application"]}
                            name="Seat Randomizer"
                            desc="Static website for randomizing seats in my class."
                            link="https://github.com/wesleyaldrich/seat-randomizer" />
                        <Project
                            pic={pic_project_couleurs}
                            techs={["Flask", "OpenCV", "Torchvision"]}
                            name="Couleurs"
                            desc="Web application RESTful API for image colorization AI."
                            link="https://github.com/wesleyaldrich/Couleurs" />
                        <Project
                            pic={pic_project_couleurs_tkinter}
                            techs={["Tkinter", "OpenCV", "Torchvision"]}
                            name="Couleurs Desktop"
                            desc="Desktop application for image colorization AI."
                            link="https://github.com/wesleyaldrich/Couleurs_Prototype" />
                        <Project
                            pic={pic_project_pdiary}
                            techs={["Laravel", "Bootstrap", "Blade"]}
                            name="PDiary"
                            desc="CRUD web application for taking diaries."
                            link="https://github.com/wesleyaldrich/PDiary" />
                        <Project
                            pic={pic_project_zendragon}
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
                            pic={pic_project_purewave}
                            techs={["Flask", "Rest API"]}
                            name="flask-purewave"
                            desc="AI audio enhancement API microservice for PureWave (another project)."
                            link="https://github.com/wesleyaldrich/flask-purewave" />
                        <Project
                            pic={pic_project_genhive}
                            techs={["Flask", "Tensorflow"]}
                            name="flask-genhive"
                            desc="AI song genre API microservice for GenHive (another project)."
                            link="https://github.com/wesleyaldrich/flask-genhive" />
                        <Project
                            pic={pic_project_exercise_tracker}
                            techs={["Express.js"]}
                            name="Exercise Tracker API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/ExerciseTrackerAPI" />
                        <Project
                            pic={pic_project_file_metadata}
                            techs={["Express.js"]}
                            name="File Metadata API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/FileMetadataAPI" />
                        <Project
                            pic={pic_project_header_parser}
                            techs={["Express.js"]}
                            name="Header Parser API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/HeaderParserAPI" />
                        <Project
                            pic={pic_project_short_url}
                            techs={["Express.js"]}
                            name="Short URL API"
                            desc="-"
                            link="https://github.com/wesleyaldrich/ShortURL_API" />
                        <Project
                            pic={pic_project_timestamp}
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