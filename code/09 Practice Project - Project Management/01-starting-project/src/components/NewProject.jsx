import React from 'react'
import Input from './Input'

export default function NewProject({onAdd}) {
  const title = React.useRef();
  const description = React.useRef();
  const dueDate = React.useRef();

  function handleSave(){
    const entedTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //validation...
    onAdd({
      title: entedTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })

  }

  return (
    <div className= "w-[35rem] mt-16">
      <menu className = "flex items-center justify-end gap-4 my-4">
        <li><button className = "text-stone-800 hover:text-stone-950">Cancel</button></li>
        <li><button className = " px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input type="text" label='Title' ref={title}/>
        <Input label='Description' textarea ref={description}/>
        <Input type ="date" label='Due Date' ref={dueDate} />
      </div>
    </div>
  )
}
