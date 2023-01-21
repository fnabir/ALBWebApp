import Image from "next/image";

type imgProps = {
    path: string;
    alt: string;
    width: number;
    height: number;
};

const imageContainer = (props: imgProps) => {
  return(
    <>
      <Image src={`/img/${props.path}.webp`} alt={props.alt} width={props.width} height={props.width} style={{marginTop: '1rem'}}/>
      <p>{props.path}</p>
    </>
  )
}

export default imageContainer