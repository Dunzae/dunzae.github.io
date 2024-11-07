import PostThumbnail from "@assets/images/postThumbnail.jpg"
function Post() {
    return (
        <>
            <div className="w-full h-[200px] relative">
                <img src={PostThumbnail} className="w-full h-full object-cover absolute" />
                <div className=" w-full h-full flex justify-center items-center absolute">
                    <div className="text-white p-3 rounded-xl text-[40px] font-bold font-NanumGothic">
                        React에 대한 고찰
                    </div>
                </div>
            </div>
            <div className="px-5" dangerouslySetInnerHTML={{
                __html: `<div contenteditable="true" translate="no" class="tiptap ProseMirror max-w-full prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl my-5 focus:outline-none" role="textbox" aria-label="Rich-Text Editor" tabindex="0"><h1>asdasdasdasd</h1><h2>asdasdaslkdjakls</h2><h3>asdkjasdlkjasdsadas</h3><blockquote><p>asdasdasdasdasdas</p></blockquote><ul data-type="taskList"><li data-checked="false"><label contenteditable="false"><input type="checkbox"><span></span></label><div><p>asdasdasdas</p></div></li></ul><ul><li><p>asdasdasdas</p></li></ul><pre><code><span class="hljs-attr">asdasdasdasdasd</span>
<span class="hljs-attr">asd</span></code></pre><img src="blob:http://localhost:8080/0965e327-529c-4cd0-9e86-3892fa9f98fc" contenteditable="false" draggable="true" class=""><p><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p></div>`}}>

            </div>
        </>
    )
}

export default Post;