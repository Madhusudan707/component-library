
import { Heading, Description, Snippet } from "../../";

import './badge.css'
export const Badge = () => {
    return (
        <>
            <Heading text="Badge"/>
            <Description text="Badges can notify you that there are new or unread messages or notifications."/>
            <div className="content_block">
                <span className="badge">1</span>
                <span className="badge"><i className="fa fa-bell"></i></span>
                <span className="badge"><i className="fa fa-inbox"></i></span>
                <span className="badge">Maddy</span>
            </div>
          
            
            <Snippet code_snippet={`<span class="badge">1</span>

<span class="badge"><i class="fa fa-bell"></i></span>

<span class="badge"><i class="fa fa-inbox"></i></span>

<span class="badge">Maddy</span>`}/>
        </>
    )
}
