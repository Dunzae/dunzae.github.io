import { Link } from "react-router-dom";

function TitleComponent() {
    return (
        <div className="w-full text-center flex-shirink-0 h-auto border-b border-b-gray-200 lg:border-b-0">
            {/* 블로그 이름 */}
            <Link to="/">
                <div className="text-[60px] text-black lg:text-white font-[Agdasima] font-light ">
                    LogSomething
                </div>
            </Link>

        </div>
    )
}

export default TitleComponent;