import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, admin!');
});
