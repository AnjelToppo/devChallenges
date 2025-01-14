import bgCafeSm from './../../resources/bg-cafe-sm.jpg';
import bgCafe from './../../resources/bg-cafe.jpg';
import bgCafeLg from './../../resources/bg-cafe-lg.jpg';

export default function CafeHeader() {
    let bgImgSrcSet = `${bgCafeSm} 640w, ${bgCafe} 1280w, ${bgCafeLg} 1920w`
    return (<header className="cafe-header bg-cafe">
        <img
            className="bg-cafe__image"
            src={bgCafeSm}
            // srcSet="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
            // sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px"
            srcSet={bgImgSrcSet}
            sizes="(max-width: 800px) 500px, (max-width: 1600px) 1000px, 1920px"
            alt="person having coffee in cafe"
        />
    </header>)
}