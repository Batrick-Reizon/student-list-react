import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

function FavouriteStudents()
{
    const {favourites,removefromfavourites} = useContext(StudentContext)
    return(
        <div>
            {
                favourites.length === 0 ?
                <p className="p-5 text-center">No Favourite Students Yet.</p> :
                favourites.map((Students,index) =>
                {
                    return(
                        <div key={index} className="p-5 flex justify-center text-lg font-medium gap-64">
                            <span>{index+1}. {Students}</span>
                            <button onClick={()=>removefromfavourites(Students)} className="bg-red-500 rounded-md px-3 py-1">Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavouriteStudents