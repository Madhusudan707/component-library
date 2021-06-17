import { Heading, Description, Snippet } from "../..";
import './modal.css'

export const Modal = () => {
    return (
        <>
            <Heading text="Modal" />
            <Description text="The modal component provides a solid foundation for creating dialogs, popovers, lightboxes." />
            <>
            <a href="#myModal"><button id='open_modal' className="btn btn-primary">Modal</button></a>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <a href="#close" title="Close" className="modal-close">X</a>
                        <h2>Modal</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </>
            <Snippet code_snippet={`<button id="open-modal" class="btn btn-primary">Open Modal</button>
<div id="myModal" class="modal">
	<div class="modal-content">
     	<a href="#close" title="Close" class="modal-close">X</a>
       	<h2>Modal</h2>
      	<p>Modal Content</p>
    <div>
</div>`}/>
        </>

    )
}
