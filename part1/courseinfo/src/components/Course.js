import React from 'react'
const Header = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

const Part = ({part}) => {
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}

const Content = ({parts}) => {
    const rows = () => parts.map(part =>
        <Part 
            key={part.id}
            part={part}
        />
    )

    return (
        <div>
                {rows()}
        </div>
    )
}

const Total = ({parts}) => {
    const sum = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    
    return (
        <div>
            <p>
                <b>total of {sum} exercises</b>
            </p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>  
    )
}

export default Course