import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';
function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className='widget__article'>
			<div className='widgets__articleleft'>
				<FiberManualRecord />
			</div>

			<div className='widgets__articleright'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className='widgets'>
			<div className='widget__header'>
				<h2>LinkedIn News</h2>
				<Info />
			</div>
			{newsArticle('elon musk twitter', 'Top news - 999 readers')}
			{newsArticle('ukraine russian war', 'Top news - 2,324 readers')}
			{newsArticle('corona virus', 'Top news - 8190 readers')}
			{newsArticle('IPL', 'Top news - 6,324 readers')}
			{newsArticle('newyork shootings', 'Trending news - 999 readers')}
			{newsArticle('justin trudeau', 'Trending news - 1,132 readers')}
			{newsArticle('indian elections', 'Trending news - 5399 readers')}
			{newsArticle('tennis', 'Trending news - 1,824 readers')}
		</div>
	);
}

export default Widgets;
