import ProfileImage from "@assets/images/profile.jpg"
import BackgroundImage from "@assets/images/background.png";
import { FcLike } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";


interface IPostPreviewComponent {
    reverse?: boolean
}
function PostPreviewComponent({
    reverse,
}: IPostPreviewComponent) {
    return <div className="border-b-2 p-4 mb-4 border-[#E6E6E6] bg-white rounded-[20px]">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:max-h-[250px] overflow-y-hidden gap-4 mb-4`}>
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-2 lg:mb-4">
                    <span>
                        <img src={ProfileImage} className="w-[30px] h-[30px] rounded-[50%] mr-2" />
                    </span>
                    <span className="text-[14px] text-[#292929] font-NanumGothic font-bold">프로필 이름</span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center text-[12px] text-[#757575] font-NanumGothic font-bold">작성 날짜</span>
                </div>
                <div className="lg:flex lg:flex-col lg:w-full lg:max-w-[600px]">
                    <p className="text-[#191919] mb-2 text-[22px] font-Roboto font-bold">Your portfolio is stopping you from geting that job</p>
                    <p className="text-[#292929] h-[100px] font-Poppins font-normal overflow-y-hidden">
                        An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...
                    </p>
                </div>
            </div>
            <div className="w-full h-auto lg:basis-[250px] lg:h-[250px] lg:flex-shrink-0 lg:flex-grow-0">
                <img className="w-full h-full object-cover" src={BackgroundImage} />
            </div>
        </div>
        <div className="flex justify-between mb-4">
            <div className="flex items-center">
                <div className="flex p-2 justify-center items-center gap-2 w-fit mr-2 cursor-pointer">
                    <div className="w-[20px] h-[20px] flex items-center flex-shrink-0 ">
                        <FcLike size={20} />
                    </div>
                    <div className="w-[20px] h-[20px] flex font-Poppins font-bold relative">
                        12
                    </div>
                </div>
                <span className="p-3 mr-3 rounded-[20%] color-[#292929] border border-slate-200 font-normal font-Titillium shadow-2xl cursor-pointer">Category</span>
                <span className="p-3 rounded-[20%] color-[#757575] border border-slate-200 font-normal font-Titillium shadow-2xl">3 min read</span>
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