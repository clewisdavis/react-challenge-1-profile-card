
import './App.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
      <img className='avatar' src="./oatie.png" alt="the smartest dog ever" />
  )
}

function Intro() {
  return (
    <div>
      <h1>Oatie Davis</h1>
      <p>$50 dog with the life of the rich and famous. Spend most days choosing which bed I would like to sleep on. Hobbies include, water bottle eating, snappyness and zoomies.</p>
    </div>
  )
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}

      {/* <Skill skill="React" emoji="👩‍🎤" color="blue" />
      <Skill skill="HTML" emoji="🤠" color="orange" />
      <Skill skill="Jump" emoji="🐶" color="yellow" />
      <Skill skill="Sleep" emoji="🛏️" color="purple" /> */}
    </div>
  );
}

function Skill({ skill, level, color }){

  console.log(skill);
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Contains skill list with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
