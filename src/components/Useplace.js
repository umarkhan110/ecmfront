import React, { useState, createContext } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
const Useplace = () => {
    const [address, setAdress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    // console.log(coordinates)
    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        console.log(value)
        const latlng = await getLatLng(result[0]);
        setAdress(value)
        setCoordinates(latlng)
        // console.log(latlng)
    }
    return <div>
        <PlacesAutocomplete
            value={address}
            onChange={setAdress}
            onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: 'Location ...',
                            className: 'locat',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                            };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, { style })} >
                                    {suggestion.description}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>


    </div>;
};

export default Useplace;
