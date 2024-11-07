import LayoutComponent from "@components/common/Layout";
import ProfileImage from "@assets/images/profileImage.jpg";

function ProfilePage() {
    return (
        <LayoutComponent>
            <div className="flex flex-col gap-4 h-full">
                <div className="font-NanumGothic font-bold shadow-md border border-gray-200 w-full flex p-5 gap-4">
                    <div className="w-full h-auto lg:w-[190px] lg:h-[270px] flex-shrink-0 ">
                        <img src={ProfileImage} className="w-full h-full" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <h2 >자기소개 🕶</h2>
                        </div>
                        <ul>
                            <li className="mb-2">☕️ 저는 현재 취업을 준비하고 있습니다.</li>
                            <li className="mb-2">📒 현재 공부하고 있는 것은 React, Typescript, 리버싱을 공부합니다.</li>
                            <li className="mb-2">🤔 주로 공부는 책으로 하며, 글자를 쓰는 것을 좋아합니다.</li>
                            <li className="mb-2">📜 C, C++, 리눅스, 네트워크, 임베디드, 운영체제, 리버싱를 공부해보고 싶습니다.</li>
                            <li className="mb-2">📫 이메일 - <a href="mailto:dunzae99@gmail.com">dunzae99@gmail.com</a></li>
                            <li className="mb-2">🎮 블로그 - <a href="http://dunzae.github.io" rel="nofollow">LogSomething</a></li>
                            <li className="mb-2">💣 TMI - ISFP, 음악을 좋아하고 배우는 것을 좋아합니다</li>
                        </ul>
                    </div>
                </div>
            </div>
        </LayoutComponent >
    )
}

export default ProfilePage;