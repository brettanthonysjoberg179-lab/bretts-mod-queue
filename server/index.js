import { Devvit } from '@devvit/public-api';
import { reddit } from '@devvit/reddit';

Devvit.configure({
  reddit,
});

Devvit.addTrigger({
  event: 'onAppInstall',
  job: async () => {
    console.log("Brett's Mod Queue installed!");
    return { status: 'ok' };
  },
});

Devvit.addTrigger({
  event: 'onCommentCreate',
  job: async () => {
    console.log("Brett's Mod Queue comment trigger fired");
    return { status: 'ok' };
  },
});

Devvit.addTrigger({
  event: 'onPostCreate',
  job: async () => {
    console.log("Brett's Mod Queue post trigger fired");
    return { status: 'ok' };
  },
});

Devvit.addUIElement({
  type: 'post',
  location: 'head',
  render: async () => {
    return null;
  },
});

export default Devvit;
