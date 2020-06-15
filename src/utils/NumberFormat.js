

export const NumberFormat = (value) => {

    if(value){
        return new Intl.NumberFormat(['ban', 'id']).format(value);
    }
    return value;

};