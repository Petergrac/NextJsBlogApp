import React from "react";
import { JSX } from "react";
import { useEditorStore } from "@/context/EditorStore";

const Featured = () => {
  const content = useEditorStore((state) => state.content);
  console.log(content?.blocks);

  return (
    <section className="media dark:bg-slate-950 dark:text-white pb-4">
      <div className="lg:px-30">
        <p className="text-center text-2xl border-b mb-2 font-bold lora py-4">
          Featured Posts
        </p>
        <div>
          {content &&
            content.blocks.map((block) => {
              //Dynamic Content
              let content;

              switch (block.type) {
                case "title":
                  const Title =
                    `${block.data.titleType.toLowerCase()}` as keyof JSX.IntrinsicElements;
                  content = (
                    <Title className="text-2xl font-bold pb-2">
                      {block.data.text}
                    </Title>
                  );
                  break;
                // Headings
                case "header":
                  const HeaderTag =
                    `h${block.data.level}` as keyof JSX.IntrinsicElements;
                  content = (
                    <HeaderTag className="text-2xl font-bold pb-2">
                      {block.data.text}
                    </HeaderTag>
                  );
                  break;
                // Paragraphs
                case "paragraph":
                  content = <p>{block.data.text}</p>;
                  break;
                //  Images
                case "image":
                  content = <img src={block.data.file?.url} alt={block.id} />;
                  break;
                // span
                case "span":
                  content = <span>{block.data.text}</span>;
                  break;
                // captions
                case "caption":
                  content = <p>{block.data.caption}</p>;
                  break;
                case "list":
                  content =
                    Array.isArray(block.data.items) &&
                    block.data.items.length > 0 ? (
                      <ul className="indent-8 list-inside">
                        {block.data.items.map(
                          (
                            item: { content: string },
                            i: string | number
                          ) => (
                            <li
                              className={
                                block.data.style === "unordered"
                                  ? "list-disc"
                                  : "list-decimal"
                              }
                              key={i}
                            >
                              {item.content}
                            </li>
                          )
                        )}
                      </ul>
                    ) : null;
              }
              return (
                <div className="pb-5" key={block.id}>
                  {content}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
