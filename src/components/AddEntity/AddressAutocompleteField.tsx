import { useState } from 'react';
import FormTextField from '../FomField/FormFIeld';
import client from '@/app/common/api';
import { GoogleAutocompleteApiResponse, GooglePlace } from '@/app/types/google';
import debounce from 'lodash.debounce';

const getGoogleAutocompleteSuggestions = debounce(async (input = '', handler: (suggestions: GooglePlace[]) => void) => {
  const apiResponse = await client.get<any, { data: GoogleAutocompleteApiResponse }>('/lookup/autocomplete', {
    params: { input },
  });
  const suggestions = apiResponse.data.predictions;
  handler(suggestions);
}, 200);

type Props = {
  textInput: string;
  setTextInput: (value: string) => void;
  onChooseOption: (option: GooglePlace) => void;
};

const AddressAutocompleteField = ({ onChooseOption, textInput, setTextInput }: Props) => {
  const [placesSuggestions, setPlacesSuggestions] = useState<GooglePlace[]>([]);

  const handleInput = async (input: string) => {
    setTextInput(input);
    await getGoogleAutocompleteSuggestions(input, setPlacesSuggestions);
  };

  const handleChooseOption = (option: GooglePlace) => {
    setTextInput(option.main_text);
    onChooseOption(option);
    setPlacesSuggestions([]);
  };

  return (
    <div className="field field--autocomplete">
      <FormTextField
        title="Address"
        value={textInput}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Start typing..."
      />
      {placesSuggestions && (
        <div className="suggestions">
          {placesSuggestions.map((elt) => (
            <button
              className="suggestions__suggestion"
              type="button"
              key={elt.place_id}
              onClick={() => handleChooseOption(elt)}
            >
              <strong className="suggestion-title">{elt.main_text}</strong>
              <span className="suggestion-occupation">{elt.secondary_text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressAutocompleteField;
