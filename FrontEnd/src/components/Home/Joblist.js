import Jobs from './Jobs'
import classes from './Joblist.module.css'
const Joblist = (props)=>
{
    // console.log(props.details,'joblist props')
    return (
        <ul>

            {
            props.details?.map((i)=>
            (
                <Jobs 
                id={i.id}
                title={i.title}
                company= {i.company}
                description= {i.description}
                location = {i.location}
                url='www.youtube.com'
                />
            ))}
        </ul>
    )
}

export default Joblist;