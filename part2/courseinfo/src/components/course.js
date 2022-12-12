const Header = ({ course }) => 
    <h1>{course.name}</h1>

  const Total = ({parts}) => {
    const totalExercises = parts.reduce( (sum, x) => {
      return sum + x.exercises
      },0)

    return (
      <>
          <strong>total of {totalExercises} exercises</strong>
      </>
    )
  }

const Content = ({ parts }) => 
  <>
    <ul>      
           {parts.map(function(part){
            return  <li key={part.id}> {part.name}  {part.exercises} </li>
            })}      
    </ul>    
  </>

  const Course = ({course, parts}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} /> 
        <Total parts={parts}/>       
      </div>
    )
  }

  export default Course