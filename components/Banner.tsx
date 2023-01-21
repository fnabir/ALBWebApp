type BannerProps = {
    bgpic?: string;
    heading: string;
    breadcrumb1?: string;
    breadcrumb2?: string;
    breadcrumb3?: string;
};

const Banner = (props: BannerProps) => (
    <div className="banner h-100" style={{ backgroundImage: `url("/img/bg_${props.bgpic}.webp")` }}>
        <div className="banner-area">
            <h1>{props.heading}</h1>
        </div>
    </div>
);

export default Banner