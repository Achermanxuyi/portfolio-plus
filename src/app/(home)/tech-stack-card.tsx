'use client'

import { useCenterStore } from '@/hooks/use-center'
import Card from '@/components/card'
import { useConfigStore } from './stores/config-store'
import { HomeDraggableLayer } from './home-draggable-layer'
import { useState } from 'react'
import { CARD_SPACING } from '@/consts'

const techCategories = [
    {
        name: 'Core Languages',
        skills: 'Python · TypeScript · Java · C++'
    },
    {
        name: 'Architecture',
        skills: 'Next.js · Node.js · Spring Boot · FastAPI'
    },
    {
        name: 'Interface',
        skills: 'React · Tailwind · SwiftUI · Flutter'
    },
    {
        name: 'Data Infrastructure',
        skills: 'PostgreSQL · MongoDB · Redis · Pinecone'
    }
]

export default function TechStackCard() {
	const center = useCenterStore()
	const { cardStyles } = useConfigStore()
	const styles = cardStyles.techStackCard
	const hiCardStyles = cardStyles.hiCard
	const aboutMeCardStyles = cardStyles.aboutMeCard
	const focusAreasCardStyles = cardStyles.focusAreasCard

	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - styles.width / 2
	const y = styles.offsetY !== null ? center.topY + styles.offsetY : center.topY + hiCardStyles.height + aboutMeCardStyles.height + focusAreasCardStyles.height + CARD_SPACING * 1.5

	return (
		<HomeDraggableLayer cardKey='techStackCard' x={x} y={y} width={styles.width} height={styles.height}>
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='p-6 max-sm:static max-sm:translate-0 overflow-y-auto'>
				<div className='flex flex-col'>
					<h2 className='text-lg font-bold mb-4'>Tech Stack</h2>
					<div className='space-y-2'>
						{techCategories.map((category, index) => (
							<div
								key={index}
								className='cursor-pointer rounded-lg bg-linear-to-r from-gray-50 to-transparent p-3 transition-all hover:from-gray-100 hover:shadow-md'
								onMouseEnter={() => setExpandedIndex(index)}
								onMouseLeave={() => setExpandedIndex(null)}
							>
								<div className='font-medium text-sm text-gray-800'>{category.name}</div>
								{(expandedIndex === index) && (
									<div className='mt-2 text-xs text-gray-600 animate-in fade-in duration-200'>
										{category.skills}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Card>
		</HomeDraggableLayer>
	)
}
