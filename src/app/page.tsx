'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

export default function Home() {
	React.useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	const images = [
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/74346745-51719340.jpg?v=1690773655',
			alt: 'Image 3',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/71940688-51251691.jpg?v=1687491315',
			alt: 'Image 1',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/71912479-52563334.jpg?v=1694221197',
			alt: 'Image 2',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/74346742-53005340.jpg?v=1696043972',
			alt: 'Image 4',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/71855817-51253382.jpg?v=1687508690',
			alt: 'Image 5',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/75387246-52915200.jpg?v=1695343334',
			alt: 'Image 6',
		},
		{
			src: 'https://cmsphoto.ww-cdn.com/superstatic/3445795/art/default/82824887-59359161.jpg?v=1726461644',
			alt: 'Image 7',
		},
	];

	return (
		<main className="min-h-screen w-full">
			<div className="relative flex h-[50vh] items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,oklch(from_var(--foreground)_l_c_h_/_0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl font-bold">
					Scroll Down for Zoom Parallax
				</h1>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[50vh]" />
		</main>
	);
}
