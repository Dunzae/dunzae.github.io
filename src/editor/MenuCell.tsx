interface IMenuCell {
    icon : string;
    title : string;
    body : string;
    onClick : () => void;
}

function MenuCell({icon, title, body, onClick} : IMenuCell) {
    return (
        <div className="flex gap-2 ite cursor-pointer" onClick={onClick}>
                <div className="w-[50px] h-[50px] flex-shrink-0 shadow-sm rounded-md border border-slate-200">
                    <img className="w-full h-full" src={icon} />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <span className="font-NanumGothic text-[12px] ">{title}</span>
                    <span className="font-NanumGothic text-[10px] opacity-80">{body}</span>
                </div>
            </div>
    )
}

export default MenuCell;