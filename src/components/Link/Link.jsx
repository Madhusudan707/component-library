import React,{Fragment} from 'react'
import styles from  './link.module.css'
const LinkModule = ({linkUrl,linkName}) => {
    return (
       <Fragment>
           <a href={linkUrl}>{linkName}</a>
       </Fragment>
    )
}

export default LinkModule
