import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PostImage from './PostImage';

// export { default as extend } from './extend';

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, forum11111!');

  extend(DiscussionListItem.prototype, "mainItems", function(items) {
    items.add('postimage', <p>discussion</p>);
  })

}, -10);