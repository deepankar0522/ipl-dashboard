import { Link } from "react-router-dom"
import './TeamTile.scss'

const TeamTile=({teamName})=>{
    return(<div className="TeamTile"><Link to={`/teams/${teamName}`}>{teamName}</Link></div>)
}
export default TeamTile;