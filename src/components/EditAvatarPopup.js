import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

    const avatarRef = React.useRef('')

    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }


    return (
        <PopupWithForm name='avatar-edit' title='Обновить аватар' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input id="avatar-link" name="userAvatar" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minLength="2" maxLength="100000" required ref={avatarRef}></input>
            <span id="avatar-link-error" className="popup__input-error"></span>
        </PopupWithForm>
    )

}

export default EditAvatarPopup