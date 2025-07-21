import { createContext, useState } from "react"
import Students from "../data"

const StudentContext = createContext()

function Studentprovider({children})
{
    const [favourites,setfavourites] = useState([])

    const addtofavourite = (name) =>
    {
        if(!favourites.includes(name))
        {
            setfavourites((prev) => [...prev,name])
        }
    }

    const removefromfavourites = (name) =>
    {
        setfavourites((prev) => prev.filter((Student) => Student !== name))
    }

    return(
        <div>
            <StudentContext.Provider value={{Students,favourites,addtofavourite,removefromfavourites}}>
                {children}
            </StudentContext.Provider>
        </div>
    )
}

export default Studentprovider
export {StudentContext}