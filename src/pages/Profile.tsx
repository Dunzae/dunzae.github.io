import LayoutComponent from "@components/common/Layout";
import ProfileImage from "@assets/images/profileImage.jpg";

function ProfilePage() {
    return (
        <LayoutComponent>
            <div className="flex flex-col gap-4 h-full">
                <div className="font-NanumGothic font-bold shadow-md border border-gray-200 w-full flex flex-col lg:flex-row p-5 gap-4">
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
                <div className="font-NanumGothic p-4">
                    <h1 className="text-3xl font-bold mb-4">자기소개서</h1>
                    <div className="flex flex-col gap-2">
                        <p>안녕하세요. 저는 1999년생이며, 선린인터넷고등학교 정보통신공학과를 졸업했습니다.</p>
                        <p>저는 특별한 경력이나 학력이 없습니다.</p>
                        <p>제가 증명할 수 있는 방법은 오직 포트폴리오 뿐이라고 생각하여 많은 프로젝트를 기획하고</p>
                        <p>디자인하고, 설계하여 만들었습니다. 그러면서 스스로 많은 피드백을 하며, 저 자신을 성장시키도록</p>
                        <p>노력하였습니다. 하지만 프로젝트를 만들때마다 자괴감이 들었습니다. <strong>정말 이게 최선일까?</strong></p>
                        <p>프로젝트를 하면서 저의 코드에서 불편함과 어리숙함이 계속 눈에 들어왔고, 그것을 버티는게 너무 힘들었습니다.</p>
                        <p>누군가에게 배운 적없이 계속 혼자하다보니, 이게 맞나라는 생각도 계속 들어왔습니다.</p>
                        <p><strong>하지만 포기하기는 싫었습니다.</strong> 어떤 것이 어렵다고 회피하거나 도망치면 결국 계속 도망치게 된다는 것을</p>
                        <p>경험에서 배웠기 때문입니다. </p>
                        <p>저의 성격은 주도면밀하거나 꼼꼼하거나 계획적인 성격과는 거리가 멉니다.</p>
                        <p>MBTI도 ISFP로 내향적이고, 감성적이며, 즉흥적입니다. 어쩌면 코딩과는 거리가 먼 mbti같기도 합니다.</p>
                        <p>그래서 그런지 코딩에 적응하는데도 시간이 많이 걸렸습니다. 계획을 짜는 것이 어려웠지만 좋은 프로그래밍을 위해선</p>
                        <p>설계가 필요했고, 그래서 설계를 잘하기 위해 기획과정을 배우고, 수많은 프로젝트를 진행 해보면서 계획을 배워나갔던 것 같습니다. </p>
                        <p>또한 논리적으로 생각하며, 암기 위주의 학습이 아닌 이해 위주의 학습을 하기 위해서도 많은 시간을 투자했습니다.</p>
                        <p>학창 시절에 공부법은 주로 암기를 통하여 점수를 높여 나갔습니다. 학창시절 공부법이 익숙해졌던 저에게 개발분야는 마치</p>
                        <p>학창시절 공부법을 전면 부인하는 것과 같았습니다. 개발은 암기 위주보다 이해 위주로, 어떻게 활용할 것인가? </p>
                        <p>어떻게 문제를 해결할 것인가? 에 대해 더 많은 초점이 맞춰져있었고, 신기술은 너무나 빨리 빨리 만들어졌습니다.</p>
                        <p>이를 극복하기 위해 일주일에 한 개의 라이브러리를 독파하는 것을 목표로 하여 블로그에 매일매일 글을 올렸습니다.</p>
                        <p>물론 처음에는 한 개의 라이브러리를 학습하는데, 너무나 많은 시간이 걸렸습니다.</p>
                        <p>그렇지만 학습이 진행될 수록 라이브러리를 학습하는 방법이나 공통된 요소들이 눈에 보이기 시작했고, </p>
                        <p>이는 저를 더욱 더 성장하게 만들었습니다. 저에겐 단 하나도 어렵지 않은 것이 없었습니다. </p>
                        <p>하지만 포기하지 않는다면 저는 방법을 찾을 것이고, 언제나 그러했듯 극복해나갈 것입니다. <strong>감사합니다.</strong></p>
                    </div>
                </div>
            </div>

        </LayoutComponent >
    )
}

export default ProfilePage;