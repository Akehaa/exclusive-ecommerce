import { ReactFragment } from "react";

export function SectionTitle(props: { title: ReactFragment }){
  return (
    <h2 className="text-exclusive-text-2 font-inter font-semibold text-xl md:text-3xl">{props.title}</h2>
  )
}