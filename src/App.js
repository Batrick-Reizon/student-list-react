import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import StudentList from "./component/StudentList"
import Studentprovider from "./context/StudentContext"
import FavouriteStudents from "./component/FavouriteStudents"

function App() {
    return (
        <div>
            <Studentprovider>
                <Router>
                    <div className="p-5 bg-red-400 text-black text-base font-semibold flex gap-28 justify-center sm:text-2xl">
                        <Link className="hover:underline underline-offset-4 decoration-gray-400" to={"/"}>List of Students</Link>
                        <Link className="hover:underline underline-offset-4 decoration-gray-400" to={"/favourite"}>Favourite Students</Link>
                    </div>

                    <Routes>
                        <Route path="/" element={<StudentList></StudentList>}></Route>
                        <Route path="/favourite" element={<FavouriteStudents></FavouriteStudents>}></Route>
                    </Routes>
                </Router>
            </Studentprovider>
        </div>
    )
}

export default App