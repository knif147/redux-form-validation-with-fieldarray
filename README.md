# reaction-carousel

A Carousel Component Build With Pure React


### Installation
npm:
```bash
npm install reaction-carousel
```

yarn:
```bash
yarn add reaction-carousel
```

⚠️ Also you should add .scss file for style and fonts 

```bash
npm install slick-carousel
@import "~reaction-carousel/lib/slick.scss";
```

### Example

```js
import React, { Component } from 'react';
import { Carousel } from 'reaction-carousel';

class App extends Component {

  render() {
    return (
        <Carousel>
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
          <img src="https://unsplash.it/1200/310?random" />
        </Carousel>
    );
  }
}

```

|    Property    | Type |          Description          | Working |
| -------------  | ---- |          -----------          | ------- |
| children  | array or object | carousel childs | Yes |
| transitionTime  | number | custom transition time for sliding items | Yes |
| arrows         | bool | Should we show Left and right nav arrows | Yes |
| dots         | bool | Should we show dots | Yes |
| autoPlay         | bool | auto playing | Yes |
| autoplaySpeed         | bool | auto playing speed | Yes |
| loop         | bool | enable infinite loop | Yes |
| draggable         | bool | enable draggable for slides | Yes |
| slidesToShow         | bool | Number of slides to be visible at a time | Yes |

### Flexbox support
If you have flex property on container div of slider, add below css
```css
* {
  min-height: 0;
  min-width: 0;
}
```
