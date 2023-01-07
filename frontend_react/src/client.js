import SanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = SanityClient({
  projectId: 'zdst3f05',
  dataset: 'production',
  apiVersion: '2023-01-04', // use current UTC date - see "specifying API version"!
  token: 'sk8enpAczjZxNwpMhO8ueKftiUtprtu6jbuAJlyS8CaYuL5Lligus6ffzHKQtXyl3P5GV4smVO1H8QETg8Bcb3VQBnGXxXxwRuxuSIuOMxMGamsiEjmnO9HEZ73MKO9Ydrfukfo7hFky9vq4bE1FRfmnLXv3X9vgDK1IfwecPY1VrXvsEz2S', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);