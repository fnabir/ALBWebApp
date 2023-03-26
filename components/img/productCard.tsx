import Image from "next/image";

type imgProps = {
    path: string;
};

const imageContainer = (props: imgProps) => {
  return(
    <>
      <Image src={`/img/products/${props.path}.webp`} alt="" width={210} height={300} style={{marginTop: '1rem'}}/>
      <p style={{fontSize: '1.2rem'}}>{props.path}</p>
    </>
  )
}

export default imageContainer