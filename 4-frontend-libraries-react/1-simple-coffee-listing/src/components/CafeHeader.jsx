export default function CafeHeader() {
    return (<header className="cafe-header bg-cafe">
        <img
            className="bg-cafe__image"
            src="../../resources/bg-cafe-sm.jpg"
            // srcSet="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
            // sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 2000px"
            srcSet="../../resources/bg-cafe-sm.jpg 640w, ../../resources/bg-cafe.jpg 1280w, ../../resources/bg-cafe-lg.jpg 1920w"
            sizes="(max-width: 800px) 500px, (max-width: 1600px) 1000px, 1920px"
            alt="person having coffee in cafe"
        />
    </header>)
}