import ProfileImage from "@assets/images/profile.jpg";

function Notification2Component() {
    return (
        <div className="w-full border-b-[#dbdbdb] px-[15px] py-[8px]">
            <div className="mb-[18px] text-[16px] font-bold">
                이번 주
            </div>
            <div className="pb-4 border-b">
                {/* 프로필과 알림 내용을 위한 div */}
                <div className="flex ">
                    <div className="flex-shrink-0 basis-0 mr-[12px] ">
                        <div className="w-[44px] h-[44px] rounded-[50%] overflow-hidden">
                            <img src={ProfileImage} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow justify-center flex-shrink-0 leading-[18px] text-[14px] break-words whitespace-pre-line">
                        <p>
                            <strong>누군가</strong>
                            <span>가 당신을 글을 북마크하였습니다.</span>
                        </p>
                        <span className="text-[#737373]">
                            2주
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification2Component