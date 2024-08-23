export const customStyles = {
    control: (provided:any) => ({
        ...provided,
        backgroundColor: '#131a22',
        border: 'none',
        boxShadow: 'none',
    }),
    menu: (provided:any) => ({
        ...provided,
        backgroundColor: '#131a22',
    }),
    singleValue: (provided:any) => ({
        ...provided,
        color: 'white',
    }),
    placeholder: (provided:any) => ({
        ...provided,
        color: 'grey',
    }),
    input: (provided:any) => ({
        ...provided,
        color: 'white',
    }),
    option: (provided:any, state:any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3e4aeb' : state.isSelected ? '#3e4aeb' : '',
        color: state.isSelected ? 'white' : 'white',
        '&:hover': {
            backgroundColor: '#1a2349',
        },
    }),
};