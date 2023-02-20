export const reducer = (state, action) => {
  switch (action.type) {
    case 'CM_TO_METERS':
      return { ...state, result: action.payload / 100 };
    case 'METERS_TO_CM':
      return { ...state, result: action.payload * 100 };
    case 'METERS_TO_KM':
      return { ...state, result: action.payload / 1000 };
    case 'KM_TO_METERS':
      return { ...state, result: action.payload * 1000 };
    case 'CM_TO_INCHES':
      return { ...state, result: action.payload / 2.54 };
    case 'INCHES_TO_CM':
      return { ...state, result: action.payload * 2.54 };
    case 'METERS_TO_INCHES':
      return { ...state, result: action.payload / 39.3700787 };
    case 'INCHES_TO_METERS':
      return { ...state, result: action.payload * 39.3700787 };
    case 'INCHES_TO_FOOT':
      return { ...state, result: action.payload / 12 };
    case 'FOOT_TO_INCHES':
      return { ...state, result: action.payload * 12 };
    case 'METERS_TO_FOOT':
      return { ...state, result: action.payload * 3.2808399 };
    case 'FOOT_TO_METERS':
      return { ...state, result: action.payload / 3.2808399 };
    case 'FOOT_TO_CM':
      return { ...state, result: action.payload / 30.48 };
    case 'CM_TO_FOOT':
      return { ...state, result: action.payload * 30.48 };
    case 'CM_TO_YARDS':
      return { ...state, result: action.payload / 91.48 };
    case 'YARDS_TO_CM':
      return { ...state, result: action.payload * 91.48 };
    case 'METERS_TO_YARDS':
      return { ...state, result: action.payload / 1.0936133 };
    case 'YARDS_TO_METERS':
      return { ...state, result: action.payload * 1.0936133 };
    case 'YARDS_TO_KM':
      return { ...state, result: action.payload / 1093.6133 };
    case 'KM_TO_YARDS':
      return { ...state, result: action.payload * 1093.6133 };
    case 'METERS_TO_MILES':
      return { ...state, result: action.payload / 1609.344 };
    case 'MILES_TO_METERS':
      return { ...state, result: action.payload * 1609.344 };
    case 'CM_TO_MILES':
      return { ...state, result: action.payload / 160934.4 };
    case 'MILES_TO_CM':
      return { ...state, result: action.payload * 160934.4 };
    case 'KM_TO_MILES':
      return { ...state, result: action.payload / 1.609344 };
    case 'MILES_TO_KM':
      return { ...state, result: action.payload * 1.609344 };
    case 'YARDS_TO_MILES':
      return { ...state, result: action.payload * 1760 };
    case 'MILES_TO_YARDS':
      return { ...state, result: action.payload / 1760 };
  }
};

/** case: 'CM_TO_METERS' 
        
    case: 'METERS_TO_CM' 
        
    case:   'METERS_TO_KM' 
        
    case:   'KM_TO_METERS' 
        
    case:   'CM_TO_INCHES' 
        
    case:   'METERS_TO_INCHES' 
        
    case:   'INCHES_TO_CM' 
        
    case:   'INCHES_TO_METERS' 
        
    case:   'INCHES_TO_FOOT' 
        
    case:   'FOOT_TO_INCHES' 
        
    case:   'METERS_TO_FOOT' 
        
    case:   'FOOT_TO_CM' 
        
    case:   'FOOT_TO_METERS' 
        
    case:   'CM_TO_YARDS' 
        
    case:   'YARDS_TO_CM' 
        
    case:   'METERS_TO_YARDS' 
        
    case:   'YARDS_TO_METERS' 
        
    case:   'YARDS_TO_KM' 
        
    case:   'KM_TO_YARDS' 
        
    case:   'METERS_TO_MILES' 
        
    case:   'MILES_TO_METERS' 
        
    case:   'CM_TO_MILES' 
        
    case:   'MILES_TO_CM' 
        
    case:   'MILES_TO_KM' 
        
    case:   'KM_TO_MILES' 
        
    case:   'YARDS_TO_MILES' 
        
    case:   'MILES_TO_YARDS' 
         */
