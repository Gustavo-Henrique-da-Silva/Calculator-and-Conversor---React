export const reducer = (state, action) => {
  switch (action.type) {
    case 'BIT_TO_BYTE':
      return { ...state, result: action.payload / 8 };
    case 'BYTE_TO_BIT':
      return { ...state, result: action.payload * 8 };
    case 'KB_TO_BYTE':
      return { ...state, result: action.payload * 1000 };
    case 'BYTE_TO_KB':
      return { ...state, result: action.payload / 1000 };
    case 'MB_TO_BYTE':
      return { ...state, result: action.payload * 1000000 };
    case 'BYTE_TO_MB':
      return { ...state, result: action.payload / 1000000 };
    case 'MB_TO_KB':
      return { ...state, result: action.payload * 1000 };
    case 'KB_TO_MB':
      return { ...state, result: action.payload / 1000 };
    case 'KB_TO_GB':
      return { ...state, result: action.payload / 1000000 };
    case 'GB_TO_KB':
      return { ...state, result: action.payload * 1000000 };
    case 'MB_TO_GB':
      return { ...state, result: action.payload / 1000 };
    case 'GB_TO_MB':
      return { ...state, result: action.payload * 1000 };
    case 'TB_TO_MB':
      return { ...state, result: action.payload * 1000000 };
    case 'MB_TO_TB':
      return { ...state, result: action.payload / 1000000 };
    case 'TB_TO_GB':
      return { ...state, result: action.payload * 1000 };
    case 'GB_TO_TB':
      return { ...state, result: action.payload / 1000 };
    case 'PB_TO_GB':
      return { ...state, result: action.payload * 1000000 };
    case 'GB_TO_PB':
      return { ...state, result: action.payload / 1000000 };
    case 'PB_TO_TB':
      return { ...state, result: action.payload / 1000 };
    case 'TB_TO_PB':
      return { ...state, result: action.payload / 1000 };
  }
};

// return { ...state, result: action.payload / 100 };
