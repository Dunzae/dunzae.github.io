import ProfileImage from "@assets/images/profile.webp";

function NotificationComponent() {
    return (
        <div className="w-full border-b-[#dbdbdb] px-[15px] py-[8px]">
            <div className="mb-[18px] text-[16px] font-bold">
                이번 주
            </div>
            <div className="pb-4 border-b">
                {/* 프로필과 알림 내용을 위한 div */}
                <div className="flex">
                    <div className="flex-shrink-0 basis-0 mr-[12px] ">
                        <div className="w-[44px] h-[44px] rounded-[50%] overflow-hidden">
                            <img src={ProfileImage} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                        <p>
                            <strong>누군가</strong>
                            <span>가 당신에게 팔로우를 요청했습니다.</span>
                        </p>
                        <span className="text-[#737373]">
                            2주
                        </span>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-4">
                    <button className="flex justify-center items-center flex-shrink-0 border-none bg-[#000000] rounded-[8px] px-[16px] h-[30px] font-bold text-white text-[14px] leading-[18px]">
                        수락
                    </button>
                    <button className="flex justify-center items-center flex-shrink-0 border-none bg-[#efefef] rounded-[8px] px-[16px] h-[30px] font-bold text-[14px] leading-[18px]">
                        거절
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotificationComponent;