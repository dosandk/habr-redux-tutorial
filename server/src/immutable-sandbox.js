import Immutable, { Map } from 'immutable'
import chai, { expect, assert } from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

console.log('Immutable', Immutable);

var map1 = Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);

console.log(map1.get('b'));
console.log(map2.get('b'));

map1.forEach((item) => console.log(item))