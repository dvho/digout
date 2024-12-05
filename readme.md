# Digout
Dig out your data with [_Digout_](https://www.npmjs.com/package/digout)! Recursively extract and navigate deeply nested data structures, bridging the gaps left by JavaScript's native methods. Flatten multidimensional arrays into a single linear vertical, simplifying the process of analyzing, manipulating and performing preprocessing tasks in AI and machine learning.
_________________________

## API
### digout(`data, [enum]`)
```js
var digout = require('digout');
```
#### Parameters
* `data` (Object | Array | any): The data structure from which to dig out the keys and/or values. This should be an object or an array. If a string, number, boolean, `undefined` or `null` is passed [_Digout_](https://www.npmjs.com/package/digout) will appropriately return an empty object.

* `enum` (String, optional): Specifies the type of data to dig out. It can be one of the following:
    * KEYS:  Returns the keys of the object or the array indices.
    * VALUES: Returns the values in the object or the elements in the array.
    * BOTH: Returns both keys and values as pairs in a flattened object. _This is the default if `enum` is not provided._

## Features
* **Recursive Data Extraction**: Unlike JavaScript's native methods [_Digout_](https://www.npmjs.com/package/digout) dives into the deepest depths of the most convoluted data, ensuring you dig out everything.
* **Data Preprocessing**: [_Digout_](https://www.npmjs.com/package/digout) enhances data extraction and transformation, making it a valuable component of a broader data preprocessing pipeline in AI and machine learning workflows.
* **Flexible Data Extraction**: Choose between extracting keys, values or both from your data structures.
* **Seamless Integration**: Use [_Digout_](https://www.npmjs.com/package/digout) as a standalone function or extend JavaScript's native `Object` and `Array` prototypes for even more convenience.
* **Hassle Free**: Seamlessly extract keys and/or values from the most complexly nested data without the hassle of writing complex code.
* **Intuitive**: Flatten expansive data nests into a single vertical.

#### **Object Example**
```js
const exampleObject = {
    favoriteFood: 'Peanut Butter',
    luckyNumber: 200,
    unluckyNumber: 404,
    otherPreferences: {
        favoriteColor: 'Coquelicot',
        favoriteAnimal: 'Tardigrade',
        favoriteSeason: 'Summer'
    },
    mixedArray: [
        1,
        'two',
        undefined,
        null,
        {
            'five': 5
        }
    ],
    mixedObject: {
        undefinedKey: undefined,
        nullKey: null,
        anotherMixedArray: [
            'Me',
            25,
            {
                canRentCar: true
            }
        ],
        yetAnotherMixedObject: {
            yetAnotherMixedArray: [
                false,
                true,
                {
                    key: 'stringValue'
                },
                [
                    1,
                    2,
                    3
                ]
            ],
            stringKey: 'a nested string',
            numberKey: 3.14,
            anotherMoreNestedMixedObject: {
                deepArray: [
                    null,
                    undefined,
                    'deep',
                    100
                ],
                deepObject: {
                    innerString: 'hiding',
                    innerNumber: 2024
                }
            }
        }
    }
}

Object.digout(exampleObject) //Default enum is 'BOTH'

/* Output:

{
    favoriteFood: 'Peanut Butter',
    luckyNumber: 200,
    unluckyNumber: 404,
    'otherPreferences.favoriteColor': 'Coquelicot',
    'otherPreferences.favoriteAnimal': 'Tardigrade',
    'otherPreferences.favoriteSeason': 'Summer',
    'mixedArray.[0]': 1,
    'mixedArray.[1]': 'two',
    'mixedArray.[2]': undefined,
    'mixedArray.[3]': null,
    'mixedArray.[4].five': 5,
    'mixedObject.undefinedKey': undefined,
    'mixedObject.nullKey': null,
    'mixedObject.anotherMixedArray.[0]': 'Me',
    'mixedObject.anotherMixedArray.[1]': 25,
    'mixedObject.anotherMixedArray.[2].canRentCar': true,
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[0]': false,
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[1]': true,
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[2].key': 'stringValue',
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[0]': 1,
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[1]': 2,
    'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[2]': 3,
    'mixedObject.yetAnotherMixedObject.stringKey': 'a nested string',
    'mixedObject.yetAnotherMixedObject.numberKey': 3.14,
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[0]': null,
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[1]': undefined,
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[2]': 'deep',
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[3]': 100,
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepObject.innerString': 'hiding',
    'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepObject.innerNumber': 2024
}
*/
```
#### **Array Example**
```js
[
    'Peanut Butter',
    200,
    404,
    [
        1,
        'two',
        undefined,
        null,
        {
            'five': 5
        }
    ],
    {
        undefinedKey: undefined,
        nullKey: null,
        anotherMixedArray: [
            'Me',
            25,
            {
                canRentCar: true
            }
        ]
    },
    [
        {
            yetAnotherMixedArray: [
                false,
                true,
                {
                    key: 'stringValue'
                },
                [
                    1,
                    2,
                    3
                ]
            ],
            stringKey: 'a nested string',
            numberKey: 3.14
        },
        [
            null,
            undefined,
            'deep',
            100
        ],
        {
            innerString: 'hiding',
            innerNumber: 2024
        }
    ]
]

Array.digout(exampleArray) //Default enum is 'BOTH'

/* Output:

{
  '[0]': 'Peanut Butter',
  '[1]': 200,
  '[2]': 404,
  '[3].[0]': 1,
  '[3].[1]': 'two',
  '[3].[2]': undefined,
  '[3].[3]': null,
  '[3].[4].five': 5,
  '[4].undefinedKey': undefined,
  '[4].nullKey': null,
  '[4].anotherMixedArray.[0]': 'Me',
  '[4].anotherMixedArray.[1]': 25,
  '[4].anotherMixedArray.[2].canRentCar': true,
  '[5].[0].yetAnotherMixedArray.[0]': false,
  '[5].[0].yetAnotherMixedArray.[1]': true,
  '[5].[0].yetAnotherMixedArray.[2].key': 'stringValue',
  '[5].[0].yetAnotherMixedArray.[3].[0]': 1,
  '[5].[0].yetAnotherMixedArray.[3].[1]': 2,
  '[5].[0].yetAnotherMixedArray.[3].[2]': 3,
  '[5].[0].stringKey': 'a nested string',
  '[5].[0].numberKey': 3.14,
  '[5].[1].[0]': null,
  '[5].[1].[1]': undefined,
  '[5].[1].[2]': 'deep',
  '[5].[1].[3]': 100,
  '[5].[2].innerString': 'hiding',
  '[5].[2].innerNumber': 2024
}

*/
```
_________________________
&nbsp;
## Notes
While JavaScript provides native methods like `Object.keys()` and `Object.values()` these functions fall short when it comes to handling nested structures. [_Digout_](https://www.npmjs.com/package/digout) fills in the gap by offering a powerful, recursive solution that effortlessly traverses the most complex data structures, flattening them into a single intuitive vertical of keys, values or both, depending on your needs. Flatten multidimensional arrays into a single linear vertical, simplifying the process of analyzing, manipulating and performing preprocessing tasks in AI and machine learning. With [_Digout_](https://www.npmjs.com/package/digout) you can effortlessly manipulate your data, making it more accessible and manageable, all while maintaining the integrity of your original structures. So dig into your data with [_Digout_](https://www.npmjs.com/package/digout)!


## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install digout
```

## License
(MIT)

Copyright (c) 2024 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.