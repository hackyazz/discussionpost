import Component, { ComponentAttrs } from 'flarum/common/Component';

// export interface IPostImageAttrs extends ComponentAttrs {
//   post?: any;
// }

// export default class PostImage<CustomAttrs extends IPostImageAttrs = IPostImageAttrs> extends Component<CustomAttrs> {
//   view() {
//     const { post } = this.attrs;

//     return <p className='PostImage'>discussion{JSON.stringify(post)}</p>
//   }
// }

export default class PostImage extends Component {
  view() {
    const { post } = this.attrs;

    return <p className='PostImage'>discussion{JSON.stringify(post)}</p>
  }
}