import { useState } from 'react'

const Question = (props) => {

    const [opened, setOpen] = useState(false)
    
    return (
        <div className="question">
            <div className="accordion-question">
                <div className="accordion-opener">
                    <h3>{ props.title }</h3>
                    <button onClick={() => { setOpen(!opened) }}>{ opened === false ? "+" : "-" }</button>
                </div>
                { opened && <div className="answer">
                    <p>{ props.answer }</p>
                </div> }
            </div>
        </div>
    )
}

export default Question