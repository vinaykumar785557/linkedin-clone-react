import {
	CalendarViewDay,
	Create,
	Event,
	Image,
	Subscriptions,
} from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
	const user = useSelector(selectUser);

	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoURL || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<Create />

					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type='text'
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>

				<div className='feed__inputOption'>
					<InputOption Icon={Image} title='Photo' color='#70b5f9' />
					<InputOption Icon={Subscriptions} title='Video' color='#7E7A33E' />
					<InputOption Icon={Event} title='Event' color='#C0CBCD' />
					<InputOption
						Icon={CalendarViewDay}
						title='Write article'
						color='#7FC15E'
					/>
				</div>
			</div>

			{/* Posts */}

			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
			{/* <Post
				name='username vinaykumar'
				description='user description'
				message='message goes here'
			/> */}
		</div>
	);
}

export default Feed;
