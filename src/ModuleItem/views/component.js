import { useState } from "react";
import { Input, Card} from "antd";
import './style.css';
import ShowFiles from "../../ShowFiles";
import FileModule from "../../FileModule";
import TextModule from "../../TextModule";

export default function ModuleItem({
  moduleId,
  textModules, 
  onClick,
  onSaveModuleTitle
}) {
  const [isDisplay, setIsDisplay] = useState(false);
  const [moduleTitle, setModuleTitle] = useState(null);

  function handleModuleTitleChange(e) {
    setModuleTitle(e.target.value);
  }
  function handleModuleTitleModify(e) {
    setIsDisplay(prev => !prev);
    onSaveModuleTitle(moduleTitle)
  }

  return(
    <Card key='module-item' className='module-item animate-bottom'>
      <div className='add-title'>
        {isDisplay ? 
        <div className='add-title-display module-title'>
          <span>{moduleTitle}</span>
        </div> :
        <Input 
          className='add-title-input' 
          name='moduleTitle' 
          value={moduleTitle} 
          onChange={handleModuleTitleChange}
          placeholder='添加待办模块标题'
        />}
        <span onClick={handleModuleTitleModify}>{isDisplay ? '修改' : '保存'}</span>
      </div>
      <div className='add-module-btns' {...{onClick}}>
        <span id='add-text'>Add Text</span>
        <span id='add-file'>Add File</span>
      </div>
      <div className='module-content'>
        <FileModule {...{moduleId}}/>
        <ShowFiles {...{moduleId}} />
        {textModules?.map(module => (<TextModule key={module.id} {...{moduleId}} id={module.id}/>))}
      </div>
    </Card>
  );
}


