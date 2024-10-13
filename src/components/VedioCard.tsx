
export function VedioCard(props : any){
    return <div>
        <img src={props.image} className="rounded-xl" alt="" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img src={props.image} className={"rounded-full w-20 h-20"} alt="" />
            </div>
            <div className="col-span-11 pl-5">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 pl-5 text-gray-600 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 pl-5 text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}

