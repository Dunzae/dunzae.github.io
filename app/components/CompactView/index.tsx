import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";
export interface CompactViewProps {
    className?: string,
    profile: {
        image: string,
        id: string
    },
    like: string,
    title: string,
    content: string,
    thumbnail?: string,
    createDate: string,
}

export function CompactView({ className, profile, createDate, title, content, thumbnail, like }: CompactViewProps) {
    return (
        <div className={`${className} border-b-2 p-4 mb-4 border-[#E6E6E6] bg-white rounded-[20px]`}>
            <div className={`flex flex-col lg:flex-row lg:max-h-[255px] overflow-y-hidden gap-4 mb-4 justify-between`}>
                <div className="flex flex-grow flex-col">
                    <div className="flex flex-row items-center mb-2 lg:mb-4">
                        <span>
                            <Image src={profile.image} alt="profile image" width={30} height={30} className="rounded-[50%] mr-2" />
                        </span>
                        <span className="text-[14px] text-[#292929] font-NanumGothic font-bold">{profile.id}</span>
                        <span className="mx-2">·</span>
                        <span className="flex items-center text-[12px] text-[#757575] font-NanumGothic font-bold">{createDate}</span>
                    </div>
                    <div className="lg:flex lg:flex-col lg:w-full lg:pr-[200px]">
                        <p className="text-[#191919] mb-2 text-[22px] font-Roboto font-bold">{title}</p>
                        <p className="text-[#292929] leading-6 font-Poppins font-normal overflow-y-hidden text-sm">
                            {content}
                        </p>
                    </div>
                </div>
                <div className="w-full h-[250px] relative lg:basis-[250px] lg:flex-shrink-0 lg:flex-grow-0 ">
                    <Image alt="post thumbnail"
                        fill
                        src={thumbnail ? `${thumbnail}` : "/images/emptyThumbnail.png"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <div className="flex p-2 justify-center items-center gap-2 w-fit mr-2 cursor-pointer">
                        <div className="w-[20px] h-[20px] flex items-center flex-shrink-0 ">
                            <FcLike size={20} />
                        </div>
                        <div className="w-[20px] h-[20px] flex font-Poppins font-bold relative">
                            {like}
                        </div>
                    </div>
                    <span className="p-3 rounded-[20%] color-[#757575] border border-slate-200 font-normal font-Titillium shadow-2xl">3 min read</span>
                </div>
                <div className="flex items-center flex-grow-0 basis-0 cursor-pointer">
                    <div className="inline-block w-fit">
                        <IoIosMore size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}