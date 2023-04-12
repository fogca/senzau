import { error } from '@sveltejs/kit';
import { client } from '../../../libs/client';
import type { MicroCMSObjectContent, MicroCMSListResponse } from 'microcms-js-sdk';


type Post = {
	publishedAt: Date;
	url: URL;
	id: string;
	title: string;
	scope: string;
	link: string;
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
	};
};


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }: Props) {


	const res = await Promise.all([
		client.get<MicroCMSObjectContent & Post>({
			endpoint: 'magazine',
			contentId: params.slug
		})
	])
	
	/*
	const index = res[1].contents.findIndex((content) => content.id === params.slug);
    const next = res[1].contents[index + 1];
	*/
	
	if (res) {
		console.log(res);
		return { 
			...res
		}
	}
	
	throw error(404, 'Not found');
}
