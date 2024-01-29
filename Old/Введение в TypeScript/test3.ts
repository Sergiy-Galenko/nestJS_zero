let v: 'test' = 'test';

type actionsType = 'up' | 'down';

function performAction(action: actionsType): -1|1{
    switch (action){
        case 'up':
            return 1
        case 'down':
            return -1
    }
}