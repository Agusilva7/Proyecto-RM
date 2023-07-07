import Cards from "../Cards/Cards";
export default function Home (props){
    return(
        <div>
            <span>Home</span>
            <Cards characteres={props.characteres} onClose={props.onClose}/>
        </div>
    )
}