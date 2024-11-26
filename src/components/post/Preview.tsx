import ProfileImage from "@assets/images/profile.jpg"
import EmptyThumbnailImage from "@assets/images/emptyThumbnail.png";
import { FcLike } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";
import { timeToLocalTime, timeToRead } from "@utils/functions";

interface IPostPreviewComponent {
    profile: string,
    createDate: string,
    title: string,
    content: string,
    thumbnail?: string,
    like: string,
}
function PostPreviewComponent({
    profile,
    createDate,
    title,
    content,
    thumbnail,
    like,
}: IPostPreviewComponent) {
    return <div className="border-b-2 p-4 mb-4 border-[#E6E6E6] bg-white rounded-[20px] lg:min-w-[660px]">
        <div className={`flex flex-col lg:flex-row lg:max-h-[255px] overflow-x-hidden overflow-y-hidden gap-4 mb-4 justify-between`}>
            <div className="flex flex-grow flex-col">
                <div className="flex flex-row items-center mb-2 lg:mb-4">
                    <span className="text-[14px] text-[#292929] font-NanumGothic font-bold">{profile}</span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center text-[12px] text-[#757575] font-NanumGothic font-bold">{timeToLocalTime(createDate)}</span>
                </div>
                <div className="lg:flex lg:flex-col lg:w-full flex-shrink">
                    <p className="text-[#191919] mb-2 text-[22px] font-Roboto font-bold">{title}</p>
                    <p className="text-[#292929] leading-6 font-Poppins font-normal overflow-y-hidden text-sm">
                        {content}
                    </p>
                </div>
            </div>
            <div className="w-full h-auto lg:basis-[250px] lg:h-[250px] lg:flex-shrink-0 lg:flex-grow-0">
                <img className="w-full h-full object-cover" src={thumbnail ? thumbnail : EmptyThumbnailImage} />
            </div>
        </div>
        <div className="flex justify-between mb-4">
            <div className="flex items-center">
                <span className="p-3 rounded-[20%] color-[#757575] border border-slate-200 font-normal font-Titillium shadow-2xl">{timeToRead(content.length)}</span>
            </div>
            <div className="flex items-center flex-grow-0 basis-0 cursor-pointer">
                <div className="inline-block w-fit">
                    <IoIosMore size={25} />
                </div>
            </div>
        </div>
    </div>
}

export default PostPreviewComponent;