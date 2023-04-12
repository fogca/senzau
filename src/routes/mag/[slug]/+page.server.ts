import { client } from '../../../libs/client';
import type { MicroCMSObjectContent, MicroCMSListResponse } from 'microcms-js-sdk';


type Post = {
	publishedAt: Date;
	url: URL;
	id: string;
	title: string;
	thumbnail: {url: string;}
	body: HTMLElement;
  eng: string;
  seo: string;
};

type Props = {
	params: {
		slug: string;
    
	};
};




/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }: Props) {
  const { slug } = params;


  const [currentPost, allPosts] = await Promise.all([
    client.get<MicroCMSObjectContent & Post>({
      endpoint: 'magazine',
      contentId: slug,
    }),
    client.get<MicroCMSListResponse<Post>>({
      endpoint: 'magazine',
      queries: {
        fields: 'id,slug',
        filters: `publishedAt[greaterThan]${new Date().toISOString()}`,
        orders: '-publishedAt',
        limit: 2,
      },
    }),
  ]);

  const currentIndex = allPosts.contents.findIndex(
    (post) => post.id === currentPost.id
  );

  const prevPost = currentIndex < allPosts.contents.length - 1 ? allPosts.contents[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts.contents[currentIndex - 1] : null;

  return {
    //body: {
      ...currentPost,
      ...prevPost,
      ...nextPost,
    //}
  };









    /*
    nextArticle: nextArticle.length > 0 ? nextArticle[0] : null,
    prevArticle: prevArticle.length > 0 ? prevArticle[0] : null,
    ...nextArticle,
    ...prevArticle
    */
    

  /*
  return {
    body: {
      currentArticle,
      nextArticle: nextArticle.length > 0 ? nextArticle[0] : null,
      prevArticle: prevArticle.length > 0 ? prevArticle[0] : null,
    },
  };
  */
}