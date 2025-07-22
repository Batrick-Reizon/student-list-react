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
                        <div key={index} className="flex justify-center items-center gap-48 text-sm font-medium m-2 p-2 sm:text-xl sm:gap-60">
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