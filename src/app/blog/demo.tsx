import React from 'react'

// export
export default function demo() {
	fetch('https://api.github.com/repos/vercel/next.js').then(res => res.json())
		.then(data => console.log(data))
	return (
		<div>demo</div>
	)
}