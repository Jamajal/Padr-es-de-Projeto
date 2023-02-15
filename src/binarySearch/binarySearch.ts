
const createOrdeneredList = () : number[] => {
    const list : number[] = [];

    while(list.length < 100){
        const newNumber : number = Math.floor(Math.random() * 100 + 1);
        list.push(newNumber);
    }

    return list.sort()
}

const binarySearch = (numberToBeSearch, list) : string => {
    let lowest : number = 0;
    let highest : number = list.length - 1;

    while(lowest <= highest){
        let half : number = Math.ceil((lowest + highest) / 2);
        let guess : number = list[half];

        if(guess === numberToBeSearch)
            return `O número ${guess} foi encontrado na posição ${half}`;
        
        if(guess > numberToBeSearch)
            highest = half - 1; 
        else
            lowest = half + 1;
        
    }

    return `O número ${numberToBeSearch} não se encontra na lista`;
}

const list : number[] = createOrdeneredList();
const numberToBeSearch : number = list[50];

console.log(binarySearch(numberToBeSearch, list));