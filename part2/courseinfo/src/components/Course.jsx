const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => 
      <Part
        key={part.id}
        part={part} 
      />
    )}  
  </>

const Course = (props) => {
  return (
  <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total sum={props.course.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)} />
  </div>
  )
}

export default Course