import { useEffect, useState } from "react";
const options = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countdown, setCountdown] = useState(180);

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/' + type)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountdown(prev =>  {
                console.log(prev);
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timeId);
    }, [])

    return (
        <div>
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'red'
                }}
            >
                {countdown}
            </div>
            {options.map((option) => {
                return (
                    <button
                        key={option}
                        style={
                            type===option ? {
                                color: 'green',
                                backgroundColor: 'black'
                            } : {}
                        }
                        onClick={() => {
                            setType(option)
                        }}
                    >
                        {option}
                    </button>
                )
            })}
            <input value={title} onChange={changeTitle}/>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title ?? post.id}</li>
                })}
            </ul>
            {showGoToTop && <button onClick={() => {window.scrollTo(0, 0)}} style={{position: 'fixed', right: '10px', bottom: '10px'}}>go to top</button>}
        </div>
    )
}

export default Content;