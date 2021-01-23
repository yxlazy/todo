import * as actionTypes from "./actionTypes";

//action.file是个'fileList'数组
function addFileModule(state, action) {
  const temp = state.concat();
  let isNew = true;

  temp.forEach(f => {
    if (f.moduleId === action.moduleId) {
      f.fileList = action.file;
      isNew = false;
    }
  });

  if (isNew) {
    temp.push({
      moduleId: action.moduleId,
      fileList: action.file
    });
  }

  return temp;
}

function updateModalStatus(state, action) {
  const temp = state.concat();
  let isNew = true;

  temp.forEach(f => {
    if (f.moduleId === action.moduleId) {
      f.isOpenModal = action.isOpenModal;
      isNew = false;
    }
  });

  if (isNew) {
    temp.push({moduleId: action.moduleId, isOpenModal: action.isOpenModal});
  }
  return temp;
}

function deleteFile(state, action) {
  const temp = state.concat();

  temp.map(m => {
    if (m.moduleId === action.moduleId) {
      m.fileList = m.fileList.filter(f => f.response.params.file !== action.file);
    }
  });
  
  return temp;
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_FILE:
      return addFileModule(state, action)
    case actionTypes.IS_OPEN_MODAL:
      return updateModalStatus(state, action)
    case actionTypes.RESET:
      return []
    case actionTypes.DELETE:
      return deleteFile(state, action)
    case actionTypes.INIT:
      return action.init
    default:
      return state
  }
}