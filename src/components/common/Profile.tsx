import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

interface IProfileComponent {
    className?: string,
}

function ProfileComponent({
    className,
}: IProfileComponent) {
    return (
        <div className={"w-full flex flex-col flex-shrink-0 "} >
            {/* 프로필 이미지 */}
            <div className="flex justify-center" >
                <div className="w-[200px] h-[230px] rounded-[20%] overflow-hidden flex mb-4 bg-[url('assets/images/profile.webp')] bg-cover" />
            </div >
            {/* 프로필란 */}
            <div className="flex flex-col text-center font-bold mb-2 " >
                <div className="text-[30px] mb-[15px] text-white">Dunzae</div>
                <div className="px-[10px] text-[15px] text-gray-400">
                    <span className="p-2"># 1999년생</span>
                    <span className="p-2"># OS</span>
                    <span className="p-2"># Web</span> <br />
                    <span className="p-2"># React</span>
                    <span className="p-2"># Express</span>
                    <span className="p-2"># C/C++</span> <br />
                </div>
            </div>
            {/* 링크란 */}
            <div className="text-white flex justify-center items-center" >
                <span>
                    <a href="http://github.com/dunzae" target="_blank">
                        <FaGithub size={30} />
                    </a>
                </span>
                <span className="p-4">
                    <a href="http://dunzae.tistory.com" target="_blank">
                        <SiTistory size={30} />
                    </a>
                </span>
            </div>
        </div >
    )
}

export default ProfileComponent;