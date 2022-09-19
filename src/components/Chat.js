import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: 'java' 
    },
    {
        id: 2,
        name: 'php' 
    },
    {
        id: 3,
        name: 'python' 
    }
]

function Chat () {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return (() => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        })
    }, [lessonId])

    return (
        <ul>
            {
                lessons.map((lesson) => {
                    return (
                        <li 
                            key={lesson.id}
                            onClick={() => setLessonId(lesson.id)}
                            style={lesson.id === lessonId ? {
                                color: 'red',
                                backgroundColor: 'brown'
                            } : {}}
                        >{ lesson.name }</li>
                    )
                })
            }
        </ul>
    )
}

export default Chat