
function Project({ pic, techs, name, desc, link }) {
    return (
        <div className="project">
            <img src={pic} alt="Project Image" className="project__image" />
            
            <ul className="project__techs">
                {
                    techs.map((tech, index) => (
                        <li key={index} className="project__tech">{tech}</li>
                    ))
                }
            </ul> 

            <div className="project__content">
                <div className="project__name">{name}</div>
                <div className="project__description">{desc}</div>
                <div className="project__links">
                    <a target="_blank" href={link} className="button">GitHub =&gt;</a>
                </div>
            </div>
        </div> 
    );
}

export default Project;