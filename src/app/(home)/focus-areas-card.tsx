import { useCenterStore } from '@/hooks/use-center'
import Card from '@/components/card'
import { useConfigStore } from './stores/config-store'
import { HomeDraggableLayer } from './home-draggable-layer'
import { CARD_SPACING } from '@/consts'

const focusAreas = [
    "Neural Language Architectures",
    "Cognitive Vision Systems",
    "Linguistic Intelligence",
    "Scalable Ecosystems"
]

export default function FocusAreasCard() {
    const center = useCenterStore()
    const { cardStyles } = useConfigStore()
    const styles = cardStyles.focusAreasCard
    const hiCardStyles = cardStyles.hiCard
    const aboutMeCardStyles = cardStyles.aboutMeCard

    const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - styles.width / 2
    const y = styles.offsetY !== null ? center.topY + styles.offsetY : center.topY + hiCardStyles.height + aboutMeCardStyles.height + CARD_SPACING 

    return (
        <HomeDraggableLayer cardKey='focusAreasCard' x={x} y={y} width={styles.width} height={styles.height}>
            <Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='p-6 max-sm:static'>
                <div className='flex flex-col items-center justify-center h-full'>
                    {/* Bigger, more confident header with tighter bottom margin */}
                    <h2 className='text-lg font-bold text-gray-900 tracking-tight mb-3'>
                        Primary Domains
                    </h2>

                    <div className='flex flex-col items-center w-full'>
                        {focusAreas.map((area, index) => (
                            <div key={index} className='w-full flex flex-col items-center'>
                                {/* Tightened padding for a denser, premium feel */}
                                <span className='text-sm font-medium text-gray-600 py-1.5'>
                                    {area}
                                </span>
                                
                                {/* Subtle, very thin divider to manage the width gap */}
                                {index !== focusAreas.length - 1 && (
                                    <div className='w-12 h-[1px] bg-gray-100 mt-1 mb-1' />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </HomeDraggableLayer>
    )
}
