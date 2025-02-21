import Project from "../Components/Project";
import Quote from "../Components/Quote";
import Skill from "../Components/Skill";
import pic_project_1 from "../assets/project-preview/couleurs.jpg"
import pic_project_2 from "../assets/project-preview/pdiary.jpg"
import pic_project_3 from "../assets/project-preview/zendragon.jpg"
import pic_hole from "../assets/hole.png"
import pic_wesley from "../assets/pic-wesley.png";
import pic_about_me from "../assets/wesley_1.jpg"
import { Link, Element } from "react-scroll";
import { NavLink } from "react-router-dom";

function Home(){
    return(<>
        <div className="page-content">
            <div className="overview container">
                <div className="left">
                    <h1>Wesley is a <span>fullstack developer</span> and a <span>music producer</span>.</h1>
                    <p>He brings people together with his big passion in teaching and explaining.</p>
                    <Link
                        id="getinfo-btn"
                        to="about-me"
                        smooth={true}
                        easing="easeInOutSine"
                        duration={800}
                        offset={-250}
                        className="button">
                            getInfo("wesleyaldrich")
                    </Link>
                </div>
                <div className="right">
                    <img id="wesley-img" src={pic_wesley} alt="Picture of Wesley Aldrich"/>
                </div>
            </div>

            <div className="quote-container container">
                <Quote text="Don't let others tell you what to do. I'm others." author="Wesley Aldrich"/>
            </div>

            <section className="projects container">
                <div className="projects__header">
                    <h2 className="h2">projects</h2>
                    <NavLink to="/projects" className="projects__link">
                        View all ~~&gt;
                    </NavLink>
                </div>
            
                <div className="project-list">
                    <Project
                        pic={pic_project_1}
                        techs={["Flask", "OpenCV", "Torchvision"]}
                        name="Couleurs"
                        desc="Web application RESTful API for image colorization AI."
                        link="https://github.com/wesleyaldrich/Couleurs" />
                    <Project
                        pic={pic_project_2}
                        techs={["Laravel", "Bootstrap", "Blade"]}
                        name="PDiary"
                        desc="CRUD web application for taking diaries."
                        link="https://github.com/wesleyaldrich/PDiary" />
                    <Project
                        pic={pic_project_3}
                        techs={["no-framework", "HTML", "CSS", "JS"]}
                        name="ZenDragon"
                        desc="Static website for a fictional academy that train dragons."
                        link="https://github.com/wesleyaldrich/ZenDragon" />
                </div>
            </section>

            <section className="skills container">
                <h2 className="h2">skills</h2>
                <div className="skills__content">
                    <div className="skill-img-container">
                        <img id="skills-img" src={pic_hole} alt="Decorative Image" />
                    </div>
                    <div className="skills__list">
                        <Skill
                            title="Languages"
                            list={["C", "C++", "Java", "JavaScript",
                                "Kotlin", "MySQL", "PHP", "Python"]}/>
                        <Skill
                            title="Framework: Frontend"
                            list={["Blade", "Bootstrap", "React.js"]}/>
                        <Skill
                            title="Framework: Backend"
                            list={["Express.js", "Flask", "Laravel", "Spring Boot"]}/>
                        <Skill
                            title="Others"
                            list={["Git", "GitHub", "Jetpack Compose", "Linux",
                                "MongoDB", "Tkinter",]}/>
                    </div>
                </div>
            </section>

            <Element name="about-me" id="about-0" className="about-me container">
                <div className="about-me-details">
                    <h2 className="h2">about</h2>
                    <div className="about__text">
                        <p className="about__description">
                            Wesley Aldrich is a Computer Science student from Indonesia, in BINUS University, taking the scholarship of PPTI BCA 2023. When he was a high school student, he was competitively active in Math, Informatics, Astronomy, and Astrophysics. His proudest win is the National Award in International Astronomy and Astrophysics Competition (IAAC) 2022.
                        </p>
                        <p className="about__description">
                            For hobby, he loves song-writing and producing music. So whenever he's not studying for competitions, he use all of his free times to learn music production skills. Now, he has few songs released on Spotify, while most of his works are unreleased since he's not confident of his own voice, thus still looking for people to sing the songs he wrote.
                        </p>

                        <NavLink to="/about-me" className="button about-me-btn">
                            Read more -&gt;
                        </NavLink>
                    </div>
                </div>
                <div className="about-me-img-container">
                    <img className="about-me-img" src={ pic_about_me }/>
                </div>
            </Element>
        </div>
    </>);   
}

export default Home;