import { useCenterStore } from '@/hooks/use-center'
import Card from '@/components/card'
import { useConfigStore } from './stores/config-store'
import { HomeDraggableLayer } from './home-draggable-layer'

export default function AboutMeCard() {
	const center = useCenterStore()
	const { cardStyles } = useConfigStore()
	const styles = cardStyles.aboutMeCard

	const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - styles.width / 2
	const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y - styles.height / 2

	return (
		<HomeDraggableLayer cardKey='aboutMeCard' x={x} y={y} width={styles.width} height={styles.height}>
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='p-6 max-sm:static max-sm:translate-0'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-lg font-bold mb-3'>About Me</h2>
					<p className='text-sm text-gray-700 mb-2'>
						🎓 AI-focused ICT student at UTAS
					</p>
					<p className='text-sm text-gray-600 mb-3'>
						Building intelligent systems across LLMs, computer vision, and data-driven applications.
					</p>
					<p className='text-sm text-gray-600'>
						Experienced in both AI engineering and modern web development.
					</p>
				</div>
			</Card>
		</HomeDraggableLayer>
	)
}
