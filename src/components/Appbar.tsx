import {SearchBar} from "@/components/SearchBar"

export function Appbar(){
    return <div className="flex justify-between ">
        <div>
            Youtube 
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            signin
        </div>
    </div>
}