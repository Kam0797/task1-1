import Dexie from "dexie";

const postsDB = new Dexie("posts");

postsDB.version(1).stores({
  posts: `++id,
    postname,
    description,
    photos,
    price,
    benefits,
    addlDetails,
    category`,
});

async function getFileFromUrl(url) {
  try{
  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], url.slice(-4,-1), { type: blob.type });
} catch (e) {
  throw new Error(`error at getFileFromUrl: ${e}`)
}
}



async function addPost(cleanData) {
  console.log("type:", typeof cleanData);


  // const schema = new Map([
  //   ["postname", { type: String }],
  //   ["description", { type: String }],
  //   ["photos", { type: Array, elementType: String }],
  //   ["price", { type: String }],
  //   ["benefits", { type: Array, elementType: String }],
  //   ["addlDetails", { type: Array, elementType: Object }],
  //   ["category", { type: String }],
  // ]);

  // Object.entries(cleanData).forEach(([key, data]) => {
  //   console.log("debug::",key, data, schema.has(key), schema.get(key) )
  //   if (schema.has(key) && (data instanceof schema.get(key).type ||  typeof data == String)) {
  //     if (schema.get(key).elementType) {
  //       [...data].map(dat => {
  //         if(!(dat instanceof schema.get(key).elementType)) return console.error("cleandata failed, et")
  //       })
  //     }
  //   }
  //   else return console.error("cleandata failed")
  // });

  const {postname, description, photos, price, benefits, addlDetails, category} = cleanData;

  // const photoBlobs = photos.map(async (photo) => await getFileFromUrl(photo));

  const photoBlobs = await Promise.all(photos.map(photo => {if(photo) return getFileFromUrl(photo)}))

  const res = await postsDB.posts.put({
    postname: postname,
    description: description,
    photos: photoBlobs,
    price: price,
    benefits: benefits,
    addlDetails: addlDetails,
    category: category
  })
  console.log("res:",res)
}


async function getPosts(fifo=false) { //implement fifo
  
  const posts = await postsDB.posts.reverse().sortBy('id')
  // console.log("posts::" ,posts)
  return posts;
}

async function getPostById(id) {
  const post = await postsDB.posts.where('id').equals(Number(id)).toArray()
  console.log("onepost:", post)
  return post
}

export { postsDB, addPost, getPosts, getPostById, getFileFromUrl };
