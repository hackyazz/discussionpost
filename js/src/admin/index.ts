import app from 'flarum/admin/app';

app.initializers.add('yazz-discussionpost', () => {
  console.log('[yazz/discussionpost] Hello, admin!');
});
