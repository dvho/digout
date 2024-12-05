const test = require('./digout.js')


const exampleObjectInputSimple = {
    name: 'Alice',
    age: {
        'chronological': 80,
        'biological': 62,
        'feels': undefined
    },
    rank: 4,
    hobbies: [
        'skiing',
        'cooking',
        'church'
    ],
    other: undefined
}


const exampleArrayInputSimple = [
    'Alice',
    {
        age: {
            'chronological': 80,
            'biological': 62,
            'feels': undefined
        }
    },
    [
        'skiing',
        'cooking',
        'church'
    ],
    undefined
]


const exampleObjectInputComplex = {
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


const exampleArrayInputComplex = [
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



const exampleObjectOutputKeysSimple = [
    'name',
    'age.chronological',
    'age.biological',
    'age.feels',
    'rank',
    'hobbies.[0]',
    'hobbies.[1]',
    'hobbies.[2]',
    'other'
]

const exampleObjectOutputValuesSimple = [
    'Alice',
    80,
    62,
    undefined,
    4,
    'skiing',
    'cooking',
    'church',
    undefined
]

const exampleObjectOutputBothSimple = {
    'name': 'Alice',
    'age.chronological': 80,
    'age.biological': 62,
    'age.feels': undefined,
    'rank': 4,
    'hobbies.[0]': 'skiing',
    'hobbies.[1]': 'cooking',
    'hobbies.[2]': 'church',
    'other': undefined
}


const exampleArrayOutputKeysSimple = [
    '[0]',
    '[1].age.chronological',
    '[1].age.biological',
    '[1].age.feels',
    '[2].[0]',
    '[2].[1]',
    '[2].[2]',
    '[3]'
]

const exampleArrayOutputValuesSimple = [
    'Alice',
    80,
    62,
    undefined,
    'skiing',
    'cooking',
    'church',
    undefined
]

const exampleArrayOutputBothSimple = {
    '[0]': 'Alice',
    '[1].age.chronological': 80,
    '[1].age.biological': 62,
    '[1].age.feels': undefined,
    '[2].[0]': 'skiing',
    '[2].[1]': 'cooking',
    '[2].[2]': 'church',
    '[3]': undefined
}


const exampleObjectOutputKeysComplex = [
  'favoriteFood',
  'luckyNumber',
  'unluckyNumber',
  'otherPreferences.favoriteColor',
  'otherPreferences.favoriteAnimal',
  'otherPreferences.favoriteSeason',
  'mixedArray.[0]',
  'mixedArray.[1]',
  'mixedArray.[2]',
  'mixedArray.[3]',
  'mixedArray.[4].five',
  'mixedObject.undefinedKey',
  'mixedObject.nullKey',
  'mixedObject.anotherMixedArray.[0]',
  'mixedObject.anotherMixedArray.[1]',
  'mixedObject.anotherMixedArray.[2].canRentCar',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[0]',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[1]',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[2].key',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[0]',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[1]',
  'mixedObject.yetAnotherMixedObject.yetAnotherMixedArray.[3].[2]',
  'mixedObject.yetAnotherMixedObject.stringKey',
  'mixedObject.yetAnotherMixedObject.numberKey',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[0]',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[1]',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[2]',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepArray.[3]',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepObject.innerString',
  'mixedObject.yetAnotherMixedObject.anotherMoreNestedMixedObject.deepObject.innerNumber'
]

const exampleObjectOutputValuesComplex = [
    'Peanut Butter',
    200,
    404,
    'Coquelicot',
    'Tardigrade',
    'Summer',
    1,
    'two',
    undefined,
    null,
    5,
    undefined,
    null,
    'Me',
    25,
    true,
    false,
    true,
    'stringValue',
    1,
    2,
    3,
    'a nested string',
    3.14,
    null,
    undefined,
    'deep',
    100,
    'hiding',
    2024
]

const exampleObjectOutputBothComplex = {
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


const exampleArrayOutputKeysComplex = [
    '[0]',
    '[1]',
    '[2]',
    '[3].[0]',
    '[3].[1]',
    '[3].[2]',
    '[3].[3]',
    '[3].[4].five',
    '[4].undefinedKey',
    '[4].nullKey',
    '[4].anotherMixedArray.[0]',
    '[4].anotherMixedArray.[1]',
    '[4].anotherMixedArray.[2].canRentCar',
    '[5].[0].yetAnotherMixedArray.[0]',
    '[5].[0].yetAnotherMixedArray.[1]',
    '[5].[0].yetAnotherMixedArray.[2].key',
    '[5].[0].yetAnotherMixedArray.[3].[0]',
    '[5].[0].yetAnotherMixedArray.[3].[1]',
    '[5].[0].yetAnotherMixedArray.[3].[2]',
    '[5].[0].stringKey',
    '[5].[0].numberKey',
    '[5].[1].[0]',
    '[5].[1].[1]',
    '[5].[1].[2]',
    '[5].[1].[3]',
    '[5].[2].innerString',
    '[5].[2].innerNumber'
]

const exampleArrayOutputValuesComplex = [
    'Peanut Butter',
    200,
    404,
    1,
    'two',
    undefined,
    null,
    5,
    undefined,
    null,
    'Me',
    25,
    true,
    false,
    true,
    'stringValue',
    1,
    2,
    3,
    'a nested string',
    3.14,
    null,
    undefined,
    'deep',
    100,
    'hiding',
    2024
]

const exampleArrayOutputBothComplex = {
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



if (JSON.stringify(test(exampleObjectInputSimple, 'KEYS')) !== JSON.stringify(exampleObjectOutputKeysSimple)) {
    throw new Error('Digout is not returning the correct keys for simple objects')
}

if (JSON.stringify(test(exampleObjectInputSimple, 'VALUES')) !== JSON.stringify(exampleObjectOutputValuesSimple)) {
    throw new Error('Digout is not returning the correct values for simple objects')
}

if (JSON.stringify(test(exampleObjectInputSimple, 'BOTH')) !== JSON.stringify(exampleObjectOutputBothSimple)) {
    throw new Error('Digout is not returning the correct keys and values for simple objects')
}


if (JSON.stringify(test(exampleArrayInputSimple, 'KEYS')) !== JSON.stringify(exampleArrayOutputKeysSimple)) {
    throw new Error('Digout is not returning the correct keys for simple arrays')
}

if (JSON.stringify(test(exampleArrayInputSimple, 'VALUES')) !== JSON.stringify(exampleArrayOutputValuesSimple)) {
    throw new Error('Digout is not returning the correct values for simple arrays')
}

if (JSON.stringify(test(exampleArrayInputSimple, 'BOTH')) !== JSON.stringify(exampleArrayOutputBothSimple)) {
    throw new Error('Digout is not returning the correct keys and values for simple arrays')
}


if (JSON.stringify(test(exampleObjectInputComplex, 'KEYS')) !== JSON.stringify(exampleObjectOutputKeysComplex)) {
    throw new Error('Digout is not returning the correct keys for complex objects')
}

if (JSON.stringify(test(exampleObjectInputComplex, 'VALUES')) !== JSON.stringify(exampleObjectOutputValuesComplex)) {
    throw new Error('Digout is not returning the correct values for complex objects')
}

if (JSON.stringify(test(exampleObjectInputComplex, 'BOTH')) !== JSON.stringify(exampleObjectOutputBothComplex)) {
    throw new Error('Digout is not returning the correct keys and values for complex objects')
}


if (JSON.stringify(test(exampleArrayInputComplex, 'KEYS')) !== JSON.stringify(exampleArrayOutputKeysComplex)) {
    throw new Error('Digout is not returning the correct keys for complex arrays')
}

if (JSON.stringify(test(exampleArrayInputComplex, 'VALUES')) !== JSON.stringify(exampleArrayOutputValuesComplex)) {
    throw new Error('Digout is not returning the correct values for complex arrays')
}

if (JSON.stringify(test(exampleArrayInputComplex, 'BOTH')) !== JSON.stringify(exampleArrayOutputBothComplex)) {
    throw new Error('Digout is not returning the correct keys and values for complex arrays')
}