import { useState } from "react";

const NewList = (props) => {
    const [name, setName] = useState();
    const [allowAdditions, setAllowAdditions] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [movieList, setMovieList] = useState([]);


    return (
        <>
        <div>
            <form className="">
                <div className="flex items-center gap-5">
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Movie Night" className="border border-black rounded px-2 text-right" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex items-center gap-5">
                    <label htmlFor="allowAdditions">Allow others to add movies?</label>
                    <input type="checkbox" onChange={(e) => setAllowAdditions(!allowAdditions)}/>
                </div>
                <div className="flex items-center gap-5">
                    <label htmlFor="isPublic">Visibility</label>
                    <select name="isPublic" id="" className="border border-black rounded px-1 py-1" onChange={(e) => setIsPublic(JSON.parse(e.target.value))}>
                        <option value={false}>private</option>
                        <option value={true}>public</option>
                    </select>
                </div>
            </form>
        </div>
        </>
    )
}

export default NewList;