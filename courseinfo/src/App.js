
function Header(props) {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Content(props) {
  return (
    <div>
      <Part part={props.parts[0].name}  exercises={props.parts[0].exercises}  />
      <Part part={props.parts[1].name}  exercises={props.parts[1].exercises}  />
      <Part part={props.parts[2].name}  exercises={props.parts[2].exercises}  />
    </div>
  )
}

function Part(props){
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

function Total(props){
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  // Part 1.2
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  //Part 1.3
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  //Part 1.4
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header
        course={course.name}
      />
      <Content
        parts ={course.parts}
      />
      <Total
       parts ={course.parts}
      />
    </div>
  )
}

export default App
