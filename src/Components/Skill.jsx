
function Skill({ title, list }){
    return (
        <div className="skill-block">
            <div className="skill-block__name">{ title }</div>
            <ul className="skill-block__list">
                {
                    list.map((name, index) => (
                        <li key={index} className="skill-block__skill">{ name }</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Skill;