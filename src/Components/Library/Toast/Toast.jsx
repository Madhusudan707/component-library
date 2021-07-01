import { Heading, Description, Snippet } from "../..";
import './toast.css'

export const Toast = () => {
    return (
        <>
            <Heading text="Toast"/>
            <Description text="Toast are an easy way to send alerts to your users"/>
            <>
                <span className="toast t-error mb-2">I am a Toast Error!</span>
                <span className="toast t-warning mb-2">I am a Toast Warning!</span>
                <span className="toast t-success">I am a Toast Success!</span>
            </>
          
            
            <Snippet code_snippet={`<span class='toast t-error'>I am a Toast Error!</span>
<span class='toast t-warning'>I am a Toast Warning!</span>
<span class='toast t-success'>I am a Toast Success!</span>
             `}/>
        </>
    )
}