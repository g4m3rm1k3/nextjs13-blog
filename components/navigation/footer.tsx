import React from 'react';
import Link from 'next/link';
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import SocialLink from '../elements/social-link';

const Footer = () => {
	return (
		<div className='py-8 border-t mt-10'>
			<PaddingContainer>
				<div>
					<h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
					<p className='max-w-md mt-2 text-neutral-700 text-lg'>
						{siteConfig.description}
					</p>
				</div>
				{/* Social and Currently At */}
				<div className='mt-6 flex justify-between gap-4 flex-wrap'>
					<div>
						<div className='font-medium text-lg'>#exploretheworld</div>
						<div className='flex items-center gap-3 text-neutral-600 mt-2'>
							<SocialLink
								platform='twitter'
								link={siteConfig.socialLinks.twitter}
							/>
							<SocialLink
								platform='linkedin'
								link={siteConfig.socialLinks.linkedin}
							/>
							<SocialLink
								platform='youtube'
								link={siteConfig.socialLinks.youtube}
							/>
							<SocialLink
								platform='github'
								link={siteConfig.socialLinks.github}
							/>
						</div>
					</div>
					<div>
						<div className='text-sm text-neutral-400'>Currently At</div>
						<div className='bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2'>
							<div className='bg-emerald-600 w-2 h-2 rounded-full' />
							{siteConfig.currentlyAt}
						</div>
					</div>
				</div>
				{/*bottom section*/}
				<div className='border-t py-3 flex flex-wrap gap-4 mt-4 justify-between'>
					<div className='text-sm text-neutral-400'>
						All rights reserved | Copyright {new Date().getFullYear()}
					</div>
					<div className='text-sm'>
						Made with love by{' '}
						<Link
							className='underline underline-offset-4'
							href={siteConfig.socialLinks.twitter}
						>
							G4m3rM1k3
						</Link>
					</div>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Footer;
