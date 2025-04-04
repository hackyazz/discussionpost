import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PostImage from './PostImage';

// export { default as extend } from './extend';

function extractImageSrcs(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const imgElements = doc.querySelectorAll('img');
  const srcList = [];

  imgElements.forEach(img => {
    if (img.src) {
      srcList.push(img.src);
    }
  });

  return srcList;
}

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, forum11111!');

  extend(DiscussionListItem.prototype, "mainItems", function(items) {
    const discussion = this.attrs.discussion;
    if(!discussion) {items.add("postimage", <p className='PostImage'>discussion属性不存在</p>); return;}
    const firstPost = discussion.firstPost();
    if(!firstPost) {items.add("postimage", <p className='PostImage'>firstpost为空</p>);return;}
    const content = firstPost.contentHtml();
    const imgSrcList = extractImageSrcs(content);
    console.log("imgScList", imgSrcList, typeof(imgSrcList));
    if(imgSrcList.length == 0) return;

    items.add('postimage',
      <p className='PostImage'>
        {imgSrcList.map((src) => (
          <img className='FoFUpload--Upl-Image-Preview' src={src} loading='lazy' />
        ))}
      </p>
    );
    items.add('postimgsrc', <p className='PostImage'>{imgSrcList}</p>);
  })

}, -10);