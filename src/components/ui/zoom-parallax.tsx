'use client';

import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
	/** Duration of one full zoom cycle in seconds (default: 8) */
	duration?: number;
}

export function ZoomParallax({ images, duration = 8 }: ZoomParallaxProps) {
	const progress = useMotionValue(0);
	const startTime = useRef<number | null>(null);

	useAnimationFrame((t) => {
		if (startTime.current === null) startTime.current = t;
		const elapsed = (t - startTime.current) / 1000;
		// ease-in-out using sine curve: 0 → 1 over `duration` seconds, then hard reset
		const raw = (elapsed % duration) / duration;
		// smooth ease: slow start, slow end
		const eased = raw < 0.5
			? 2 * raw * raw
			: 1 - Math.pow(-2 * raw + 2, 2) / 2;
		progress.set(eased);
	});

	const scale4 = useTransform(progress, [0, 1], [1, 4]);
	const scale5 = useTransform(progress, [0, 1], [1, 5]);
	const scale6 = useTransform(progress, [0, 1], [1, 6]);
	const scale8 = useTransform(progress, [0, 1], [1, 8]);
	const scale9 = useTransform(progress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div className="relative h-screen overflow-hidden" style={{ backgroundColor: '#EDE8E3' }}>
			{images.map(({ src, alt }, index) => {
				const scale = scales[index % scales.length];

				return (
					<motion.div
						key={index}
						style={{ scale }}
						className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
					>
						<div className="relative h-[25vh] w-[25vw]">
							<img
								src={src || '/placeholder.svg'}
								alt={alt || `Parallax image ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}
