import { Post, PostCreator } from './components/posts.js';
/* below is a demo of the Post and PostCreator components. For demo purposes,
 * I passed in a static postId and currentUserId of a preexisting post and user
 * for the Post component, and the userId of a preexisting user for the PostCreator
 * component. Check out components/posts for more information. 
 * */

const App = () => {
    return (
        <div>
        {/*<PostCreator onPostCreate={(postId) => console.log("Post created", postId)} currentUserId="aTSKynFlfWP1AGWkjdGsndlgIXi2"  /> */}
        <Post postId="-Ma_8hv3-wFTqCjCHw3U" currentUserId="aTSKynFlfWP1AGWkjdGsndlgIXi2"  /> 
        </div>
    );
};


export default App;
