import { useLocation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
const Newsearch = () => {
    const location = useLocation()
    console.log(location.state)
    return (
        <>
            <NavBar />

            <div className="left">

                <div className="jobs">

                    <div className="conta d-flex">
                        <h2 className="head">Jobs</h2>
                    </div>
                    {location.state?.map(data => (
                    <div className="options">
                            <h3 className="title">{data.company}</h3>
                            <p className="service">{data.title}</p>
                            <h5 className="time">{data.salary}</h5>
                            <h5 className="proglanguage">Skills: {data.skills.map(sub=>(
                                <h6>{sub}</h6>
                            ))}</h5>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Newsearch