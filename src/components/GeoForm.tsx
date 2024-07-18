import { Square, Circle } from './Geo'

export const GeoForm = () => {
    return(
        <div>
        <h3 className="text-2x1 font-bold">Formas Geométricas</h3>

        <div className='flex gap-2 border-2 rounded-xl p-5'>
        <Square/>
        <Circle/>
        </div>
        
    </div>
    )
    
}