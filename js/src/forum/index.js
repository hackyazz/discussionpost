import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PostImage from './PostImage';

// export { default as extend } from './extend';

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, forum11111!');

  extend(DiscussionListItem.prototype, "mainItems", function(items) {
    const discussion = this.attrs.discussion;
    if(!discussion) {items.add("postimage", <p className='PostImage'>discussion属性不存在</p>); return;}
    const firstPost = discussion.firstPost();
    if(!firstPost) {items.add("postimage", <p className='PostImage'>firstpost为空</p>);return;}
    items.add('postimage', <p className='PostImage'>discussion{JSON.stringify(firstPost || {})}</p>);
  })

}, -10);