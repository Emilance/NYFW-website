import './SpeakerSection.css'

const speakers = [
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "red"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "yellow"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "blue"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "red"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "green"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "yellow"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "green"
    },

    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "red"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "red"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "blue"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "red"
    },
    {
        name : "Bill Cliton",
        tag: "CEO/COfounnder Swift",
        img :'/speaker.png',
        color: "green"
    },
]

const SpeakerSection = () => {
    return (
        <div className="speaker-section">
             <h1>Program Schedule <br/>& Speakers Lineup</h1>
            <p>Check some of the greatest minds joining us this year.</p>
            <div className="speakers-container">
              {speakers.map((data, index) => {
                return(
                    <div key={index} className="speaker" >
                    <div   style={{backgroundColor : `${data.color}`}}  className='upper-div'>

                        <img src={data.img}  alt=""  className='speaker-img'/>
                        <div className="inner-div">

                        </div>
                    </div>
                    <h3>{data.name}</h3>
                    <p>{data.tag}</p>
                </div>
                )
              })} 
              
            </div>
            <button className="hero-btn">Register Now</button>
        </div>
    )
}

export default SpeakerSection