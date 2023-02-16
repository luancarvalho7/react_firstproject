import { useParams } from "react-router-dom"
export function Nested(){
    const {id} = useParams()
    return (
        <h1> Nested with ma boy number {id}</h1>
    )
}