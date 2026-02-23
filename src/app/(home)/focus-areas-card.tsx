import { useCenterStore } from '@/hooks/use-center'
import Card from '@/components/card'
import { useConfigStore } from './stores/config-store'
import { HomeDraggableLayer } from './home-draggable-layer'
import { CARD_SPACING } from '@/consts'

const focusAreas = [
	{ emoji: '🧠', title: 'AI & Intelligent Systems' },
	{ emoji: '👁️', title: 'Computer Vision' },
	{ emoji: '💬', title: 'NLP & LLMs' },
	{ emoji: '🌐', title: 'Full-Stack Development' }
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
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='p-6 max-sm:static max-sm:translate-0'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-lg font-bold mb-4'>Focus Areas</h2>
					<div className='space-y-3'>
						{focusAreas.map((area, index) => (
							<div key={index} className='flex items-center gap-3'>
								<span className='text-xl'>{area.emoji}</span>
								<span className='text-sm font-medium text-gray-700'>{area.title}</span>
							</div>
						))}
					</div>
				</div>
			</Card>
		</HomeDraggableLayer>
	)
}
