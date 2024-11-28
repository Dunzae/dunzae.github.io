import { parse } from "node-html-parser"
import { useMemo } from "react";
interface TocProps {
    body: string
}

function Toc({ body }: TocProps) {
    const root = parse(body);
    const table = useMemo(() =>
        [...root.querySelectorAll("h1, h2, h3")].map((tag, index) =>
        ({
            id: tag.getAttribute("id"),
            to: `#${tag.id}`,
            content: tag.innerText,
            type: tag.tagName
        })
        ), [body])

    return (
        <nav aria-label="Table of contents" className="hidden lg:flex lg:justify-end lg:w-full sticky top-6 max-h-[calc(100vh-40px)] overflow-auto border-l border-l-gray-200">
            <ul>
                <h1 className="text-2xl font-bold font-NanumGothic">
                    목차
                </h1>
                {table.map(header =>
                    <li key={header.id} className={`${header.type === "H2" && "ml-2"} ${header.type === "H3" && "ml-4"} font-bold font-NanumGothic`}>
                        <a href={`#${header.to}`} className="no-underline"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(`${header.id}`)?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                            {header.type === "H1" && <span className="text-xl break-words">{header.content}</span>}
                            {header.type === "H2" && <span className="text-lg break-words">{header.content}</span>}
                            {header.type === "H3" && <span className="text-md break-words">{header.content}</span>}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Toc;