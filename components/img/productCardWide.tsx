import Image from "next/image";

type imgProps = {
    path: string;
};

const imageContainer = (props: imgProps) => {
  return(
    <>
      <Image src={`/img/products/${props.path}.webp`} alt="" width={450} height={300} style={{marginTop: '1rem'}}/>
      <p>{props.path}</p>
    </>
  )
}

export default imageContainer