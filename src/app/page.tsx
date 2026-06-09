'use client';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

export default function Home() {

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
		<main className="min-h-screen w-full" style={{ backgroundColor: '#EDE8E3' }}>
				<ZoomParallax images={images} />
		</main>
	);
}
