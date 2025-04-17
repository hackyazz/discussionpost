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

  imgElements.forEach((img) => {
    if (img.src) {
      srcList.push(img.src);
    }
  });

  return srcList;
}

app.initializers.add(
  'yazz-discussionpost',
  () => {
    console.log('[yazz/discussionpost] Hello, forum11111!');
    
    const style = document.createElement('style');
    style.innerHTML = `
      @container (max-width: 767px) {
        .PostImageWraper {
          gap: 4px !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        .PostImageWraper img:nth-of-type(n + 4) {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    extend(DiscussionListItem.prototype, 'mainItems', function (items) {
      const discussion = this.attrs.discussion;
      if (!discussion) {
        items.add('postimage', <p className="PostImage">discussion属性不存在</p>);
        return;
      }
      const firstPost = discussion.firstPost();
      if (!firstPost) {
        items.add('postimage', <p className="PostImage">firstpost为空</p>);
        return;
      }
      const content = firstPost.contentHtml();
      const imgSrcList = extractImageSrcs(content);

      if (imgSrcList.length == 0) return;

      items.add(
        'postimage',
        <div className="PostContainer">
          <div className="PostImageWraper">
            {imgSrcList.slice(0, 5).map((src) => {
              if (src.includes('assets/files/')) {
                return <img className="PostImage" src={src} loading="lazy" />;
              }
            })}
          </div>
        </div>
      );
    });
  },
  -10
);
