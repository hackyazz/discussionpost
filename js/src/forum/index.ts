import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';

// export { default as extend } from './extend';

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, forum!');

  let discussionpost = DiscussionListItem;

  extend(DiscussionListItem.prototype, "mainItems", function(items) {
    let discussion = discussionpost.prototype.attrs("discussion");
    let firstPost = discussion.firstPost();
    items.add("postimage", `<div>discussion${firstPost.content()}</div>`)
  })
});