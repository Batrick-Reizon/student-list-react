import { useContext } from "react"
import {StudentContext} from "../context/StudentContext"

function StudentList()
{
    const {Students,favourites,addtofavourite} = useContext(StudentContext)
    return(
        <div>
            {
                Students.map(function(Student,index)
            {
                return(
                    <div key={index} className="flex justify-center items-center gap-40 text-sm font-medium m-2 p-2 sm:text-xl sm:gap-52">
                        <span>{index+1}. {Student}</span>
                        <button onClick={()=>addtofavourite(Student)} disabled={favourites.includes(Student)} className={`px-3 py-1 rounded-md ${favourites.includes(Student)?"bg-gray-400 cursor-not-allowed":"bg-black text-white"}`}>Add to Favourite</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default StudentList