import sammy from '../img/sammy.jpeg'
import '../css/Welcome.css'
type greetprops={
    name: string
}
export default function Welcome(props:greetprops) {
    return (
        <>
            <div className="wrapper">
                <h1>Welcome To My App {props.name}</h1>
                <p>This is going to be the coolest app in the world!</p>
                <img src={sammy}></img>
            </div>
        </>
    )
}