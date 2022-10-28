import { Ring } from '@uiball/loaders'

function Loading() {
    return(
        <div className='loading-container'>
            <Ring 
                size={40}
                lineWeight={5}
                speed={2} 
                color="#909090" 
            />
        </div>
    )
}

export default Loading