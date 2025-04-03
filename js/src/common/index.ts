import app from 'flarum/common/app';

app.initializers.add('yazz-discussionpost-common', () => {
  console.log('[yazz/discussionpost] Hello, forum and admin!');
});
