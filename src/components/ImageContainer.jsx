import '../css/ImageContainer.css';
import ImageCard from './ImageCard';

const ImageContainer = ({images}) => {
    const imageArr = images?.map((e, index) => <ImageCard key={index} image={e}/>)

    return (
        <div className='imageContainer'>
            {imageArr}
        </div>
    )

}

export default ImageContainer;