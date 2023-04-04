import { error } from '@sveltejs/kit';
import { client } from '../../libs/client';
import type { MicroCMSListResponse, MicroCMSObjectContent } from 'microcms-js-sdk';



type Post = {
	publishedAt: Date;
	url: URL;
	id: string;

	top_body: HTMLElement;
	title: string;
	scope: string;
	link: string;
	info: string;
	description: string;
	next: HTMLElement;
	thumbnail: {url: string;}
	body: HTMLElement;
	credit: HTMLElement;
	direction: string;
	work: string;
	content: string;
	client: string;
	html: HTMLElement;
	repeatImg: HTMLElement;
	images: {url: string;}
};

type Props = {
	params: {
		slug: string;
		id: string;
		next: HTMLElement;
		thumbnail: {url: string;}
		title: string;
		scope: string;
	};
};



/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	
	const res = await Promise.all([
	
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'magazine'
		})
	])

	if (res) {
		console.log(res);
		return { ...res };
	}
	throw error(404, 'Not found');
}
