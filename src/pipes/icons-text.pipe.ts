import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconsText',
  standalone: true
})
export class IconsTextPipe implements PipeTransform {

icons:{[key:string]:string}={ 
  happy: '😊',
  sad: '😢',
  love: '❤️',
  angry: '😡',
  star: '⭐',
  thumbsUp: '👍',
  thumbsDown: '👎',
  party: '🥳',
  sun: '☀️',
  moon: '🌙',
  cloud: '☁️',
  rain: '🌧️',
  snow: '❄️',
  fire: '🔥',
  heart: '💖',
  music: '🎵',
  food: '🍔',
  drink: '🥤',
  car: '🚗',
  airplane: '✈️',
  book: '📚',
  clock: '⏰',
  phone: '📱',
  laptop: '💻',
  money: '💰',
  shopping: '🛍️',
  gift: '🎁',
  trophy: '🏆',
  tree: '🌳',
  flower: '🌸',
  bike: '🚲',
};


  transform(value: string):string{
    return this.icons[value]|| '?'

  }

}
