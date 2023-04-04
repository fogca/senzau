import { error } from '@sveltejs/kit';
import { client } from '../libs/client';
import type { MicroCMSListResponse,MicroCMSObjectContent } from 'microcms-js-sdk';


type Post = {
	id: string;
	title: string;
	title_eng: string;
	top_body: HTMLElement;
};


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	
	const res = await client.get<MicroCMSListResponse<Post>>({
			endpoint: 'pages',
	});
	if (res) {
		console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}
