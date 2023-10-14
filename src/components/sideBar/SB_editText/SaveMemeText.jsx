export default function SaveMemeText({saveMemeText,displayTextOptions}) {
    // console.log(memeTxtFieldValue)
    return (
        <input type="button" value="Save Changes"  className='details-btns save-changes-btn' onClick={() => saveMemeText(displayTextOptions)}/>
    )
}