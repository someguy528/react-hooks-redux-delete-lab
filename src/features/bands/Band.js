import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

export default function Band({band, onBandDelete}){
    const dispatch = useDispatch()

    function handleDeleteClick(){
        dispatch(bandRemoved(band.id))
    }

    return (
        <li>{band.name} <button onClick={handleDeleteClick} >Delete Band</button> </li>
    )
}