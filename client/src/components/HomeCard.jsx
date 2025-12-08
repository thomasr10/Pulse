export default function HomeCard ({ icon, subtitle, text}) {

    return (
        <div className="card-container">
            { icon }
            <p className="mt-24 subtitle">{ subtitle }</p>
            <p className="mt-16 text">{ text }</p>
        </div>
    )
}